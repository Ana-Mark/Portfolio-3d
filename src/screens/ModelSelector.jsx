import "../styles/ModelSelector.css";

export default function ModelSelector({ setScreen, setSelectedModel }) {
  return (
    <div className="selector-wrapper">

      <div className="hallway">


        <div className="window window-0" onClick={() => {
            setSelectedModel(0);
            setScreen("viewer")}}>

          <div className="window-glass">
           <img src="./Textures/Renders/Weapon_Render_02.png" alt="Modelo 0" />
            <div className="glass-overlay"></div>
           </div>
        </div>
      

        <div className="window window-1" onClick={() => {
            setSelectedModel(1);
            setScreen("viewer")}}>

           <div className="window-glass">
             <img src="./Textures/Renders/Zippo_Render_01.png" alt="Modelo 1" />
              <div className="glass-overlay"></div>
             </div>
        </div>

        <div className="window window-2" onClick={() => {
            setSelectedModel(2);
            setScreen("viewer")}}>

          <div className="window-glass">
           <img src="./Textures/Renders/Modular_R_03.jpeg" alt="Modelo 2" />
           <div className="glass-overlay"></div>
           </div>
        </div>

        <div className="window window-3" onClick={() => {
            setSelectedModel(3);
            setScreen("viewer")}}>
              
          <div className="window-glass">
           <img src="./Textures/Renders/calendarRenderPrevier.png" alt="Modelo 3" />
           <div className="glass-overlay"></div>
           </div>
        </div>

      </div>
{/* 
      <button className="back-button" onClick={() => setScreen("presentation")}>
        Ir a presentación
      </button>
*/}
    </div>
  );
}