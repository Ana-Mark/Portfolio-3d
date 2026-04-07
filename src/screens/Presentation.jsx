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
                Hi, I'm Ana Marquina, a Spanish 3D artist. 
                I'm a curious and passionate person who loves experimenting with anything new I encounter.
                I hope that one day my work can make a meaningful impact on people, so I’m constantly learning and improving toward that goal.
                With this portfolio, I aim to showcase my 3D modeling, texturing, and rendering skills.
              </p>
            </div>
{/* 
            <div className="presentation-box box-center"></div>
*/}
            <div className="presentation-box box-right-1">
              <p className="estudios">
                3D Artist
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