
import { useEffect, useMemo } from "react"



const UV_SETS = {
  0: [
    {
      name: "Barrel",
      maps: [
        { name: "barrelBC", src: "/Textures/Weapon/01_Barrel_BaseColor.png" },
        { name: "barrelN", src: "/Textures/Weapon/01_Barrel_Normal.png" },
        { name: "barrelAORM", src: "/Textures/Weapon/01_Barrel_AORM.png" },
      ]
    },

    {
      name: "Body",
      maps: [
        { name: "bodyBC", src: "/Textures/Weapon/02_Body_BaseColor.png" },
        { name: "bodyN", src: "/Textures/Weapon/02_Body_Normal.png" },
        { name: "bodyAORM", src: "/Textures/Weapon/02_Body_AORM.png" },
      ]
    },

    {
      name: "Trigger / Buttstock",
      maps: [
        { name: "buttBC", src: "/Textures/Weapon/03_04_Trigger_Buttstock_BaseColor.png" },
        { name: "buttN", src: "/Textures/Weapon/03_04_Trigger_Buttstock_Normal.png" },
        { name: "buttAORM", src: "/Textures/Weapon/03_04_Trigger_Buttstock_AORM.png" },
      ]
    }
  ],

  1: [
    {
      name: "Zippo",
      maps: [
        { name: "zippoBC", src: "/Textures/Zippo/Zippo_BaseColor.png" },
        { name: "zippoN", src: "/Textures/Zippo/Zippo_Normal.png" },
        { name: "zippoAORM", src: "/Textures/Zippo/Zippo_AORM.png" },
      ]
    }
  ]
}

function UVGallery({ activeMaps, setActiveMaps, activeModel}) {

  
  const toggleMap = (name) => {
    setActiveMaps(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const toggleSet = (set) => {

  const anyActive = set.maps.some(map => activeMaps[map.name])

  const newState = { ...activeMaps }

  set.maps.forEach(map => {
    newState[map.name] = !anyActive
  })

  setActiveMaps(newState)
}

  const sets = useMemo(() => {
  return UV_SETS[activeModel] ?? []
 }, [activeModel])

 

  

  // ("MODELOS MODULARES SELECCIONABLES")
  /*const MODULAR_MODELS = [
    { name: "modular1", src: "/models/VendingMachine.glb" },
    { name: "modular2", src: "/Textures/Modular/model2.png" },
    { name: "modular3", src: "/Textures/Modular/model3.png" },
    { name: "modular4", src: "/Textures/Modular/model4.png" },
    { name: "modular5", src: "/Textures/Modular/model5.png" },
  ]*/

  

useEffect(() => {

  const newState = {}

  const currentMaps = sets.flatMap(set => set.maps)

  currentMaps.forEach(map => {
    newState[map.name] = true
  })

  setActiveMaps(newState)

}, [activeModel, sets, setActiveMaps])

 if (!activeMaps || Object.keys(activeMaps).length === 0) {
  return <div>Loading textures...</div>
}

 return (

<div className="uv-sets-grid">
  <div className="Textures-title-parent">
  <div className="Textures-title">
    <p>Textures</p>
  </div>
  </div>

   {sets.map((set, setIndex) => (

  <div key={setIndex} className="uv-set-column">

    <button
      className="uv-set-button"
      onClick={() => toggleSet(set)}
    >
      {set.name}
    </button>

    <div className="uv-maps-column">

      {set.maps.map((map) => (

        <img
          key={map.name}
          src={map.src}
          alt={map.name}
          className={activeMaps[map.name] ? "active" : ""}
          onClick={() => toggleMap(map.name)}
        />

      ))}

    </div>

  </div>

 ))}

 </div>

 )
  
}

export default UVGallery