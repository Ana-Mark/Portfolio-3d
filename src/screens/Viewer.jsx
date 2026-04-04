import "../styles/Viewer.css";
import { useEffect } from "react"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState, useRef } from "react";
import { Html } from "@react-three/drei";
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
    position: [1.9767916062671047, 0.0836272944922064, -3.205759092649313],
    target: [-0.014810842834093532, -0.6065836249224077, -0.02455890044389561]
  },
  {
    position: [-0.6119123122618138, 0.3832340895987131, -1.5967833911753857],
    target: [-0.056397185883691046, 0.1804774909928045, 0.06936692286265257]
  }
]

  





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

  const config = CAMERA_CONFIG[activeModel]
  if (!config) return

  const controls = controlsRef.current
  const camera = controls.object

  // mover cámara
  camera.position.set(...config.position)

  // mover target
  controls.target.set(...config.target)

  // 🔥 CLAVE: forzar sync en el siguiente frame
  requestAnimationFrame(() => {
    controls.target.set(0, 0, 0)
    controls.update()
  })

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [activeModel])






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








  return (
    
    
    <div className="app-container">

      {/* ================= CANVAS ================= */}
      {/*3D MODEL CONTAINER */}
      <div className="canvas-container">
        
       

       <Canvas
         camera={{ near: 0.01, far: 1000 }}
onCreated={({ camera }) => {
  const config = CAMERA_CONFIG[activeModel]
  if (!config) return

  camera.position.set(...config.position)

  requestAnimationFrame(() => {
    if (!controlsRef.current) return

    controlsRef.current.target.set(...config.target)
    controlsRef.current.update()
  })
}}
        >

          <ambientLight intensity={0.3} />
          <directionalLight position={[3, 5, -2]} intensity={2} />

          <Suspense fallback={
           <Html center>
             <div className="loader">Loading 3D...</div>
            </Html>
          }></Suspense>

          <Suspense fallback={null}>
            <Scene
              activeModel={activeModel}
              activeSection={activeSection}
              //animationOn={animationOn}
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
       onClose={() => setActiveSection("description")}
       setScreen={setScreen}
      />

      {/* ================= VIDEO ================= */}
      <VideoOverlay
       activeModel={activeModel}
       isVisible={activeSection === "video"}
       MODELS={MODELS}
       onClose={() => setActiveSection("assets")}
       
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

      


      {/* ================= BOTONES EXTRA ================= 
      <div className="ui-menu">

        <button onClick={() => setScreen("selector")}>
          Volver
        </button>

       
      </div>*/}

    </div>
  );
}