import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import Map from '../Map';
import '../../../assets/stylesheets/modal.scss';

const INPUTS = [
  { value: 'women', label: 'Women' },
  { value: 'shelter', label: 'Shelter' },
  { value: 'lgbtq', label: 'LGBTQ' },
  { value: 'youth', label: 'Youth' }
];

const Help = () => {
  //state parameters of the component
  const [outputs, setOutputs] = useState([]);
  const [showModal, setModal] = useState(false);
  const [yogaMapName, setYogaMapName] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  //get data from api
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

  const handleLocationClick = ({ name, longitude, latitude }) => {
    {
      //show the modal
      setModal(true);

      //set the state parameters of the component
      setYogaMapName(name);
      setLongitude(longitude);
      setLatitude(latitude);
    }
  };

  const formatPhoneNumber = phoneNumberString => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  };

  return (
    <div className="container">
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
              <div className="output">
                <p>{output.name}</p>
                <p>{output.resource_description}</p>
                <p>
                  <a
                    className="address"
                    onClick={() => handleLocationClick(output)}
                  >
                    {' '}
                    {output.address}
                  </a>
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
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      {/* $("#myModal").draggable({
    handle: ".modal-header"
});  */}

      {/* Modal popup window */}
      <div className="modal-dialog">
        <Modal size="lg" show={showModal} onHide={() => setModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{yogaMapName}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Map lng={longitude} lat={latitude} />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default props => <Help {...props} />;
