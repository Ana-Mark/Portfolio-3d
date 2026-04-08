

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
  const [language, setLanguage] = useState("es") // "es" o "en"


  return (
    <>
    <MainMenu 
  setScreen={setScreen} 
  screen={screen} 
  language={language}
  setLanguage={setLanguage}
/>

      {screen === "selector" && (
       <ModelSelector setScreen={setScreen} setSelectedModel={setSelectedModel} />
      )}
      {screen === "viewer" && (
  <Viewer 
    setScreen={setScreen} 
    selectedModel={selectedModel}
    language={language}
  />
)}
      {screen === "render" && <RenderOverlay setScreen={setScreen} 
      
      />}

      {screen === "presentation" && (
  <Presentation setScreen={setScreen} language={language} />
)}

      {screen === "about" && (
  <About language={language} />
)}



  


    </>
  );
}

export default App;








