import "./AwardSection.css";
import photo from "../../assets/awardwithme.jpeg";
import trophy from "../../assets/trphy (2).jpeg";
import certification from "../../assets/certification.jpeg";

export default function AwardSection() {
  return (
    <div id="awards">
      <div className="about-title">
        <h2>Rewards & Recognition</h2>
      </div>
      <div className="award-outer-container">
        {/* Hero Section */}
        <div className="award-hero">
          <div className="award-left">
            <h1>My Achievement Award</h1>
            <h2 className="award-year">2025</h2>
            <p className="award-text">
              A proud moment of receiving recognition for my accomplishments and
              dedication. This award represents my continuous effort to grow,
              learn and contribute.
            </p>
            <div className="award-tag">THE RISING STAR AWORD</div>
          </div>

          <div className="award-right">
            <img src={photo} alt="Award" />
          </div>
        </div>

        {/* Gallery Section */}
        <h3 className="gallery-title">Award Pictures</h3>

        <div className="award-gallery">
          <img src={photo} alt="Award Pic 1" />
          <img src={certification} alt="Award Pic 2" />
          <img src={trophy} alt="Award Pic 3" />
        </div>
      </div>
    </div>
  );
}
