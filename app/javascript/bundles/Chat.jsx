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

  const togglePopup = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  const handleInputClick = input => {
    axios
      .get(`/organizations.json?description=${input.value}`)
      .then(({ data }) => {
        const newOutputs = data.map(org => ({
          name: `${org.name} - ${org.resource_description}`,
          address: org.address,
          website: org.website,
          mobile: org.regular_phone_number,
          mobileTo: `tel:${org.regular_phone_number}`,
          map: `/yogamap?lng=${org.longitude}&lat=${org.latitude}`,
          ...org
        }));
        setOutputs(newOutputs);
      });
  };

  const handleLocationClick = ({ longitude, latitude }) => {
    {
      //Turbolinks.visit(`/yogamap?lng=${longitude}&lat=${latitude}`);

      togglePopup();
    }
  };

  return (
    <div className="chat-box" style={{ padding: 10 }}>
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
              <p>
                <a
                  className="address"
                  onClick={() => handleLocationClick(output)}
                >
                  {output.address}
                </a>
              </p>
              <p>
                {showPopup ? (
                  <Popup
                    text='Click "Close Button" to hide popup'
                    closePopup={togglePopup.bind(this)}
                  />
                ) : null}
              </p>
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
    </div>
  );
};

export default () => <Chat />;
