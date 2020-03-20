import React, { useState } from 'react';
import axios from 'axios';
import Map from './Map';
import Popup from './components/Popup';

const INPUTS = [
  { value: 'women', label: 'Women' },
  { value: 'shelter', label: 'Shelter' },
  { value: 'lgbtq', label: 'LGBTQ' },
  { value: 'youth', label: 'Youth' }
];

const Chat = () => {
  const [outputs, setOutputs] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = showPopup => {
    setShowPopup(!showPopup);
  };
  const closePopup = () => {
    console.log('we closed this!');
    setShowPopup(false);
  };
  const handleInputClick = input => {
    axios
      .get(`/organizations.json?description=${input.value}`)
      .then(({ data }) => {
        const newOutputs = data.map(org => ({
          name: org.name,
          resource_description: org.resource_description,
          address: org.address,
          website: org.website,
          mobile: formatPhoneNumber(org.regular_phone_number),
          mobileTo: `tel:${org.regular_phone_number}`,
          ...org
        }));
        setOutputs(newOutputs);
      });
  };

  const handleLocationClick = ({ longitude, latitude }) => {
    {
      //Turbolinks.visit(`/yogamap?lng=${longitude}&lat=${latitude}`); this code is for the Map to open on a new

      togglePopup(showPopup);
    }
  };

  const formatPhoneNumber = phoneNumberString => {
    console.log('entered format phone number');
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    console.log(match);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };

  return (
    <div className="chat-box" style={{ padding: 10 }}>
      <div
        className="inputs"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        {INPUTS.map(input => (
          <div className="input">
            <button
              className="categoryButton"
              onClick={() => handleInputClick(input)}
            >
              {input.label}
            </button>
          </div>
        ))}
      </div>
      <div className="messages" style={{ display: 'grid' }}>
        {outputs.map(output => {
          if (output.hasMap) return <Map output={output} />;
          return (
            <div
              className="output"
              style={{
                border: '1px solid lightgrey',
                borderRadius: 3
              }}
            >
              <p>{output.name}</p>
              <p>{output.resource_description}</p>
              <p>
                <a
                  className="address"
                  onClick={() => handleLocationClick(output)}
                >
                  {output.address}
                </a>
              </p>

              <div>
                {showPopup ? (
                  <Popup
                    text='Click "Close Button" to hide popup'
                    long={output.longitude}
                    lat={output.latitude}
                    closePopup={closePopup}
                  />
                ) : null}
              </div>
              <p>
                <a className="info" href={output.website} target="_blank">
                  {output.website}
                </a>
              </p>
              <p>
                {' '}
                Call us:
                <a className="mobile" href={output.mobileTo}>
                  {output.mobile}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default props => <Chat {...props} />;
