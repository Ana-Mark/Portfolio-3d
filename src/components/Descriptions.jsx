

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
    <div class="text-block">
      <div className="model-title">
      <h1>{model.name}</h1>
      </div>

      <div className="model-description">
      <p>{model.description}</p>
      </div>
      </div>
<div class="link-block">
<div className="links">
  {model.links?.map((link) => (
    <a key={link.url} href={link.url} target="_blank">
      {link.label}
    </a>
  ))}
</div>
</div>
    </>
  )
}

export default ModelDescription