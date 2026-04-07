
import ModelUI from "./ModelUI.jsx";
import UVGallery from "./UVGallery.jsx"

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
  setActiveMaps
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
         <div className="bottom-textures-parent">
  <div className="bottom-textures">
    <UVGallery
      activeMaps={activeMaps}
      setActiveMaps={setActiveMaps}
      activeModel={activeModel}
    />

  </div>
  </div>
  
)}

{activeSection === "uv" && activeModel === 2 && (
  <div className="assets-canvas-parent">
    <div className="assets-canvas">

      {/* BOTONES */}
      <div className="assets-buttons">
        <button
          className={activeAsset === "heroUV" ? "active" : ""}
          onClick={() => setActiveAsset("heroUV")}
        >
          Hero UV
        </button>

        <button
          className={activeAsset === "tileable" ? "active" : ""}
          onClick={() => setActiveAsset("tileable")}
        >
          Tileable
        </button>
      </div>

      {/* CONTENIDO */}
      {activeAsset === "heroUV" && (
        <div className="assets-view">
          <img src="/Textures/Renders/HeroUV_01.jpg" />
          <img src="/Textures/Renders/HeroUV_02.jpg" />
        </div>
      )}

      {activeAsset === "tileable" && (
        <div className="assets-view">
          <img src="/Textures/Renders/TileableTextures_01.jpg" />
        </div>
      )}

    </div>
  </div>
)}
        

        {activeSection === "assets" && (
          <div className="assets-canvas-parent">
         <div className="assets-canvas">

           {/* BOTONES */}
            <div className="assets-buttons">
<button
  className={activeAsset === "hero" ? "active" : ""}
  onClick={() => setActiveAsset("hero")}
>
  Hero Asset
</button>

<button
  className={activeAsset === "modular" ? "active" : ""}
  onClick={() => setActiveAsset("modular")}
>
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
          </div>
        )}

      </div>
    );
  }


export default UI 












