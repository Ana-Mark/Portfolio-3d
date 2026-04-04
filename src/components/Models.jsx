import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

import { useTexture } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { useMemo } from "react"


useGLTF.preload("/models/Weapon_Portfolio_04.glb");
useGLTF.preload("/models/Zippo_Portfolio_01.glb");
useGLTF.preload("/models/VendingMachine.glb");
useGLTF.preload("/models/Calendar.glb");


//ANIMACION MODELO FLOTANDO
const MODEL_FLOAT_SETTINGS = [
  {
    ySpeed: 0.7,
    yAmount: 0.03,
    xSpeed: 0.5,
    xAmount: 0.02,
    rotSpeed: 0.3,
    rotAmount: 0.01
  },
  {
    ySpeed: 0.4,
    yAmount: 0.002,
    xSpeed: 0.3,
    xAmount: 0.002,
    rotSpeed: 0,
    rotAmount: 0
  },
  {
    ySpeed: 0.2,
    yAmount: 0.01,
    xSpeed: 0.2,
    xAmount: 0.005,
    rotSpeed: 0.15,
    rotAmount: 0.01
  },
  {
    ySpeed: 0.6,
    yAmount: 0.03,
    xSpeed: 0.6,
    xAmount: 0.02,
    rotSpeed: 0.4,
    rotAmount: 0.02
  }
]

//DONDE PERTENECE CADA TEXTURA
const MODEL_TEXTURES = [
  {
    // MODELO 0 - WEAPON
    textures: [
      "/Textures/Weapon/01_Barrel_BaseColor.png",
      "/Textures/Weapon/01_Barrel_Normal.png",
      "/Textures/Weapon/01_Barrel_AORM.png",
      "/Textures/Weapon/02_Body_BaseColor.png",
      "/Textures/Weapon/02_Body_Normal.png",
      "/Textures/Weapon/02_Body_AORM.png",
      "/Textures/Weapon/03_04_Trigger_Buttstock_BaseColor.png",
      "/Textures/Weapon/03_04_Trigger_Buttstock_Normal.png",
      "/Textures/Weapon/03_04_Trigger_Buttstock_AORM.png",
    ],
  },
  {
    // MODELO 1 - ZIPPO
    textures: [
      "/Textures/Zippo/Zippo_BaseColor.png",
      "/Textures/Zippo/Zippo_Normal.png",
      "/Textures/Zippo/Zippo_AORM.png",
    ],
  },
  {
    // MODELO 2 - MODULAR (VENDING MACHINE)
    textures: [
      "/Textures/Modular/MI_BM_MetalicBlack_01_BaseColor.png",
      "/Textures/Modular/MI_BM_MetalicBlack_01_Normal.png",
      "/Textures/Modular/MI_BM_MetalicBlack_01_OcclusionRoughnessMetallic.png",

      "/Textures/Modular/MI_BM_MetalicYellow_BaseColor.png",
      "/Textures/Modular/MI_BM_MetalicYellow_Normal.png",
      "/Textures/Modular/MI_BM_MetalicYellow_OcclusionRoughnessMetallic.png",

      "/Textures/Modular/MI_BM_Turquoise_A_BaseColor.png",
      "/Textures/Modular/MI_BM_Turquoise_A_Normal.png",
      "/Textures/Modular/MI_BM_Turquoise_A_OcclusionRoughnessMetallic.png",

      "/Textures/Modular/MI_BM_Turquoise_B_BaseColor.png",
      "/Textures/Modular/MI_BM_Turquoise_B_Normal.png",
      "/Textures/Modular/MI_BM_Turquoise_B_OcclusionRoughnessMetallic.png",

    ],
  },

  {
    textures: [
      "/Textures/Modular/Metalic_Pattern_Floor_BaseColor.png",
      "/Textures/Modular/Metalic_Pattern_Floor_Normal.png",
      "/Textures/Modular/Metalic_Pattern_Floor_OcclusionRoughnessMetallic.png",

    ],
  }
]
//RUTA ASSETS MODULAR
const MODULAR_ASSETS = [
 {type:"model", path:"/models/VendingMachine.glb"},
 { type:"tileable", path:"/models/Tile_Texture_Mesh.glb" }
 
]





