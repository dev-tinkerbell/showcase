import { Environment, Sphere } from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
// import { ambientLight } from "@react-three/drei";

import * as THREE from "three";

export const Background = () => {
  return (
    <>
      {/**<Environment preset="dawn"/> */}
      <ambientLight />
      <ambientLight />
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          color={"#000000"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#312e3e"}
            colorB={"#453e5c"}
            axes={"y"}
            start={0.8}
            end={-0.5}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
