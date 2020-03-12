import React from "react";
import ReactPlayer from "react-player";

const vidStyle = {
  padding: "1%"
};

const Staticpage = () => {
  // looping through video data table goes here//
  return (
    <div>
      <div>
        <div className="pure-g">
          <ReactPlayer
            className="pure-u-1-3"
            url="https://www.youtube.com/watch?v=1xhwfIbBYnA"
            light
            controls
            width="20%"
            style={vidStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Staticpage;
