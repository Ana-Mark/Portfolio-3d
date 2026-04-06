import "../styles/Viewer.css";
import { useEffect } from "react"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import { Html } from "@react-three/drei"
import Scene from "../components/ThreeScene.jsx";
import UI from "../components/UI.jsx";
import RenderOverlay from "../screens/RenderOverlay.jsx";
import VideoOverlay from "../components/VideoOverlay.jsx";
import { MODELS } from "../data/modelsData";

export default function Viewer({ setScreen, selectedModel }) {

    // 🔥 ESTADO PRINCIPAL
  //const [activeModel, setActiveModel] = useState(selectedModel);
  const [activeModel] = useState(selectedModel);
  
  const [activeSection, setActiveSection] = useState(
   selectedModel === 2 ? "video" : "description"
  );
  const [activeAsset, setActiveAsset] = useState(null);

  const [uvMode, setUvMode] = useState("unique");
  //const [animationOn, setAnimationOn] = useState(true);
  const [activeMaps, setActiveMaps] = useState({});

  const controlsRef = useRef();

  const isHeroVisible =
  activeModel === 2 &&
  activeSection === "uv" &&
  uvMode === "unique"



  

const [isLoading, setIsLoading] = useState(true)


const CAMERA_CONFIG = [
  {
    position: [0.21277105461555995, 0.05505210998858599, -0.5340924309310153],
    target: [0.07728372112301284, -0.021451073091122586, 0.16478306360324096]
  },
  {
    position: [0.012934363928922187, 0.007499564186675162, -0.0793050484994271],
    target: [-0.025580645995242735, -0.009182090552055877, 0.05288632877192715]
  },
  {
      position: [2.011652546627659, 1.4195262677694802, -2.4504182936288017],
      target: [0.1957639993035172, 0.9710210725883038, 0.20682626799816578]
  },
  {
    position: [-0.6119123122618138, 0.3832340895987131, -1.5967833911753857],
    target: [-0.056397185883691046, 0.1804774909928045, 0.06936692286265257]
  }
]
const MODULAR_CAMERA = {
  heroUV: {
      position: [2.011652546627659, 1.4195262677694802, -2.4504182936288017],
      target: [0.1957639993035172, 0.9710210725883038, 0.20682626799816578]
  },
    tileable: {
      position: [2.011652546627659, 1.4195262677694802, -2.4504182936288017],
      target: [0.1957639993035172, 0.9710210725883038, 0.20682626799816578]
  },
  assets: {
      position: [2.011652546627659, 1.4195262677694802, -2.4504182936288017],
      target: [0.1957639993035172, 0.9710210725883038, 0.20682626799816578]
  }
}

  





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
  if (!controlsRef.current) return

  const controls = controlsRef.current
  const camera = controls.object

  let config = null

  // 🔵 modelos normales
  if (activeModel !== 2) {
    config = CAMERA_CONFIG[activeModel]
  }

  // 🟢 SOLO hero UV necesita cámara
  if (isHeroVisible) {
    config = {
      position: [2.011652546627659, 1.4195262677694802, -2.4504182936288017],
      target: [0.1957639993035172, 0.9710210725883038, 0.20682626799816578]
    }
  }

  if (!config) return

  camera.position.set(...config.position)
  controls.target.set(...config.target)

  controls.update()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [activeModel, isHeroVisible])

useEffect(() => {
  if (!isHeroVisible) return

  // pequeño delay para esperar a que el modelo exista
  setTimeout(() => {
    if (!controlsRef.current) return

    const controls = controlsRef.current
    const camera = controls.object

    camera.position.set(2.011652546627659, 1.4195262677694802, -2.4504182936288017)
    controls.target.set(0.1957639993035172, 0.9710210725883038, 0.20682626799816578)

    controls.update()
  }, 50)

}, [isHeroVisible])


useEffect(() => {
  triggerLoading()
}, [activeModel])




useEffect(() => {
  if (activeModel !== 2) return

  if (activeSection === "uv") {
    setActiveAsset("heroUV")
    setUvMode("unique")

    // 🔥 fuerza refresco del modelo
    setActiveMaps(prev => ({ ...prev }))

    triggerLoading()
  }
}, [activeSection, activeModel])

useEffect(() => {
  if (activeModel !== 2) return

  if (activeSection === "assets") {
    setActiveAsset("hero") // 🔥 fuerza Hero Asset
  }

}, [activeSection, activeModel])




useEffect(() => {
  const handleKey = (e) => {
    if (e.key !== "c") return

    const controls = controlsRef.current
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
}, [])







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
         camera={{ near: 0.01, far: 1000 }}
onCreated={({ camera }) => {
  const config = CAMERA_CONFIG[activeModel]
  if (!config) return

  camera.position.set(...config.position)
}}
        >

          <ambientLight intensity={0.3} />
          <directionalLight position={[3, 5, -2]} intensity={2} />












<Suspense fallback={null}>
  <Scene
    activeModel={activeModel}
    activeSection={activeSection}
    activeMaps={activeMaps}
    activeAsset={activeAsset}
    uvMode={uvMode}
  />
</Suspense>










          <OrbitControls
  ref={controlsRef}
  makeDefault
  enablePan={true}
  minDistance={0.1}
  maxDistance={5}
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
       setUvMode={setUvMode}
      />

      




    </div>
  );
}