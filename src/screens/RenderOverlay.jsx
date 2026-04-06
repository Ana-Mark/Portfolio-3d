import "../styles/RenderOverlay.css";

export default function RenderOverlay({ activeModel, isVisible, onClose }) {

    const RENDERS = [
    [
      "/Textures/Renders/Weapon_Render_01.png",
      "/Textures/Renders/Weapon_Render_02.png",
      "/Textures/Renders/Weapon_Render_03.png",
    ],
    [
      "/Textures/Renders/Zippo_Render_01.png",
      "/Textures/Renders/Zippo_Render_02.png",
    ],
    [
      "/Textures/Renders/Modular_R_03.jpeg",
      "/Textures/Renders/Modular_R_02.jpeg",
      "/Textures/Renders/Modular_R_01.jpeg",
      "/Textures/Renders/Modular_R_04.jpeg",
      "/Textures/Renders/Modular_R_05.jpeg"
    ]
   ];

  if (!isVisible) return null;

  const images = RENDERS[activeModel] || [];

    return (
    <div className="render-overlay">




      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      <div className="render-scroll">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>

    </div>
  );
}
