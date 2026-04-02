// Este componente muestra un vídeo en overlay
// dependiendo del modelo activo

function VideoOverlay({ activeModel, isVisible, MODELS, onClose}) {

  if (!isVisible || activeModel === null) return null



  // Obtener el vídeo del modelo actual
    const video = MODELS[activeModel]?.video



  // ==============================
  // 🎨 RENDER
  // ==============================

  
  return (
    <div className="render-overlay">
      <div className="render-scroll">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "98%",
            borderRadius: "10px",
            marginTop: "35px"
          }}
        />
      </div>

      <button onClick={onClose}>
       Volver
       </button>
    </div>
  )
}

export default VideoOverlay