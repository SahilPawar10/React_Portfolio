import React from "react";
import "./stack.css";
import Scene3D from "../../three/Scene3D";

// The first five items of each group also appear on the 3D sphere.
const groups = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Java"] },
  {
    name: "Frontend",
    items: ["React.js", "Next.js", "React Native", "HTML5", "CSS3", "Responsive UI Development"],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "TypeORM",
      "Joi",
      "Middleware",
      "Validation",
      "Error Handling",
      "API Integrations",
    ],
  },
  {
    name: "Databases",
    items: [
      "MySQL",
      "MongoDB",
      "Redis",
      "Indexing",
      "Transactions",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    name: "Distributed Systems",
    items: [
      "Temporal",
      "RabbitMQ",
      "Background Processing",
      "Failure Recovery",
      "Resumable Workflows",
    ],
  },
  {
    name: "Cloud Deployment",
    items: [
      "AWS EC2",
      "Nginx",
      "PM2",
      "SSH",
      "Security Groups",
      "Instance Provisioning",
      "PEM Keys",
      "Linux Server Deployment",
    ],
  },
  {
    name: "DevOps and Tools",
    items: [
      "Docker",
      "Jenkins",
      "CI/CD",
      "Cron",
      "SonarQube",
      "Git/GitHub",
      "Production Troubleshooting",
    ],
  },
];

const sphere = { groups, active: null };

function Stack() {
  return (
    <section id="skills" className="section wrap">
      <div className="skills">
        <div className="skills-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">The stack, front to production.</h2>
        </div>
        <ul className="skills-list">
          {groups.map((group, index) => (
            <li
              key={group.name}
              className="reveal"
              onPointerEnter={() => (sphere.active = index)}
              onPointerLeave={() => (sphere.active = null)}
            >
              <h3>{group.name}</h3>
              <p>{group.items.join(", ")}</p>
            </li>
          ))}
        </ul>
        <Scene3D name="skills" input={sphere} className="skills-scene" />
      </div>
    </section>
  );
}

export default Stack;
