import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from "axios";
<link rel='stylesheet' 
media='screen and (min-width: 701px) and (max-width: 900px)' 
href='css/medium.css' />



const StaticPage = () => {
  const vidStyle = {
  
  };
  // looping through video data table goes here

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
    <div className= "body">
      <h1>Find Peace Yoga</h1>
        {videos.map(videos => {
          return (
            <div key={videos.id} className=" pure-g pure-u-1-3 .pure-u-lg- pure-u " id="parent">
                <div className="sub-title"><h5>{videos.title}</h5></div>
                    <div className= "videos" id= "rows"></div>
                          <ReactPlayer url={videos.url} light controls width="90%"style={vidStyle}/>
            </div>
          );
        })}
      </div>
  );
};

export default () => <StaticPage />;















































// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import axios from "axios";

// const StaticPage = () => {
//   const vidStyle = {
  
//   };
//   // looping through video data table goes here//

//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getvideos();
//   }, []);

//   const getvideos = () => {
//     axios
//       .get(`/video`)
//       .then(res => {
//         setVideos(res.data);
//       })
//       .catch(err => {
//         console.log(err.res);
//       });
//   };
//   return (
//     <div className= "body">
//       <h1>Find Peace Yoga</h1>
//       <div className= ".1-box" >
//         {videos.map(videos => {
//           return (
//             <div key={videos.id} className=" pure-g pure-u-1-4 .pure-u-lg- pure-u " id="parent">
//                 <div className="sub-title"><h5>{videos.title}</h5></div>
//                     <div className= "videos" id= "rows"></div>
//                           <ReactPlayer url={videos.url} light controls width="90%"style={vidStyle}/>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default () => <StaticPage />;