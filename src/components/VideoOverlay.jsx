// Este componente muestra un vídeo en overlay
// dependiendo del modelo activo

function VideoOverlay({ activeModel, isVisible, MODELS, onClose}) {

  if (!isVisible || activeModel === null) return null



  // Obtener el vídeo del modelo actual
    const video = MODELS[activeModel]?.video
    console.log("VIDEO OVERLAY RENDER");
console.log(video);

console.log("VIDEO SIZE:", document.querySelector("video")?.getBoundingClientRect());




  
  return (
    <div className="render-overlay">
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

      <button onClick={onClose}>
       Volver
       </button>
    </div>
  )
}

export default VideoOverlay