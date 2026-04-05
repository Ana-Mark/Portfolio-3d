
import ModelUI from "./ModelUI.jsx";
import UVGallery from "./UVGallery.jsx"
import MaterialGallery from "./MaterialGallery.jsx"
import ModelDescription from "./Descriptions.jsx"
import ModelSoftware from "./ModelSoftware.jsx"


// INTERFAZ VIEWER//
function UI({
  activeModel,
  activeSection,
  setActiveSection,
  activeAsset,
  setActiveAsset,
  activeMaps,
  setActiveMaps,
  setUvMode
 }) {




   if (activeModel === null) return null;

   return (
     <div className="ui-models">

      <ModelDescription activeModel={activeModel} />
      <ModelSoftware activeModel={activeModel} />
      
       
       <ModelUI
         activeModel={activeModel}
         activeSection={activeSection}
         setActiveSection={setActiveSection}
       />

       {activeSection === "uv" && activeModel !== 2 && (
  <div className="bottom-textures">
    <UVGallery
      activeMaps={activeMaps}
      setActiveMaps={setActiveMaps}
      activeModel={activeModel}
    />

  </div>
  
)}

{activeSection === "uv" && activeModel === 2 && (
  <div className="bottom-textures modular-ui">
    
    <div className="uv-modes">
      <button onClick={() => {
        setActiveAsset("heroUV")
        setUvMode("unique")
      }}>
        Hero UV
      </button>

      <button onClick={() => {
        setActiveAsset("tileable")
        setUvMode("tileable")
      }}>
        Tileable
      </button>
    </div>

    {activeAsset === "heroUV" && (
      <MaterialGallery
        activeMaps={activeMaps}
        setActiveMaps={setActiveMaps}
      />
    )}
 <div className="assets-canvas">
    {activeAsset === "tileable" && (
      <div className="assets-view">
        <img src="/Textures/Renders/TileableTextures_01.jpg" />

      </div>
    
    )}
  </div>
  </div>
)}
        

        {activeSection === "assets" && (
         <div className="assets-canvas">

           {/* BOTONES */}
            <div className="assets-buttons">
             <button onClick={() => setActiveAsset("hero")}>
                Hero Asset
              </button>

             <button onClick={() => setActiveAsset("modular")}>
               Modular Assets
             </button>
           </div>

           {/* CONTENIDO */}
           {activeAsset === "hero" && (
             <div className="assets-view">
               <img src="/Textures/Renders/VM_Picture_01.jpg" />

             </div>
            )}

            {activeAsset === "modular" && (
             <div className="assets-view">
               <img src="/Textures/Renders/ModularAssets_01.jpeg" />
               <img src="/Textures/Renders/ModularAssets_02.jpeg" />
             </div>
            )}

          </div>
        )}

      </div>
    );
  }


export default UI 












