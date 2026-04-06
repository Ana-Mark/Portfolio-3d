import "../styles/About.css";
import blenderIcon from "/icons/Blender_Icon.png";
import rizomIcon from "/icons/Rizom_Icon.png";
import substanceIcon from "/icons/3DPainter_Icon.png";
import substanceDIcon from "/icons/3DDesigner_Icon.png";
import photoshopIcon from "/icons/Photoshop_Icon.png";
import zbrushIcon from "/icons/ZBrush_Icon.png";
import platicityIcon from "/icons/Plasticity_Icon.png";
import unrealIcon from "/icons/Unreal_Icon.png";
import marmosetIcon from "/icons/Marmoset_Icon.png";

export default function About() {
  return (
    <div className="about-container">



      {/* ESTUDIOS */}
      <div className="about-box-Education">

        <div className="about-box-title">
        <h1>Education</h1>
        </div>
        <div className="about-box-inside">

          <div className="about-box-inside-1">
             <p>2020-2022</p>
             <p>Grado superior. Animaciones 3D, Juegos y Entornos Interactivos</p>
          </div>

          <div className="about-box-inside-2">
            <p>2023</p>
            <p>Certificate in Advanced English. C1 Level</p>
          </div>

          <div className="about-box-inside-3">
            <p>2024-2025</p>
           <p>3D Master AAA Art for Videogamest</p>
          </div>


        </div>
      </div>




   <div className="about-box-knowledge">
      {/* SKILLS */}
      <div className="about-box-skills">
        <div className="about-box-title">
        <h1>Skills</h1>
        </div>
        <div className="about-box-inside-skills">
        <p>3D Modeling</p>
        <p>Texturing (PBR)</p>
        <p>UV Mapping</p>
        <p>Rendering</p>
        <p>Teamwork</p>
        <p>Adaptability</p>
        <p>Creativity</p>
        <p>Atention to Details</p>
        </div>
      </div>

      {/* SOFTWARE */}
      <div className="about-box-software">
        <div className="about-box-software-Title">
        <h1>Softwares</h1>
       </div>
  <div className="software-icons">
    
    <img src={blenderIcon} alt="Blender" />
    <img src={rizomIcon} alt="RizomUV" />
    <img src={substanceIcon} alt="Substance Painter" />
    <img src={substanceDIcon} alt="Substance Designer" />
    <img src={photoshopIcon} alt="Photoshop" />
    
    
    <img src={zbrushIcon} alt="Z Brush" />
    <img src={platicityIcon} alt="Plasticity" />
    <img src={unrealIcon} alt="Unreal Engine" />
    <img src={marmosetIcon} alt="Marmoset Toolbag" />
    
    
  </div>
   </div>
</div>










      {/* SOCIAL */}
      <div className="about-box-Contact">
        <div className="about-box-title">
        <h1>Contact</h1>
        </div>
        <div className="about-box-link">
        <a href="https://a_mark.artstation.com">ArtStation</a>
        <a href="https://www.linkedin.com/in/anamarquina21/">LinkedIn</a>
        </div>
        <div className="about-box-mail">
          <p>a.marquinachanza@gmail.com</p>
        </div>
      </div>













      {/* 🔥 EXTRA IMPORTANTE */}
      <div className="about-box highlight">
        <div className="about-box-title">
        <h1>What I bring</h1>
        </div>
        <div className="about-box-me">
        <p>
In all working evironments I have been allways told how good my relationship with
my teamwork has been, and how that quality helps in stressful environment.
</p>
<p>
I'm a really curious and fast learned person, if theres a program I dont know biggest is my
enthusiasm to learn and tinker with it. 
        </p>
        <p>
As a hard working person, I've been able to finish my studies while I manteined my 40 h/week job for the las 3 years at a store.
So I can say I don't give up easily! 
        </p>

        </div>
      </div>

    </div>
  );
}