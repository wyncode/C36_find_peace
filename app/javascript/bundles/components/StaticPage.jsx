import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

const vidStyle = {
  padding: "1%"
};

const Staticpage = () => {
  // looping through video data table goes here//

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = () => {
    axios
      .get(`/video`)
      .then(res => {
        setVideos(res.data);
      })
      .catch(err => {
        console.log(err.res);
      });
  };
  return (
    <div>
      <div>
        {videos.map(videos => {
          return (
            <div key={videos.id} className=" pure-g pure-u-1-3 ">
              {videos.title}
              <ReactPlayer
                url={videos.url}
                light
                controls
                width="20%"
                style={vidStyle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default () => <Staticpage />;
