/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 low_poly_planet.glb 
Author: Pika8000 (https://sketchfab.com/Pika8000)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-planet-9bf9d6cac26242c785659d9fc15d5c21
Title: Low Poly Planet
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Plant03(props) {
  const { nodes, materials } = useGLTF("./models/plants/low_poly_planet.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Icosphere_0.geometry}
          material={materials["Water.001"]}
        />
        <mesh geometry={nodes.Icosphere_7.geometry} material={materials.Root} />
      </group>
    </group>
  );
}

useGLTF.preload("./models/plants/low_poly_planet.glb");