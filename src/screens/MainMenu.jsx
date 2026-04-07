import "../styles/MainMenu.css";


export default function MainMenu({ setScreen, screen }) {
  
  return (
    
    <div className="main-menu">
      

<button
  className={screen === "presentation" ? "active" : "inactive"}
  onClick={() => setScreen("presentation")}
>
  Home
</button>

<button
  className={screen === "selector" ? "active" : "inactive"}
  onClick={() => setScreen("selector")}
>
  Work
</button>

<button
  className={screen === "about" ? "active" : "inactive"}
  onClick={() => setScreen("about")}
>
  About me
</button>

      <button onClick={() => {
        window.open("https://drive.google.com/file/d/1cx2UniLnJx46el4cFgHjW_2b252S1cLv/view?usp=sharing", "_blank");
      }}>
        Portfolio PDF
      </button>

    </div>
  );
}