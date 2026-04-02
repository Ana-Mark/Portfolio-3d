function SoftwareOverlay({ activeSoftware }) {

  if (!activeSoftware) return null

  return (
    <div className="render-overlay">
      <div className="render-scroll">
        {activeSoftware.renders?.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>
    </div>
  )
}

export default SoftwareOverlay