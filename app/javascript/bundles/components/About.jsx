import React from "react"
import "../../../assets/stylesheets/about.scss"
import SheaHannah from "../../../assets/images/SheaHannah.jpg"
import StRemySonia from "../../../assets/images/StRemySonia.jpg"
import KeranoraKrisi from "../../../assets/images/KeranoraKrisi.jpg"
import FavardTristan from "../../../assets/images/FavardTristan.jpg"
import github from "../../../assets/images/github-logo.jpeg"
import linkedin from "../../../assets/images/linkedin-logo.png"

const About = () => {
  return (
    <>
      <div className="flex-picture-names">
        <div className="profile-block">
          <p className="names">Hannah Shea</p>
          <img src={SheaHannah} alt="Hannah" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/hbshea" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-shea-aba22b31/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Sonia St. Remy</p>
          <img src={StRemySonia} alt="Sonia" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/stremysonia" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/sonia-st-remy/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Krisi Keranova</p>
          <img src={KeranoraKrisi} alt="Krisi" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/krisike" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/krisi-keranova-9bbba819/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
        <div className="profile-block">
          <p className="names">Tristan Favard</p>
          <img src={FavardTristan} alt="Tristan" className="about-image" />
          <div className="inner-flex">
            <a href="https://github.com/trsif" target="_blank">
              <img src={github} alt="github" className="github-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/tristan-favard-798453107/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="linkedin-logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default () => <About />
