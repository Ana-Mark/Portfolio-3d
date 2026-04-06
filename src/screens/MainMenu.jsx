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
        window.open("https://drive.google.com/file/d/1cx2UniLnJx46el4cFgHjW_2b252S1cLv/view?usp=sharing", "_blank");
      }}>
        Portfolio PDF
      </button>

    </div>
  );
}