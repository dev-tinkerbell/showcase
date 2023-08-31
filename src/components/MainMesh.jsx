import React from 'react'
import { OrbitControls } from "@react-three/drei";


const MainMesh = () => {
  return (
    <>
        <OrbitControls />
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    </>
  )
}

export default MainMesh