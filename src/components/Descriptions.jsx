

import { MODELS } from "../data/modelsData"

// Este componente muestra el título y descripción del modelo activo

function ModelDescription({ activeModel }) {

  // ==============================
  // 📦 OBTENER MODELO ACTUAL
  // ==============================
  const model = MODELS[activeModel]

  // ==============================
  // ❌ SI NO HAY MODELO → NO RENDER
  // ==============================
  if (!model) return null

  // ==============================
  // 🎨 RENDER
  // ==============================
  return (
    <>
      <div className="model-title">
      <h1>{model.name}</h1>
      </div>

      <div className="model-description">
      <p>{model.description}</p>
      </div>
    </>
  )
}

export default ModelDescription