import React from 'react'
import { GradientTexture } from '@react-three/drei';
import { OrbitControls, VideoTexture,Html } from '@react-three/drei';

const Preloader = () => {
  return (
    <mesh>
    <Html>  
    <div style={{ width: '100px', height: '100px', backgroundColor: 'transparent',color:"white",fontSize:"40px"}}>
      ATMOS
    </div>
    </Html>
  </mesh>
  )
}

export default Preloader