import { MODELS } from "../data/modelsData"

// Este componente muestra los iconos de software
// usando los datos centralizados

function SoftwareIcons({ activeModel, setActiveSoftware }) {

  // ==============================
  // 📦 OBTENER MODELO ACTUAL
  // ==============================
  const model = MODELS[activeModel]
  if (activeModel === null) return null

  // Si no hay modelo → array vacío
  const programs = model?.software || []

  // ==============================
  // 🎨 RENDER
  // ==============================
  return (
    <div className="software-frame">

      <h3>Software Used</h3>

      <div className="software-icons">

        {programs.map((program, index) => (
          <img
            key={index}
            src={program.icon}
            alt={program.name}
            title={program.name}
            onClick={() => setActiveSoftware(program)}
          />
        ))}

      </div>
    </div>
  )
}

export default SoftwareIcons