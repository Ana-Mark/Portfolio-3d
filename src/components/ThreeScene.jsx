import Models from "./Models"

 function Scene({ activeModel, animationOn, activeMaps, activeAsset, activeSection,uvMode }) {

  return (
    <>


      <Models
         activeModel={
          activeSection === "render" ||
          activeSection === "video" ||
          activeSection === "assets"
         
           ? null
           : activeModel
          }
        animationOn={animationOn}
        activeMaps={activeMaps}
        activeAsset={activeAsset}
        uvMode={uvMode}

        
      />
    </>
  )
}

export default Scene
