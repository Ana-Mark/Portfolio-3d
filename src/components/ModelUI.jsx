
import ModelDescription from "./Descriptions.jsx"
import ModelSoftware from "./ModelSoftware.jsx"
import { MODELS } from "../data/modelsData"


function ModelUI({
  activeModel,
  activeSection,
  setActiveSection,
  
 }) {

   if (activeModel === null) return null

   return (
     <div className="right-ui">

       

       {/* BOTONES DE SECCION */}
       <div className="icon-tabs">
         {MODELS[activeModel].sections.map(section => (

           <button
             key={section}
             className={activeSection === section ? "active" : ""}
             onClick={() => setActiveSection(section)}
            >
            {section}
          </button>
          

          ))}
       </div>



     </div>
    )
  }

  export default ModelUI

