 
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

const StaticPage = () => {
  const vidStyle = {display:"block",
    marginLeft: "auto",
    marginRight: "auto"
  
  };
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
      <h1>Find Peace Yoga</h1>
      <div >
        {videos.map(videos => {
          return (
            <div className= "container" key={videos.id}>
                <div className="sub-title"><h5>{videos.title}</h5></div>
                    <div className= "videos"></div>
                          <ReactPlayer url={videos.url} light controls style={vidStyle}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default () => <StaticPage />;




