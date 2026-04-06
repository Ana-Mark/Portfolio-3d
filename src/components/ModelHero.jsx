import { useGLTF, useTexture } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { useMemo } from "react"
import { clone } from "three/examples/jsm/utils/SkeletonUtils"





const texturePaths = [
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
]





function ModelHero({ activeMaps }) {

const gltf = useGLTF("/models/VendingMachine.glb")

const scene = useMemo(() => clone(gltf.scene), [gltf.scene])
  
  



const textures = useTexture(texturePaths)

const [
  VMmbBC, VMmbN, VMmbAORM,
  VMmyBC, VMmyN, VMmyAORM,
  VMmtaBC, VMmtaN, VMmtaAORM,
  VMmtbBC, VMmtbN, VMmtbAORM
] = textures





const MATERIAL_CONFIG = useMemo(() => ({
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
  }
}), [
  VMmbBC, VMmbN, VMmbAORM,
  VMmyBC, VMmyN, VMmyAORM,
  VMmtaBC, VMmtaN, VMmtaAORM,
  VMmtbBC, VMmtbN, VMmtbAORM
])








  

useEffect(() => {
 if (!scene) return
if (!activeMaps) return

  scene.traverse((child) => {
    if (!child.isMesh) return

    const matName = child.material.name

    const configKey = Object.keys(MATERIAL_CONFIG).find(name =>
      matName.includes(name)
    )

    const config = MATERIAL_CONFIG[configKey]

    if (!config) return

    child.material.color.set(0xffffff)

    child.material.map = null
    child.material.normalMap = null
    child.material.aoMap = null
    child.material.roughnessMap = null
    child.material.metalnessMap = null

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
  

 }, [scene, activeMaps, MATERIAL_CONFIG])
 useEffect(() => {
  textures.forEach((tex, index) => {
    if (!tex) return

    tex.flipY = false

    if (texturePaths[index].includes("BaseColor")) {
      tex.colorSpace = THREE.SRGBColorSpace
    } else {
      tex.colorSpace = THREE.LinearSRGBColorSpace
    }

    tex.needsUpdate = true
  })
}, [textures])

  return <primitive object={scene} />
}

export default ModelHero