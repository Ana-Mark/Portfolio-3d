import "../styles/MainMenu.css";

export default function MainMenu({ setScreen }) {
  return (
    <div className="main-menu">

      <button onClick={() => setScreen("presentation")}>
        Home
      </button>

      <button onClick={() => setScreen("selector")}>
        Work
      </button>

      <button onClick={() => setScreen("about")}>
        About Me
      </button>

      <button onClick={() => {
        window.open("https://drive.google.com/tu-pdf", "_blank");
      }}>
        Problems?
      </button>

    </div>
  );
}