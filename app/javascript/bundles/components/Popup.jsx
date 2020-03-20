import React from 'react';
import '../../../assets/stylesheets/popup.scss';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>{this.props.text}</h1>
           <iframe src="/yogamap?lng=-80.254170&lat=25.820250" />
          <button onClick={this.props.closePopup}>close</button>
        </div>
      </div>
    );
  }
}

export default () => <Popup />;
