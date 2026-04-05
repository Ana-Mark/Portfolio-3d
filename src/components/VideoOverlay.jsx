// Este componente muestra un vídeo en overlay
// dependiendo del modelo activo

function VideoOverlay({ activeModel, isVisible, MODELS, onClose }) {
  if (!isVisible || activeModel === null) return null;

  const video = MODELS[activeModel]?.video;

  return (
    <div className="render-overlay">
      
      <button className="close-btn" onClick={onClose}>
        Volver
      </button>

      <div className="render-scroll">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </div>

    </div>
  );
}

export default VideoOverlay