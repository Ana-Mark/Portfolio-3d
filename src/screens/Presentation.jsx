import "../styles/Presentation.css";


export default function Presentation({ setScreen }) {
  return (
    <div className="presentation-overlay">

        {/* contenedor */}
        <div className="presentation-scene" 
        
           onClick={() => setScreen("selector")}
         >

          {/* contenedor padre - bloques de texto */}
          <div className="presentation-box">

            {/*bloques de texto */}

            <div className="presentation-box box-left-1">
              <p className="bio">
               Ana Marquina
              </p>
            </div>

            <div className="presentation-box box-left-2">
              <p className="contacto">
                Hi, I'm Ana Marquina a Spanish 3D artist. 
                I'm a curious and pasionate person who loves to try and experimenting with anything new I encounter.
                I dream for a day my work can help on leaving a great impact on people, so I'll continue learning and improving for that purpose.
                With this portfolio I'm aiming to show you my 3D modeling, texturing, and rendering skills.
              </p>
            </div>
{/* 
            <div className="presentation-box box-center"></div>
*/}
            <div className="presentation-box box-right-1">
              <p className="estudios">
                Superior en Animaciones 3D, Juegos y Entornos Interactivos
                (CEU-2020 . 2022 )
                Máster de Formación Permanente en Arte para Videojuegos 
                (Florida Universitaria- 2024 . 2025)
                Titulo oficial en Ingles avanzado C1 
                (Lenguas Vivas / Cambridge Exams Centre - 2023)
                Castellano : Native
                English : C1 Certificated
              </p>
            </div>

            <div className="presentation-box box-right-2">
              <p className="programas">
                Programas..
              </p>
            </div>

          </div>
        </div>



    </div>
  );
}