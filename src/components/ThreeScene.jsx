import Models from "./Models"


 function Scene({ activeModel, animationOn, activeMaps }) {


  return (
    <>




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