//tEXTURAS + ANIMACION MODELO FLOTANDO
function Model({ path, visible, animationOn, activeMaps, modelIndex}) {

  const gltf = useGLTF(path)
  const ref = useRef()
  const floatSettings = MODEL_FLOAT_SETTINGS[modelIndex] || {
   ySpeed: 0,
   yAmount: 0,
   xSpeed: 0,
   xAmount: 0,
   rotSpeed: 0,
   rotAmount: 0
  }
  

      
   
  const texturePaths = useMemo(() => {
   return MODEL_TEXTURES[modelIndex]?.textures || []
  }, [modelIndex])

  const textures = useTexture(texturePaths)

  

  useEffect(() => {
  if (!gltf?.scene) return

  const box = new THREE.Box3().setFromObject(gltf.scene)
  const center = box.getCenter(new THREE.Vector3())

  gltf.scene.position.sub(center)
}, [gltf])



  useEffect(() => {
   textures.forEach((tex, index) => {
     if (!tex) return
       tex.flipY = false

     // Si es BaseColor
     if (texturePaths[index].includes("BaseColor")) {
       tex.colorSpace = THREE.SRGBColorSpace
      } 
      else {
       tex.colorSpace = THREE.LinearSRGBColorSpace
      }

     tex.needsUpdate = true
    })

  }, [textures, texturePaths])

  const textureMap = {}

  texturePaths.forEach((path, index) => {
   const key = path.split("/").pop().replace(".png", "")
   textureMap[key] = textures[index]
  })

  

  let barrelBC, barrelN, barrelAORM,
    bodyBC, bodyN, bodyAORM,
    buttBC, buttN, buttAORM,
    zippoBC, zippoN, zippoAORM,
    VMmbBC, VMmbN, VMmbAORM,
    VMmyBC, VMmyN, VMmyAORM,
    VMmtaBC, VMmtaN, VMmtaAORM,
    VMmtbBC, VMmtbN, VMmtbAORM,
    TmpBC, TmpN, TmpAORM

  if (modelIndex === 0) {
   [
    barrelBC, barrelN, barrelAORM,
    bodyBC, bodyN, bodyAORM,
    buttBC, buttN, buttAORM
   ] = textures
  }

  if (modelIndex === 1) {
   [zippoBC, zippoN, zippoAORM] = textures
  }

  if (modelIndex === 2) {
   [VMmbBC, VMmbN, VMmbAORM,
    VMmyBC, VMmyN, VMmyAORM,
    VMmtaBC, VMmtaN, VMmtaAORM,
    VMmtbBC, VMmtbN, VMmtbAORM
   ] = textures
  }
  if (modelIndex === 3) {
  [TmpBC, TmpN, TmpAORM] = textures
 }

  

  
  const MATERIAL_CONFIG = useMemo(() => ({

   "01_Barrel": {
     bc: barrelBC,
     n: barrelN,
     aorm: barrelAORM,
     maps: ["barrelBC","barrelN","barrelAORM"]
    },

   "02_Body": {
     bc: bodyBC,
     n: bodyN,
     aorm: bodyAORM,
     maps: ["bodyBC","bodyN","bodyAORM"]
    },

   "03_04_Trigger_Buttstock": {
     bc: buttBC,
     n: buttN,
     aorm: buttAORM,
     maps: ["buttBC","buttN","buttAORM"]
    },

   "ZippoMat": {
     bc: zippoBC,
     n: zippoN,
     aorm: zippoAORM,
     maps: ["zippoBC","zippoN","zippoAORM"]
    },

   "MI_BM_MetalicBlack_01": {
     bc: VMmbBC,
     n: VMmbN,
     aorm: VMmbAORM,
     maps: ["VMmbBC","VMmbN","VMmbAORM"]
    },

   "MI_BM_MetalicYellow": {
     bc: VMmyBC,
     n: VMmyN,
     aorm: VMmyAORM,
     maps: ["VMmyBC","VMmyN","VMmyAORM"]
    },

   "MI_BM_Turquoise_A": {
     bc: VMmtaBC,
     n: VMmtaN,
     aorm: VMmtaAORM,
     maps: ["VMmtaBC","VMmtaN","VMmtaAORM"]
    },

   "MI_BM_Turquoise_B": {
     bc: VMmtbBC,
     n: VMmtbN,
     aorm: VMmtbAORM,
     maps: ["VMmtbBC","VMmtbN","VMmtbAORM"]
    },

    "MI_Metalic_Pattern": {
     bc: TmpBC,
     n: TmpN,
     aorm: TmpAORM,
     maps: ["TmpBC","TmpN","TmpAORM"]
    }

  }), 
  [
  barrelBC, barrelN, barrelAORM,
  bodyBC, bodyN, bodyAORM,
  buttBC, buttN, buttAORM,
  zippoBC, zippoN, zippoAORM,
  VMmbBC, VMmbN, VMmbAORM,
  VMmyBC, VMmyN, VMmyAORM,
  VMmtaBC, VMmtaN, VMmtaAORM,
  VMmtbBC, VMmtbN, VMmtbAORM,
  TmpBC,TmpN,TmpAORM
  ])
  

 

  //Textura Original
  useEffect(() => {
   if (!gltf) return
  
  }, [gltf])


  //Texturas en Modelo
  useEffect(() => {
   if (!gltf || !activeMaps) 

   return

   const isTileable = path.includes("Tile_Texture_Mesh")

   gltf.scene.traverse((child) => {
     if (!child.isMesh) return

     //SABER EL NOMBRE DEL MATERIAL
     //console.log("Material encontrado:", child.material.name)

      if (isTileable) {
      child.material.color.set(0xffffff)
      
      

      if (VMmbBC) {
        VMmbBC.wrapS = THREE.RepeatWrapping
        VMmbBC.wrapT = THREE.RepeatWrapping
        VMmbBC.repeat.set(4, 4) // 🔥 ajusta tiling aquí
      }

      if (VMmbN) {
        VMmbN.wrapS = THREE.RepeatWrapping
        VMmbN.wrapT = THREE.RepeatWrapping
        VMmbN.repeat.set(4, 4)
      }

      if (VMmbAORM) {
        VMmbAORM.wrapS = THREE.RepeatWrapping
        VMmbAORM.wrapT = THREE.RepeatWrapping
        VMmbAORM.repeat.set(4, 4)
      }

      child.material.map = VMmbBC
      child.material.normalMap = VMmbN
      child.material.aoMap = VMmbAORM
      child.material.roughnessMap = VMmbAORM
      child.material.metalnessMap = VMmbAORM

      child.material.needsUpdate = true
      return
    }

    // 👉 RESTO (tu sistema actual)
     const matName = child.material.name
     const configKey = Object.keys(MATERIAL_CONFIG).find(name =>
       matName.includes(name)
      )

     const config = MATERIAL_CONFIG[configKey]

     if (!config) return

       child.material.color.set(0xffffff)

       // BASE COLOR
       child.material.map =
        activeMaps[config.maps[0]] ? config.bc : null

       // NORMAL
       child.material.normalMap =
        activeMaps[config.maps[1]] ? config.n : null

       // AORM
       if (activeMaps[config.maps[2]]) {
         child.material.aoMap = config.aorm
         child.material.roughnessMap = config.aorm
         child.material.metalnessMap = config.aorm
        } else {
         child.material.aoMap = null
         child.material.roughnessMap = null
         child.material.metalnessMap = null
        }

       child.material.needsUpdate = true
    
    })


  }, [activeMaps, 
  gltf, 
  MATERIAL_CONFIG,
  path,
  VMmbBC,
  VMmbN,
  VMmbAORM])


 


  const basePos = useRef(new THREE.Vector3())

   useEffect(()=>{
   if(ref.current){
     basePos.current.copy(ref.current.position)
    }
    },[])

  useFrame((state) => {

   if (!animationOn || !ref.current) return

   
   

   const t = state.clock.elapsedTime

   ref.current.position.y =
   basePos.current.y + Math.sin(t * floatSettings.ySpeed) * floatSettings.yAmount

   ref.current.position.x =
   basePos.current.x + Math.sin(t * floatSettings.xSpeed) * floatSettings.xAmount

   ref.current.rotation.z =
   Math.sin(t * floatSettings.rotSpeed) * floatSettings.rotAmount

  })

  return (
    <primitive 
      ref={ref}
      object={gltf.scene}
      visible={visible}
    />
  )
}







