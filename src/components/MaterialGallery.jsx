import { useState } from "react"

//RUTA MATERIALES
const MATERIALS = [
  {
    name: "Metal Black",
    maps: [
      { name: "VMmbBC", src: "/Textures/Modular/MI_BM_MetalicBlack_01_BaseColor.png" },
      { name: "VMmbN", src: "/Textures/Modular/MI_BM_MetalicBlack_01_Normal.png" },
      { name: "VMmbAORM", src: "/Textures/Modular/MI_BM_MetalicBlack_01_OcclusionRoughnessMetallic.png" }
    ]
  },

  {
    name: "Metal Yellow",
    maps: [
      { name: "VMmyBC", src: "/Textures/Modular/MI_BM_MetalicYellow_BaseColor.png" },
      { name: "VMmyN", src: "/Textures/Modular/MI_BM_MetalicYellow_Normal.png" },
      { name: "VMmyAORM", src: "/Textures/Modular/MI_BM_MetalicYellow_OcclusionRoughnessMetallic.png" }
    ]
  },

  {
    name: "Turquoise A",
    maps: [
      { name: "VMmtaBC", src: "/Textures/Modular/MI_BM_Turquoise_A_BaseColor.png" },
      { name: "VMmtaN", src: "/Textures/Modular/MI_BM_Turquoise_A_Normal.png" },
      { name: "VMmtaAORM", src: "/Textures/Modular/MI_BM_Turquoise_A_OcclusionRoughnessMetallic.png" }
    ]
  },

  {
    name: "Turquoise B",
    maps: [
      { name: "VMmtbBC", src: "/Textures/Modular/MI_BM_Turquoise_B_BaseColor.png" },
      { name: "VMmtbN", src: "/Textures/Modular/MI_BM_Turquoise_B_Normal.png" },
      { name: "VMmtbAORM", src: "/Textures/Modular/MI_BM_Turquoise_B_OcclusionRoughnessMetallic.png" }
    ]
  }
]


function MaterialGallery({ activeMaps, setActiveMaps }) {

  const [activeMaterial, ] = useState(0)

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


 if (!activeMaps || Object.keys(activeMaps).length === 0) {
  return <div>Loading textures...</div>
}


  const maps = MATERIALS[activeMaterial].maps

    return (
     <div className="material-grid">

       {MATERIALS.map((mat, index) => (

         <div key={index} className="material-column">

           <button
             onClick={() => toggleSet(mat)}
            >
           {mat.name}
          </button>

          <div className="uv-maps-column">
            {mat.maps.map((map) => (
              <img
                key={map.name}
                src={map.src}
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

export default MaterialGallery