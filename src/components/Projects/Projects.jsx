import React from "react";
import "./project.css";

import chat from "../../assets/chat application.png";
import landingPage from "../../assets/landingpage.png";
import vms from "../../assets/visitor-management-system3.jpg";
import swarajya from "../../assets/swarajya.png";
import digihost from "../../assets/digihost.png";
import mySociety from "../../assets/mysociety.png";

const featured = [
  {
    title: "My Society",
    image: mySociety,
    url: "https://my-socity.netlify.app/welcome",
    host: "my-socity.netlify.app",
    platforms: "Web + React Native mobile app",
    stack: ["Next.js", "React Native", "Node.js", "MongoDB", "MySQL", "Firebase"],
    text: "A full-stack Society Management System that streamlines residential society operations, in active development, with a web app and a React Native mobile app. Firebase Authentication provides secure login, with role-based access for Admins, Committee, Members, and Residents.",
  },
  {
    title: "Swarajya Foundation",
    image: swarajya,
    url: "https://swarajyafoundation.netlify.app/",
    host: "swarajyafoundation.netlify.app",
    platforms: "Web + React Native mobile app",
    stack: ["React.js", "React Native", "Node.js", "Express.js", "MongoDB"],
    text: "An NGO Fund Management Portal, with a React.js web app and a React Native mobile app, for managing organizational funds and member activities. Automated balance calculations reduced manual accounting effort.",
  },
];

const earlier = [
  {
    title: "Visitor Management System",
    date: "September 2023",
    image: vms,
    links: [["Code", "https://github.com/SahilPawar10/VMS/"]],
  },
  {
    title: "Digihost Landing Page",
    date: "December 2023",
    image: digihost,
    links: [["Live", "https://sahilpawar10.github.io/digiHost/"]],
  },
  {
    title: "Landing Page",
    date: "June 2023",
    image: landingPage,
    links: [
      ["Live", "https://landingpage-sp.netlify.app/"],
      ["Code", "https://github.com/SahilPawar10/Landingpage"],
    ],
  },
  {
    title: "Chat Application",
    date: "March 2023",
    image: chat,
    links: [["Code", "https://github.com/SahilPawar10/Chat_Application"]],
  },
];

function Projects() {
  return (
    <section id="projects" className="section wrap">
      <p className="eyebrow">Projects</p>
      <h2 className="section-title">Products outside the day job.</h2>

      {featured.map((project) => (
        <article className="feature reveal" key={project.title}>
          <a
            className="feature-frame"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
          >
            <div className="feature-bar">
              <i></i>
              <i></i>
              <i></i>
              <span>{project.host}</span>
            </div>
            <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
          </a>
          <div>
            <p className="eyebrow">{project.platforms}</p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <ul className="feature-stack" aria-label="Built with">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn ghost" href={project.url} target="_blank" rel="noreferrer">
              Visit site <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      ))}

      <h3 className="earlier-title">Earlier work</h3>
      <ul className="earlier">
        {earlier.map((project) => (
          <li key={project.title} className="reveal">
            <img src={project.image} alt="" loading="lazy" />
            <div>
              <h4>{project.title}</h4>
              <time>{project.date}</time>
            </div>
            <p>
              {project.links.map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
