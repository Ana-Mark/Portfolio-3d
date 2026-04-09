

import { MODELS } from "../data/modelsData"

// Este componente muestra el título y descripción del modelo activo

function ModelDescription({ activeModel, language }) {

  const model = MODELS[activeModel]
  if (!model) return null


  return (
    <>
    <div class="text-block">

      <div className="model-title">
                <h1>
            {typeof model.name === "object" 
              ? model.name[language] 
              : model.name}
          </h1>
      </div>

      <div className="model-description">
      <p>{model.description[language]}</p>
      </div>
      
    </div>


    <div class="link-block">

     <div className="software-title">
       <p>
        {language === "es" ? "Programas usados:" : "Programs used:"}
       </p>
     </div>

     <div className="links">
       {model.links?.map((link) => (
         <a key={link.url} href={link.url} target="_blank">
           {link.label}
          </a>
        ))}
      </div>
    </div>
   </>
  )
}

export default ModelDescription