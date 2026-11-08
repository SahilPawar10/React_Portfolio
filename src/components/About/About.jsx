import React from "react";
import "./about.css";
import photo from "../../assets/photo.jpg";
import Scene3D from "../../three/Scene3D";

const experience = [
  {
    role: "Backend Developer",
    company: "Edulab Educational Exchange Pvt. Ltd.",
    period: "June 2024 – Present",
    place: "Mumbai, Maharashtra",
    points: [
      "Develop and maintain production backend services for a large-scale Examination Management System, processing millions of academic records across UG and PG programs.",
      "Build REST APIs and complex business workflows with Node.js, TypeScript, Express.js, TypeORM, and MySQL.",
      "Work on tables with millions of rows: query optimization, indexing, migrations, transactions, bulk processing, and production data corrections.",
      "Implement long-running, fault-tolerant background processing with Temporal, using chunking, retries, resumable execution, and failure recovery.",
      "Use RabbitMQ for asynchronous processing and Redis for caching and reducing repeated database operations.",
      "Support CI/CD and production deployments with Jenkins, Docker, Linux, PM2, Nginx, Git/GitHub, and SonarQube.",
      "Build bulk Excel import/export, validation, PDF generation, marksheet, ledger, and reporting workflows.",
    ],
    tags: [
      "Admissions",
      "Exam forms",
      "Hall tickets",
      "Timetables",
      "Marks",
      "Results",
      "Reassessment",
      "Reporting",
    ],
  },
  {
    role: "Full Stack Developer, Intern to Full-Time",
    company: "Cloudstrats Technologies",
    period: "October 2022 – October 2023",
    place: "Mumbai, Maharashtra",
    points: [
      "Developed RESTful APIs and backend modules for an Attendance Management System using Node.js, Express.js, MySQL, and JWT Authentication.",
      "Implemented secure authentication and role-based authorization with JWT for Admin and Employee modules.",
      "Wrote comprehensive unit tests with Mocha and Chai, improving code reliability and reducing regression issues.",
    ],
  },
];

const education = [
  ["Bachelor of Computer Application (BCA)", "Shivaji University", "2018 – 2021"],
  ["Full Stack Development Program", "Crio.Do", "Dec 2023 – Jun 2024"],
  ["Diploma in Full Stack Web Development", "Infinity Graphix Technology", "June 2022"],
  ["Data Structures and Algorithms in JavaScript", "freeCodeCamp", "Aug 2023"],
];

function About() {
  return (
    <>
      <section id="about" className="section wrap about">
        <figure className="about-photo reveal">
          <img src={photo} alt="Sahil Pawar" loading="lazy" />
        </figure>
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 className="section-title">Reliable systems, built end to end.</h2>
          <p className="about-text">
            I'm a Full Stack Developer with 3 years of experience across
            Node.js, TypeScript, React.js, Next.js, Express.js, and MySQL. Most
            of my work is on the backend: REST APIs, relational databases,
            asynchronous workflows, caching, messaging, and distributed systems.
          </p>
          <p className="about-text">
            I also take my work to production, with hands-on experience in AWS
            EC2 deployment, Linux server configuration, SSH, Security Groups,
            Nginx, and PM2.
          </p>
          <ul className="about-facts">
            <li>
              <span>Based in</span> Navi Mumbai
            </li>
            <li>
              <span>Email</span>
              <a href="mailto:sahilpawar9764@gmail.com">sahilpawar9764@gmail.com</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+919764804327">+91 9764804327</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="pipeline" aria-label="How background jobs recover from failure">
        <Scene3D name="pipeline" className="pipeline-scene" />
        <p className="wrap pipeline-caption">
          Records queue in RabbitMQ and Temporal workers process them in chunks.
          A chunk that <b>fails</b> retries from where it stopped, so a long job
          never has to start over.
        </p>
      </section>

      <section id="experience" className="section wrap">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where I've shipped.</h2>
        {experience.map((job) => (
          <article className="job reveal" key={job.company}>
            <div className="job-meta">
              <p>{job.period}</p>
              <p>{job.place}</p>
            </div>
            <div>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {job.tags && (
                <ul className="job-tags" aria-label="Modules covered">
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}

        <h3 className="edu-title">Education and certifications</h3>
        <ul className="edu reveal">
          {education.map(([title, place, date]) => (
            <li key={title}>
              <b>{title}</b>
              <span>{place}</span>
              <time>{date}</time>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default About;
