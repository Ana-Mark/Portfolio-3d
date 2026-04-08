import "../styles/MainMenu.css";
import { Globe } from "lucide-react";


export default function MainMenu({ setScreen, screen, language, setLanguage }) {

    const toggleLanguage = () => {
    setLanguage(prev => prev === "es" ? "en" : "es")
  }
  
  return (
    
    <div className="main-menu">

      {/* 🔥 BOTÓN IDIOMA */}
<button className="lang-btn" onClick={toggleLanguage}>
<Globe size={16} />
{language === "es" ? "ES" : "EN"}
</button>
      

<button
  className={screen === "presentation" ? "active" : "inactive"}
  onClick={() => setScreen("presentation")}
>
  {language === "es" ? "Inicio" : "Home"}
</button>

<button
  className={screen === "selector" ? "active" : "inactive"}
  onClick={() => setScreen("selector")}
>
  {language === "es" ? "Trabajo" : "Work"}
</button>

<button
  className={screen === "about" ? "active" : "inactive"}
  onClick={() => setScreen("about")}
>
  {language === "es" ? "Sobre mi" : "About Me"}
</button>

      <button onClick={() => {
        window.open("https://drive.google.com/file/d/1cx2UniLnJx46el4cFgHjW_2b252S1cLv/view?usp=sharing", "_blank");
      }}>
        Portfolio PDF
      </button>

    </div>
  );
}