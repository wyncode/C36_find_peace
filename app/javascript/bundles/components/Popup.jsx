import React, { useState } from 'react';
import '../../../assets/stylesheets/popup.scss';

const Popup = ({ closePopup, lat, long, text }) => {
  const mapUrl = `/yogamap?lng=${long}&lat=${lat}`;
  return (
    <div className="popup">
      <div className="popup\_inner">
        <p>{text}</p>

        <p> Map Url: {mapUrl} </p>
        <iframe src={mapUrl} />
        <button
          onClick={() => {
            closePopup();
          }}
        >
          close
        </button>
      </div>
    </div>
  );
};
export default props => <Popup {...props} />;
