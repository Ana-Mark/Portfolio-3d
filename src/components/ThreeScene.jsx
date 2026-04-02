import Models from "./Models"

 function Scene({ activeModel, animationOn, activeMaps, activeAsset, activeSection,uvMode }) {

  return (
    <>
      {/* Grid tipo Blender */}
      {/*<gridHelper args={[20, 20]} />*/}


      
  {/* SUELO 
  <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="#d9d9d9" />
  </mesh>

  {/* TECHO 
  <mesh position={[0, 3, 0]} rotation={[Math.PI / 2, 0, 0]}>
    <planeGeometry args={[10, 10]} />
    <meshStandardMaterial color="#d9d9d9" />
  </mesh>

  {/* PARED IZQUIERDA 
  <mesh position={[-0.2, 1, 2]} rotation={[0, Math.PI / 0.9, 0]}>
    <planeGeometry args={[6, 6]} />
    <meshStandardMaterial color="#eaeaea" />
  </mesh>

  {/* PARED INCLINADA 
  <mesh position={[2.6, 1, 0.6]} rotation={[0, -Math.PI / 2, 0]}>
    <planeGeometry args={[6, 6]} />
    <meshStandardMaterial color="#f5f5f5" />
  </mesh>

  {/* PARED DERECHA 
  <mesh position={[0.1, 1, -2]} rotation={[0, Math.PI / -9, 0]}>
    <planeGeometry args={[6, 6]} />
    <meshStandardMaterial color="#c0dfc4" />
  </mesh>

  {/* PARED TRASERA 
  <mesh position={[-2.7, 1, -0.2]} rotation={[0, -Math.PI / -2, 0]}>
    <planeGeometry args={[8, 6]} />
    <meshStandardMaterial color="#f5f5f5" />
  </mesh>*/}

 


      <Models
         activeModel={
          activeSection === "render" ||
          activeSection === "video" ||
         (activeSection === "assets" && activeAsset === "images") 
         
           ? null
           : activeModel
          }
        animationOn={animationOn}
        activeMaps={activeMaps}
        activeAsset={activeAsset}
        uvMode={uvMode}

        
      />
    </>
  )
}

export default Scene