//PATH MODELO Y QUE HACE
function Models({ activeModel, animationOn, activeMaps, uvMode,  }) {


  if (activeModel === null) return null

  switch (activeModel) {
    case 0:
      return (
        <Model 
          path="/models/Weapon_Portfolio_04.glb"
          visible={true}
          animationOn={animationOn}
          activeMaps={activeMaps}
          modelIndex={0}
        />
      )

    case 1:
      return (
        <Model 
          path="/models/Zippo_Portfolio_01.glb"
          visible={true}
          animationOn={animationOn}
          activeMaps={activeMaps}
          modelIndex={1}
        />
      )

    case 2:
      return (
        <>
          {uvMode === "tileable" ? (
            <Model
              path="/models/Tile_Texture_Mesh.glb"
              visible={true}
              animationOn={false}
              activeMaps={activeMaps}
              modelIndex={3}
            />
          ) : (
            <Model
              path="/models/VendingMachine.glb"
              visible={true}
              animationOn={animationOn}
              activeMaps={activeMaps}
              modelIndex={2}
            />
          )}
        </>
      )

    case 3:
      return (
        <Model 
          path="/models/Calendar.glb"
          visible={true}
          animationOn={animationOn}
          activeMaps={activeMaps}
          modelIndex={3}
        />
      )

    default:
      return null
  }
}

export default Models
