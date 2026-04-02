import "../styles/ModelSelector.css";

export default function ModelSelector({ setScreen, setSelectedModel }) {
  return (
    <div className="selector-wrapper">

      <div className="hallway">


        <div className="window window-0" onClick={() => {
            setSelectedModel(0);
            setScreen("viewer")}}>

          <div className="window-glass">Modelo 0</div>
        </div>
      

        <div className="window window-1" onClick={() => {
            setSelectedModel(1);
            setScreen("viewer")}}>

          <div className="window-glass">Modelo 1</div>
        </div>

        <div className="window window-2" onClick={() => {
            setSelectedModel(2);
            setScreen("viewer")}}>

          <div className="window-glass">Modelo 2</div>
        </div>

        <div className="window window-3" onClick={() => {
            setSelectedModel(3);
            setScreen("viewer")}}>
              
          <div className="window-glass">Modelo 3</div>
        </div>

      </div>

      <button className="back-button" onClick={() => setScreen("presentation")}>
        Ir a presentación
      </button>

    </div>
  );
}