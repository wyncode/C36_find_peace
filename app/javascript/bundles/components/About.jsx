import React from "react";
import SheaHannah from "../../../assets/images/SheaHannah.jpg";
import StRemySonia from "../../../assets/images/StRemySonia.jpg";
import KeranoraKrisi from "../../../assets/images/KeranoraKrisi.jpg";
import FavardTristan from "../../../assets/images/FavardTristan.jpg";

const About = () => {
  return (
    <>
<<<<<<< HEAD:app/javascript/components/About.jsx
      <div class="teamImages">
        <div class="teamBox">
          <div id="teamImage">
            <img src={SheaHannah} alt="TeamImage" id="about-image" />
          </div>
          <div id="gitHub">
            <a href="https://github.com/krisike" id="gitHub">
              GitHub
            </a>
          </div>
          <div id="team-content">
            'My favourite yoga pose is Savasana. It might look like a nap, but
            it's actually a fully conscious pose aimed at being awake, yet
            completely relaxed.'
          </div>
=======
      <div className="teamImages">
        <div id="teamImage">
          <img src={SheaHannah} alt="TeamImage" id="about-image" />;
>>>>>>> master:app/javascript/bundles/components/About.jsx
        </div>
        <div class="teamBox">
          <div id="teamImage">
            <img src={StRemySonia} alt="TeamImage" id="about-image" />
          </div>
          <div id="gitHub">
            <a href="https://github.com/krisike" id="gitHub">
              GitHub
            </a>
          </div>
          <div id="team-content">
            'My favourite yoga pose is Savasana. It might look like a nap, but
            it's actually a fully conscious pose aimed at being awake, yet
            completely relaxed.'
          </div>
        </div>
        <div class="teamBox">
          <div id="teamImage">
            <img src={KeranoraKrisi} alt="TeamImage" id="about-image" />
          </div>
          <div id="gitHub">
            <a href="https://github.com/krisike" id="gitHub">
              GitHub
            </a>
          </div>
          <div id="team-content">
            'My favourite yoga pose is Savasana. It might look like a nap, but
            it's actually a fully conscious pose aimed at being awake, yet
            completely relaxed.'
          </div>
        </div>
        <div class="teamBox">
          <div id="teamImage">
            <img src={FavardTristan} alt="TeamImage" id="about-image" />
          </div>
          <div id="gitHub">
            <a href="https://github.com/krisike" id="gitHub">
              GitHub
            </a>
          </div>
          <div id="team-content">
            'My favourite yoga pose is Savasana. It might look like a nap, but
            it's actually a fully conscious pose aimed at being awake, yet
            completely relaxed.'
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export default () => <About />;
