import { useGLTF, useTexture } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"
import { clone } from "three/examples/jsm/utils/SkeletonUtils"
import { useMemo } from "react"

function ModelTileable() {

const gltf = useGLTF("/models/VendingMachine.glb")
const scene = useMemo(() => clone(gltf.scene), [gltf.scene])

  const [bc, n, aorm] = useTexture([
    "/Textures/Modular/MI_BM_MetalicBlack_01_BaseColor.png",
    "/Textures/Modular/MI_BM_MetalicBlack_01_Normal.png",
    "/Textures/Modular/MI_BM_MetalicBlack_01_OcclusionRoughnessMetallic.png",
  ])

  useEffect(() => {
    if (!scene) return

    ;[bc, n, aorm].forEach(tex => {
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping
      tex.repeat.set(4, 4)
    })

    scene.traverse((child) => {
      if (!child.isMesh) return

      child.material.map = bc
      child.material.normalMap = n
      child.material.aoMap = aorm
      child.material.roughnessMap = aorm
      child.material.metalnessMap = aorm

      child.material.needsUpdate = true
    })

  }, [scene, bc, n, aorm])

  return <primitive object={scene} />
}

export default ModelTileable