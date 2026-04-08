
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
  setActiveMaps,
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












        

        {activeSection === "assets" && (
          <div className="assets-canvas-parent">
         <div className="assets-canvas">
                <div className="Assets-title-parent">
  <div className="Assets-title">
    <p>{language === "es" ? "Texturas y Assets" : "Assets and Textures"}</p>
  </div>
  </div>

           {/* BOTONES */}
            <div className="assets-buttons">


<button
  className={activeAsset === "modular" ? "active" : ""}
  onClick={() => setActiveAsset("modular")}
>
  {language === "es" ? "Assets Modulares" : "Modular Assets"}
</button>




     
        <button
          className={activeAsset === "heroUV" ? "active" : ""}
          onClick={() => setActiveAsset("heroUV")}
        >
          Hero Asset
        </button>

        <button
          className={activeAsset === "tileable" ? "active" : ""}
          onClick={() => setActiveAsset("tileable")}
        >
          {language === "es" ? "Texturas Tileables" : "Tile Textures"}
        </button>
    

           </div>

           {/* CONTENIDO */}


            {activeAsset === "modular" && (
             <div className="assets-view">
               <img src="/Textures/Renders/ModularAssets_01.jpeg" />
               <img src="/Textures/Renders/ModularAssets_02.jpeg" />
             </div>
            )}

                 {activeAsset === "heroUV" && (
        <div className="assets-view">
          <img src="/Textures/Renders/4 - Texture Sets.png" />
          
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

      </div>
    );
  }


export default UI 












