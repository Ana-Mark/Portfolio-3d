import Models from "./Models"
import ModelHero from "./ModelHero"
import ModelTileable from "./ModelTileable"

 function Scene({ activeModel, animationOn, activeMaps, activeSection,uvMode }) {


  return (
    <>


{activeModel === 2 && activeSection === "uv" && uvMode === "unique" && (
  <ModelHero key="heroUV" activeMaps={activeMaps} />
)}

{activeModel === 2 && activeSection === "uv" && uvMode === "tileable" && (
  <ModelTileable key="tileable" />
)}

{activeModel !== 2 && (
  <Models
    activeModel={activeModel}
    animationOn={animationOn}
    activeMaps={activeMaps}
  />
)}
    </>
  )
}

export default Scene
