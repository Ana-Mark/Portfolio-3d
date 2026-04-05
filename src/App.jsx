

import { useState } from "react";
import "./App.css";
import VideoOverlay from "./components/VideoOverlay"
import { MODELS } from "./data/modelsData"

import ModelSelector from "./screens/ModelSelector.jsx";
import Viewer from "./screens/Viewer.jsx";
import RenderOverlay from "./screens/RenderOverlay.jsx";
import Presentation from "./screens/Presentation.jsx";
import MainMenu from "./screens/MainMenu.jsx";
import About from "./screens/About.jsx";



function App() {
  const [screen, setScreen] = useState("presentation");
  const [selectedModel, setSelectedModel] = useState(0);


  return (
    <>
    <MainMenu setScreen={setScreen} /> {/* 🔥 SIEMPRE visible */}

      {screen === "selector" && (
       <ModelSelector setScreen={setScreen} setSelectedModel={setSelectedModel} />
      )}
      {screen === "viewer" && (
       <Viewer setScreen={setScreen} selectedModel={selectedModel} />
      )}
      {screen === "render" && <RenderOverlay setScreen={setScreen} 
      
      />}

      {screen === "presentation" && <Presentation setScreen={setScreen} />}

            {screen === "about" && (
        <About setScreen={setScreen} /> 
      )}


  


    </>
  );
}

export default App;








