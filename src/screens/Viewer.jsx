import "../styles/Viewer.css";
import { useEffect } from "react"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Html } from "@react-three/drei"
import Scene from "../components/ThreeScene.jsx";
import UI from "../components/UI.jsx";
import RenderOverlay from "../screens/RenderOverlay.jsx";
import VideoOverlay from "../components/VideoOverlay.jsx";
import { MODELS } from "../data/modelsData";

export default function Viewer({ setScreen, selectedModel, language}) {

    // 🔥 ESTADO PRINCIPAL
  //const [activeModel, setActiveModel] = useState(selectedModel);
  const [activeModel] = useState(selectedModel);
  
  const [activeSection, setActiveSection] = useState(
   selectedModel === 2 ? "video" : "description"
  );
  const [activeAsset, setActiveAsset] = useState(null);


  const [activeMaps, setActiveMaps] = useState({});

  const [controls, setControls] = useState(null);

 




  

const [isLoading, setIsLoading] = useState(true)

  





  //TEXTURAS ACTIVAS AL ENTRAR //
useEffect(() => {
  if (activeModel === null) return

  const textureSets = [
    ["barrelBC","barrelN","barrelAORM","bodyBC","bodyN","bodyAORM","buttBC","buttN","buttAORM"],
    ["zippoBC","zippoN","zippoAORM"],
    [
      "VMmbBC","VMmbN","VMmbAORM",
      "VMmyBC","VMmyN","VMmyAORM",
      "VMmtaBC","VMmtaN","VMmtaAORM",
      "VMmtbBC","VMmtbN","VMmtbAORM"
    ]
  ]

  const maps = {}

  textureSets[activeModel]?.forEach(map => {
    maps[map] = true
  })

  setActiveMaps(maps) // 🔥 FALTABA ESTO

}, [activeModel])






useEffect(() => {
  if (!controls) return

  const camera = controls.object
  const currentModel = MODELS[activeModel]

  let config = currentModel.camera?.default

  if (activeModel === 2 && activeSection === "uv" ) {
    config = currentModel.camera?.heroUV
  }

  if (activeModel === 2 && activeSection === "assets") {
    config = currentModel.camera?.assets
  }

  if (!config) return

  controls.reset()

  camera.position.set(...config.position)
  controls.target.set(...config.target)

  controls.update()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [controls, activeModel, activeSection, ])







useEffect(() => {
  if (activeModel !== 2) return

  if (activeSection === "assets") {
    setActiveAsset("modular")
  }
}, [activeSection, activeModel])

useEffect(() => {
  triggerLoading()
}, [activeModel])








useEffect(() => {
  const handleKey = (e) => {
    if (e.key !== "c") return
    if (!controls) return

    const camera = controls.object

    const data = {
      position: camera.position.toArray(),
      target: controls.target.toArray()
    }

    console.log("📸 CAMERA SNAPSHOT:", data)
  }

  window.addEventListener("keydown", handleKey)
  return () => window.removeEventListener("keydown", handleKey)
}, [controls])







const triggerLoading = () => {
  setIsLoading(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 700)
}





  return (
    
    
    <div className="app-container">

      {/* ================= CANVAS ================= */}
      {/*3D MODEL CONTAINER */}
      <div className="canvas-container">
        
{isLoading && (
  <div className="global-loader">
    <div className="spinner"></div>
    Loading...
  </div>
)}















       <Canvas
         key={activeModel + activeSection }
         camera={{ near: 0.01, far: 1000 }}
        >


{MODELS[activeModel].lights?.map((light, i) => {
  if (light.type === "ambient") {
    return (
      <ambientLight
        key={i}
        intensity={light.intensity}
        color={light.color || "#ffffff"}
      />
    )
  }

  if (light.type === "directional") {
    return (
      <directionalLight
        key={i}
        position={light.position}
        intensity={light.intensity}
        color={light.color || "#ffffff"}
      />
    )
  }

  if (light.type === "point") {
    return (
      <pointLight
        key={i}
        position={light.position}
        intensity={light.intensity}
        color={light.color || "#ffffff"}
      />
    )
  }

  return null
})}






<Suspense fallback={null}>
  <Scene
    activeModel={activeModel}
    activeSection={activeSection}
    activeMaps={activeMaps}
    activeAsset={activeAsset}
    
  />
</Suspense>










          <OrbitControls
  ref={setControls}
  makeDefault
  enablePan={true}
  minDistance={0.1}
  maxDistance={5}
   enableDamping={false}
/>

        </Canvas>

      </div>

      


      {/* ================= RENDERS ================= */}
      <RenderOverlay
       activeModel={activeModel}
       isVisible={activeSection === "render"}
       onClose={() =>
         setActiveSection(activeModel === 2 ? "assets" : "description")
        }
       setScreen={setScreen}
      />

      {/* ================= VIDEO ================= */}
      <VideoOverlay
       activeModel={activeModel}
       isVisible={activeSection === "video"}
       MODELS={MODELS}
       onClose={() => setActiveSection("assets") || setActiveAsset("hero")}
       
      />


      {/* ================= UI ================= */}
      <UI
       activeModel={activeModel}
       //setActiveModel={setActiveModel}
       activeSection={activeSection}
       setActiveSection={setActiveSection}
       activeAsset={activeAsset}
       setActiveAsset={setActiveAsset}
       activeMaps={activeMaps}
       setActiveMaps={setActiveMaps}
       setScreen={setScreen}
       language={language}
       
      />

      




    </div>
  );
}