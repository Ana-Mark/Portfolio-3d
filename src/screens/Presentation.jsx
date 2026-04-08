import "../styles/Presentation.css";


export default function Presentation({ setScreen, language }) {
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
  {language === "es" 
    ? `Hola, soy Ana Marquina, artista 3D. 
Soy una persona curiosa y apasionada a la que le gusta experimentar con todo lo nuevo que encuentra.
Espero que algún día mi trabajo pueda tener un impacto significativo en las personas, por ello estoy en constante aprendizaje y mejora.

En este portfolio muestro mis habilidades en modelado 3D, texturizado y renderizado. 
¡Gracias por su atención!`
    
    : `Hi, I'm Ana Marquina, a Spanish 3D artist. 
I'm a curious and passionate person who enjoys experimenting with anything new I encounter.
I hope that one day my work can make a meaningful impact on people, so I’m constantly learning and improving toward that goal.

Through this portfolio, I aim to showcase my skills in 3D modeling, texturing, and rendering.
Thank you for your atention!`}
</p>
            </div>
{/* 
            <div className="presentation-box box-center"></div>
*/}
            <div className="presentation-box box-right-1">
             <p className="estudios">
  {language === "es" ? "Artista 3D" : "3D Artist"}
</p>
            </div>


          </div>
        </div>



    </div>
  );
}