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
  const [activeModel ] = useState(selectedModel);
  
  const [activeSection, setActiveSection] = useState(
   selectedModel === 2 ? "video" : "description"
  );
  const [activeAsset, setActiveAsset] = useState(null);

  const [uvMode, setUvMode] = useState("unique");
  //const [animationOn, setAnimationOn] = useState(true);
  const [activeMaps, setActiveMaps] = useState({});

  const controlsRef = useRef();

  



  





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








  return (
    
    
    <div className="app-container">

      {/* ================= CANVAS ================= */}
      {/*3D MODEL CONTAINER */}
      <div className="canvas-container">
        
       

       <Canvas camera={{ position: [1, 0.5, 1], near: 0.01, far: 1000 }}>

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

          <OrbitControls ref={controlsRef} />

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

      


      {/* ================= BOTONES EXTRA ================= */}
      <div className="ui-menu">

        <button onClick={() => setScreen("selector")}>
          Volver
        </button>

       
      </div>

    </div>
  );
}