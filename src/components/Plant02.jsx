/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 destroyed_moon.glb 
Author: TomaszObloj (https://sketchfab.com/tomasz_obloj)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/destroyed-moon-94119660e7054fc5b7baa68a4e39968c
Title: Destroyed moon
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Plant02({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/plants/destroyed_moon.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.014, -0.004, 0.013]} scale={0.89}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Moon} />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.DeepCore}
        />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Core} />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Subsurface}
        />
      </group>
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.MoonCore}
        position={[0.014, -0.004, 0.013]}
        scale={0.563}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.MoonCrust2}
        position={[1.424, 2.089, -0.24]}
        rotation={[-1.002, 0.431, -2.449]}
        scale={[0.667, 0.752, 0.652]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.MoonCrust1}
        position={[1.83, 0.033, -1.139]}
        rotation={[-1.37, 0.991, 1.323]}
        scale={[0.266, 0.174, 0.266]}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.MoonCrust4}
        position={[1.756, 0.884, -0.458]}
        rotation={[2.88, -0.459, 0.865]}
        scale={0.712}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.MoonCrust5}
        position={[0.095, 1.978, -1.164]}
        rotation={[-1.739, 0.127, 2.735]}
        scale={[0.318, 0.208, 0.318]}
      />
      <mesh
        geometry={nodes.Object_19.geometry}
        material={materials.MoonCrust2}
        position={[0.709, -0.166, -1.293]}
        rotation={[-1.717, -0.259, -1.24]}
        scale={0.654}
      />
      <mesh
        geometry={nodes.Object_21.geometry}
        material={materials.MoonCrust3}
        position={[-0.195, 0.712, -1.463]}
        rotation={[-2.961, -0.546, -2.578]}
        scale={[0.251, 0.165, 0.251]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.MoonCrust5}
        position={[0.811, 0.727, -2.432]}
        rotation={[-3.007, 0.103, 0.677]}
        scale={[0.156, 0.102, 0.156]}
      />
      <mesh
        geometry={nodes.Object_25.geometry}
        material={materials.MoonCrust6}
        position={[2.432, 1.441, -1.429]}
        rotation={[0.687, 0.001, -3.044]}
        scale={[0.564, 0.636, 0.551]}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.MoonCrust3}
        position={[0.437, 0.674, -3.417]}
        rotation={[-2.425, 1.256, 1.218]}
        scale={0.392}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.MoonCrust4}
        position={[3.309, 1.85, -1.342]}
        rotation={[-0.562, -0.802, -1.109]}
        scale={[0.378, 0.427, 0.37]}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials.MoonCrust4}
        position={[2.275, 0.631, -2.672]}
        rotation={[-2.813, 0.235, -0.956]}
        scale={[0.16, 0.105, 0.16]}
      />
      <mesh
        geometry={nodes.Object_33.geometry}
        material={materials.MoonCrust4}
        position={[-0.144, 1.698, -2.656]}
        rotation={[-0.029, 0.785, 2.931]}
        scale={[0.182, 0.119, 0.182]}
      />
      <mesh
        geometry={nodes.Object_35.geometry}
        material={materials.MoonCrust4}
        position={[2.466, 1.392, -4.45]}
        rotation={[0.905, -0.539, 0.903]}
        scale={[0.098, 0.065, 0.098]}
      />
      <mesh
        geometry={nodes.Object_37.geometry}
        material={materials.MoonCrust5}
        position={[1.574, 1.781, -3.793]}
        rotation={[-0.18, -0.44, 1.66]}
        scale={0.288}
      />
      <mesh
        geometry={nodes.Object_39.geometry}
        material={materials.MoonCrust4}
        position={[1.331, 3.064, -2.18]}
        rotation={[-2.608, -0.497, -0.223]}
        scale={0.401}
      />
      <mesh
        geometry={nodes.Object_41.geometry}
        material={materials.MoonCrust4}
        position={[2.986, 2.595, -3.207]}
        rotation={[2.581, -0.53, -1.094]}
        scale={[0.098, 0.065, 0.098]}
      />
      <mesh
        geometry={nodes.Object_43.geometry}
        material={materials.MoonCrust4}
        position={[3.572, -0.19, -2.676]}
        rotation={[2.672, 0.272, -1.728]}
        scale={0.288}
      />
      <mesh
        geometry={nodes.Object_45.geometry}
        material={materials.MoonCrust4}
        position={[1.331, 3.455, -3.26]}
        rotation={[-2.884, 1.041, 0.489]}
        scale={0.202}
      />
      <mesh
        geometry={nodes.Object_47.geometry}
        material={materials.MoonCrust4}
        position={[1.756, -0.296, -2.732]}
        rotation={[2.443, 0.919, 2.154]}
        scale={0.357}
      />
      <mesh
        geometry={nodes.Object_49.geometry}
        material={materials.MoonCrust2}
        position={[1.424, 4.305, -2.236]}
        rotation={[-2.032, -0.987, 1.829]}
        scale={[0.267, 0.302, 0.261]}
      />
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.MoonCrust5}
        position={[3.511, 2.861, -2.114]}
        rotation={[-0.843, 0.771, 1.115]}
        scale={[0.102, 0.067, 0.102]}
      />
      <mesh
        geometry={nodes.Object_53.geometry}
        material={materials.MoonCrust3}
        position={[0.888, 0.815, -1.192]}
        rotation={[2.421, 0.471, -1.494]}
        scale={[0.17, 0.111, 0.17]}
      />
    </group>
  );
}

useGLTF.preload("./models/plants/destroyed_moon.glb");
