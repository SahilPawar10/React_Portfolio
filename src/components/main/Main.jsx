import React, { useEffect, useMemo, useState } from "react";
import "./main.css";
import Navbar from "../navbar/Navbar";
import resume from "../../assets/sahilpawar_fullstack-2026.pdf";
import About from "../About/About";
import Contact from "../contact/Contact";
import Stack from "../techStack/Stack";
import Projects from "../Projects/Projects";
import AwardSection from "../Aword/AwardSection";
import Scene3D from "../../three/Scene3D";
import { reportVisit } from "../mail/mail";

function Main() {
  const [ready, setReady] = useState(false);
  const [riding, setRiding] = useState(false);

  useEffect(() => {
    reportVisit();
  }, []);

  const bike = useMemo(
    () => ({
      held: { ArrowLeft: 0, ArrowRight: 0 },
      riding: false,
      onReady: () => setReady(true),
    }),
    []
  );

  const ride = (on) => {
    bike.riding = on;
    bike.held.ArrowLeft = 0;
    bike.held.ArrowRight = 0;
    setRiding(on);
    if (on) window.scrollTo(0, 0);
  };

  const steer = (key) => ({
    onPointerDown: () => (bike.held[key] = 1),
    onPointerUp: () => (bike.held[key] = 0),
    onPointerCancel: () => (bike.held[key] = 0),
    onContextMenu: (e) => e.preventDefault(),
  });

  return (
    <>
      <Navbar />
      <header id="main" className={riding ? "hero riding" : "hero"}>
        <Scene3D name="hero" input={bike} className="hero-scene" />
        <p className="hero-hint">
          <kbd>←</kbd> <kbd>→</kbd> steer the bike
        </p>
        {riding && (
          <div className="ride">
            <button className="btn ghost ride-done" onClick={() => ride(false)}>
              Done
            </button>
            <button className="ride-steer left" aria-label="Steer left" {...steer("ArrowLeft")}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button className="ride-steer right" aria-label="Steer right" {...steer("ArrowRight")}>
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        )}
        <div className="wrap hero-inner">
          <p className="eyebrow">Full Stack Developer / Mumbai</p>
          <h1>
            Sahil
            <br />
            Pawar
          </h1>
          <p className="hero-lede">
            I build backend systems that move millions of academic records, and
            pick up where they left off when something fails.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn">
              See my work
            </a>
            <a href={resume} className="btn ghost" download>
              <i className="fa fa-arrow-down" aria-hidden="true"></i> Resume
            </a>
            {ready && (
              <button className="btn ghost hero-ride" onClick={() => ride(true)}>
                <i className="fa fa-motorcycle" aria-hidden="true"></i> Ride the bike
              </button>
            )}
          </div>
          <dl className="hero-stats">
            <div>
              <dt>3 years</dt>
              <dd>building and supporting web applications</dd>
            </div>
            <div>
              <dt>Millions</dt>
              <dd>of records across UG and PG programs</dd>
            </div>
            <div>
              <dt>Temporal</dt>
              <dd>fault-tolerant, resumable background work</dd>
            </div>
          </dl>
        </div>
      </header>
      <main>
        <About />
        <Stack />
        <Projects />
        <AwardSection />
        <Contact />
      </main>
    </>
  );
}

export default Main;
