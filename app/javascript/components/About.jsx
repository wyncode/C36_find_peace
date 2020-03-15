import React from 'react';
import SheaHannah from '../../assets/images/SheaHannah.jpg';
import StRemySonia from '../../assets/images/StRemySonia.jpg';
import KeranoraKrisi from '../../assets/images/KeranoraKrisi.jpg';
import FavardTristan from '../../assets/images/FavardTristan.jpg';

const About = () => {
  return (
    <>
      <div class="teamImages">
        <div id="teamImage">
          <img src={SheaHannah} alt="TeamImage" id="about-image" />;
        </div>
        <div id="teamImage">
          <img src={StRemySonia} alt="TeamImage" id="about-image" />;
        </div>
        <div id="teamImage">
          <img src={KeranoraKrisi} alt="TeamImage" id="about-image" />;
        </div>
        <div id="teamImage">
          <img src={FavardTristan} alt="TeamImage" id="about-image" />;
        </div>
      </div>
    </>
  );
};

export default About;
