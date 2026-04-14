
import ModelUI from "./ModelUI.jsx";
import UVGallery from "./UVGallery.jsx"

import ModelDescription from "./Descriptions.jsx"
import ModelSoftware from "./ModelSoftware.jsx"


// INTERFAZ VIEWER//
function UI({
  activeModel,
  activeSection,
  setActiveSection,

  language
}) {




  if (activeModel === null) return null;

   return (
     <div className="ui-models">

       <ModelDescription 
         activeModel={activeModel} 
         language={language}
        />

       <ModelSoftware activeModel={activeModel} />
      
       
       <ModelUI
         activeModel={activeModel}
         activeSection={activeSection}
         setActiveSection={setActiveSection}
       />









      </div>
    );
}


export default UI 












