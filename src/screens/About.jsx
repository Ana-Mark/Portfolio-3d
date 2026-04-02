import "../styles/About.css";

export default function About() {
  return (
    <div className="about-container">

      {/* SOCIAL */}
      <div className="about-box">
        <h2>Links</h2>
        <a href="#">ArtStation</a>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub (si tienes)</a>
      </div>

      {/* ESTUDIOS */}
      <div className="about-box">
        <h2>Education</h2>
        <p>3D Animation Degree</p>
        <p>Master in Game Art</p>
        <p>English C1</p>
      </div>

      {/* SKILLS */}
      <div className="about-box">
        <h2>Skills</h2>
        <p>Modeling</p>
        <p>Texturing (PBR)</p>
        <p>UV Mapping</p>
        <p>Rendering</p>
      </div>

      {/* SOFTWARE */}
      <div className="about-box">
        <h2>Software</h2>
        <p>Blender</p>
        <p>Substance Painter</p>
        <p>Unreal Engine</p>
        <p>Marmoset</p>
      </div>

      {/* 🔥 EXTRA IMPORTANTE */}
      <div className="about-box highlight">
        <h2>What I bring</h2>
        <p>
          Fast learner, adaptable to pipelines, strong attention to detail,
          and passion for improving visual quality.
        </p>
      </div>

    </div>
  );
}