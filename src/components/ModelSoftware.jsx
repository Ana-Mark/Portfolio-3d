import { MODELS } from "../data/modelsData"

function ModelSoftware({ activeModel }) {
  const model = MODELS[activeModel]
  if (!model) return null

  return (
    <div className="software-block">
<div className="software-inline">
  {model.software.map((s) => (
    <img key={s.name} src={s.icon} alt={s.name} />
  ))}
</div>
</div>
  )
}

export default ModelSoftware