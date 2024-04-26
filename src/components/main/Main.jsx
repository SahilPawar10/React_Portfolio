import React from "react";
import "./main.css";
import Navbar from "../navbar/Navbar";
import photo from "../../assets/photo.jpg";
import resume from "../../assets/sahilpawar2023 (3).pdf";
import About from "../About/About";
import Contact from "../contact/Contact";
import Stack from "../techStack/Stack";
import Projects from "../Projects/Projects";
import GitHubCalendar from "react-github-calendar";

function Main() {
  return (
    <>
      <Navbar />
      <div id="main">
        <div className="banner">
          <div className="text-with-image">
            <div className="mobile-image">
              <img src={photo} alt="profile_photo" />
            </div>
            <div className="text">
              <h1 className="web-header">
                Hi👋, <br />I am <span class="name">Sahil Pawar</span> <br />
                <span className="animate-charcter">a Full-Stack Developer</span>
              </h1>

              <h1 className="mobh1">
                I am <span className="animate-charcter"> Sahil Pawar</span>
              </h1>
              <p className="webtext">
                Welcome to my personal portfolio, I am Sahil Pawar a skilled
                Full
                <br />
                Stack Developer with passion for a creating robust ,scalable,and
                <br />
                responsive user-freindly web applications.I have worked on
                variety
                <br />
                of web projects ranging from personal projects to various saas
                based projects
              </p>
              <p className="mobile-text">
                -This is my Official Portfolio website to shows all Details and
                Works.
              </p>
              <br />

              <div className="text-buttons">
                <a href={resume} class="t-btns" download>
                  Download RESUME
                </a>
              </div>
            </div>
            <div className="mobile-text"></div>
            <div className="image">
              <img src={photo} alt="profile_photo" />
            </div>
          </div>
          <div className="techstaks">
            <Stack />
          </div>
        </div>
      </div>
      <div className="main-about">
        <About />
      </div>

      <Projects />
      <Contact />
      <div id="github">
        <div>
          <GitHubCalendar username="SahilPawar10" />
        </div>
      </div>
    </>
  );
}

export default Main;
