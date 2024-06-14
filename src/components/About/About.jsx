import React from "react";
import "./about.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

function About() {
  return (
    <div id="about">
      <div className="about-title">
        <h2>About me</h2>
      </div>

      <div className="about">
        <div className="about-summary">
          <div class="about-text">
            <h3>Hello there! 👋 </h3>
            <p>
              <b>I'm Sahil Pawar,</b> I'm a Full Stack Developer with One year
              of experience. Specialized in building SaaS applications using
              Node.js and React, complemented by strong HTML, CSS, and Redux
              skills. Adept at testing with Jest, and familiar with SQL and
              MongoDB databases. Additionally, I'm open to exploring entry-level
              roles that will enable me to contribute my skills and grow as a
              professional in the tech industry. Let's connect and explore how
              we can collaborate to create innovative solutions together. Feel
              free to reach out for discussions, collaborations, or just a
              friendly chat about tech and coding! 😊
            </p>
          </div>
          <br />
          <br />
          <div className="contactbutton">
            <div className="text-buttons">
              {/* <a href="sahilpawar2023.pdf" class="t-btns" download>
                Contact me
              </a> */}
              <Link
                className="t-btns"
                to="contacts"
                smooth={true}
                duration={500}
                offset={-80}
              >
                Contact Me
              </Link>
            </div>
            <div className="social-links">
              <div className="github ">
                <a href="https://github.com/SahilPawar10">
                  <GitHubIcon className="icon-color" />
                </a>
              </div>
              <div className="linkdin">
                <a href="https://www.instagram.com/sahil_pawar26/">
                  <InstagramIcon className="icon-color" />
                </a>
              </div>
              <div className="instagram ">
                <a href="https://www.linkedin.com/in/sahil-pawar10/">
                  <LinkedInIcon className="icon-color" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-info">
          <div className="section1">
            <div className="info-item padd-15">
              <p>
                Name : <span>Pawar Sahil Shankar</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Age : <span>24</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Birthday : <span>26 May 2000</span>
              </p>
            </div>

            <div className="info-item padd-15 ">
              <p>
                Email : <span>sahilpawar9764@gmail.com</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Degree : <span>BCA</span>
              </p>
            </div>
          </div>

          <div className="section2">
            <div className="info-item padd-15">
              <p>
                Phone : <span>+91 9764804327</span>
              </p>
            </div>
            <div className="info-item padd-15 ">
              <p>
                website : <span>https://domain.com</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Freelance : <span>Available</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Current Location : <span>Navi Mumbai</span>
              </p>
            </div>
            <div className="info-item padd-15">
              <p>
                Base Location : <span>Patan,Satara</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="qualification">
        <div className="eduaction">
          <h4>
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Education
          </h4>
          <div className="timeline-box">
            {/* timeline */}
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> Jan 2021 - October 2022
                </div>
                <div className="timeline-title">
                  Bachelor of Computer Application, <br /> Shivaji University,
                  Kolhapur | 66.60 % |
                </div>
                <div className="timeline-desc">
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit atque recusandae exercitationem consectetur temporibus
                    quia eius aliquid quis dolore ipsum.
                  </p> */}
                </div>
              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2016 - Feb 2018
                </div>
                <div className="timeline-title">
                  Higher Secondary Certificate (HSC), <br /> Shivaji University,
                  Kolhapur | 58.60 % |
                </div>
                {/* <div className="timeline-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit atque recusandae exercitationem consectetur temporibus
                    quia eius aliquid quis dolore ipsum.
                  </p>
                </div> */}
              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2016
                </div>
                <div className="timeline-title">
                  Secondary School Certificate (SSC), <br /> Shivaji University,
                  Kolhapur | 76.20 % |
                </div>
                {/* <div className="timeline-desc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit atque recusandae exercitationem consectetur temporibus
                    quia eius aliquid quis dolore ipsum.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <h4>
            <i class="fa fa-briefcase" aria-hidden="true"></i> Experience
          </h4>
          <div className="timeline-box">
            {/* timeline */}
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> October 2022 - October 2023
                </div>
                <div className="timeline-title">
                  Jr.Full Stack Developer <br />
                  Cloudstrats Technlogies,Ghatkopar
                </div>
                <div className="timeline-desc">
                  <p>
                    Full Stack Developer at CloudStrats Technology ,
                    Developed responsive and user-friendly web applications
                    using <b>React and Node Js.</b> <br />
                    Utilizing my skills in
                    <b> HTML, CSS, JavaScript, Node Js and React JS,MongoDB </b>
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> December 2023 - June 2024
                </div>
                <div className="timeline-title">
                  KYC Analyst <br />
                  Eclerx , Aeroli .
                </div>
                <div className="timeline-desc">
                  <p>
                    KYC Apprentice Analyst  at Eclerx ,
                    Responsible for ensuring a financial institution’s compliance with anti-money laundering regulations.
                   <br/>
                    Conducting due diligence on customers to assess potential risk. <br/>
                    Reviewing and verifying customer identification and documentation
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div class="circle-dot"></div>
                <div className="timeline-date">
                  <i class="fa fa-calendar"></i> June 2024 - Current
                </div>
                <div className="timeline-title">
                  Full Stack Developer <br />
                  Edulab Exchange , Andheri .
                </div>
                <div className="timeline-desc">
                  <p>
                    {/*  */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certifications">
        <h4>
          <i class="fa fa-certificate" aria-hidden="true"></i>
          Certifications
        </h4>
        <div className="certification-box shadow-dark">
          <p>
            <b>1</b> <s>:</s>
            <span>
              Diploma In Full Stack Web Development , Infinity Graphix
              Technology, June 2022.
            </span>
          </p>
          <p>
            <b>2</b> <s>:</s>
            <span>
              Data Structure And Alogorithum In Javascript ,FreeCodeCamp, Aug
              2023.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
