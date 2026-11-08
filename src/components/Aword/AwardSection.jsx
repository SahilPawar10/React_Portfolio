import "./AwardSection.css";
import photo from "../../assets/awardwithme.jpeg";
import trophy from "../../assets/trphy (2).jpeg";
import certification from "../../assets/certification.jpeg";
import Scene3D from "../../three/Scene3D";

export default function AwardSection() {
  return (
    <section id="awards" className="awards">
      <div className="section wrap award-grid">
        <div className="award-copy reveal">
          <p className="eyebrow">Recognition / 2025</p>
          <Scene3D name="award" className="award-scene" />
          <h2 className="section-title">The Rising Star Award</h2>
          <p>
            Presented at Edulab, in recognition of outstanding performance and
            consistent pursuit of excellence.
          </p>
        </div>
        <div className="award-photos reveal">
          <img
            className="award-main"
            src={photo}
            alt="Sahil receiving the Rising Star Award at Edulab"
            loading="lazy"
          />
          <img src={certification} alt="Rewards and Recognition certificate from Edulab" loading="lazy" />
          <img src={trophy} alt="Star-shaped trophy resting on the certificate" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
