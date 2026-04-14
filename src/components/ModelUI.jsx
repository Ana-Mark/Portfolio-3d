
import ModelDescription from "./Descriptions.jsx"
import ModelSoftware from "./ModelSoftware.jsx"
import { MODELS } from "../data/modelsData"
import { FileText, TextAlignJustify, Palette, Image, LayersPlus, Clapperboard} from "lucide-react"



/*ICONOS ========================================*/
const icons = {
  description: <TextAlignJustify size={20} color="white" />,
  uv: <Palette size={20} color="white" />,
  assets: <LayersPlus size={20} color="white" />,
  video: <Clapperboard size={20} color="white" />,
  render: <Image size={20} color="white" />
}




function ModelUI({
  activeModel,
  activeSection,
  setActiveSection,
  
}) {

  if (activeModel === null) return null

   return (
       
       /* BOTONES DE SECCION */
       <div className="icon-tabs">
         {MODELS[activeModel].sections.map(section => (

           <button
             key={section}
             className={`tab-btn ${activeSection === section ? "active" : ""}`}
             onClick={() => setActiveSection(section)}
            >
            {icons[section]}
          </button>
          

          ))}
       </div>



     
     
    )
}

  export default ModelUI

