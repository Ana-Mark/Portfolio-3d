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


export default function About({ language }) {
  
  return (
    <div className="about-container">


      



      {/* ESTUDIOS */}
      <div className="about-box-Personal">
      <div className="about-box-Education">

        <div className="about-box-title">
        <h1>{language === "es" ? "Educación" : "Education"}</h1>
        </div>
        <div className="about-box-inside">

          <div className="about-box-inside-1">
             <p>2020-2022 </p>
             <p>Grado superior. Animaciones 3D, Juegos y Entornos Interactivos</p>
             <p>(CEU Cardenal Herrera) </p>
          </div>

          <div className="about-box-inside-2">
            <p>2023</p>
            <p>{language === "es" ? "Certificado en Inglés Avanzado. Nivel C1" : "Certificate in Advanced English. C1 Level"}</p>
            <p>(Number 16 School)</p>
          </div>

          <div className="about-box-inside-3">
            <p>2024-2025</p>
           <p>3D Master AAA Art for Videogames</p>
           <p>(Florida Universitaria)</p>
          </div>


        </div>
      </div>
            {/* SOCIAL */}
      <div className="about-box-Contact">
        <div className="about-box-title">
        <h1>{language === "es" ? "Contacto" : "Contact"}</h1>
        </div>
        <div className="about-box-Contact-inf">
        <div className="about-box-link">
        <a href="https://a_mark.artstation.com">ArtStation</a>
        <a href="https://www.linkedin.com/in/anamarquina21/">LinkedIn</a>
        </div>
        <div className="about-box-mail">
          <p>a.marquinachanza@gmail.com</p>
        </div>
        </div>
      </div>
      </div>




   <div className="about-box-knowledge">
      {/* SKILLS */}
      <div className="about-box-skills">
        <div className="about-box-title">
        <h1>{language === "es" ? "Habilidades" : "Skills"}</h1>
        </div>
        <div className="about-box-inside-skills">
        <p>{language === "es" ? "Modelado 3D" : "3D Modeling"}</p>
        <p>{language === "es" ? "Texturizado" : "Texturing"}</p>
        <p>{language === "es" ? "Mapeado UV" : "UV Mapping"}</p>
        <p>{language === "es" ? "Renderizado" : "Rendering"}</p>
        <p>{language === "es" ? "Trabajo en equipo" : "Teamwork"}</p>
        <p>{language === "es" ? "Adaptabilidad" : "Adaptability"}</p>
        <p>{language === "es" ? "Creatividad" : "Creativity"}</p>
        <p>{language === "es" ? "Atención al Detalle" : "Attention to Detail"}</p>
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
























      {/* 🔥 EXTRA IMPORTANTE */}
      <div className="about-box highlight">
        <div className="about-box-title">
        <h1>{language === "es" ? "Qué ofrezco" : "What I Bring"}</h1>
        </div>
        <div className="about-box-me">
        <p>{language === "es" ? "En todo lugar de trabajo, siempre he sido reconocida por tener muy buenas habilidades de equipo y mantener una buena relación con mis compañeros, especialmente en situaciones estresantes." : 
        "In every work environment, I have always been recognized for my strong teamwork skills and my ability to maintain good relationships with colleagues, especially in stressful situations."}
</p>
<p>
  {language === "es" ? "Soy una persona muy curiosa y rápida a la hora de aprender. Si hay un programa que no conozco, mi entusiasmo por aprender y experimentar es aún mayor." : 
  "I am a very curious and fast learner. If there is a program I don't know, my enthusiasm to learn and experiment with it is even greater."
  }

        </p>
        <p>
          {language === "es" ? "Como persona trabajadora, he conseguido completar mis estudios mientras mantenía una jornada laboral completa durante los últimos 3 años. Asi que puedo decir con confianza que no me rindo fácilmente." : 
          "As a hardworking person, I have successfully completed my studies while maintaining a 40-hour work week for the past three years. So I can confidently say that I don't give up easily. "
          }

        </p>

        </div>
      </div>

    </div>
  );
}