import { Float, OrbitControls, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Airplane } from "./Airplane";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import {Cloud2} from "./Cloud2";
import { Environment,Stars } from "@react-three/drei";
const LINE_NB_POINTS = 12000;

export const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100),
        new THREE.Vector3(-1, 0, -103),
        new THREE.Vector3(0, 0, -105),
        new THREE.Vector3(1, 0, -103),
        new THREE.Vector3(0, 0, -101),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.2);
    shape.lineTo(0, 0.2);
    return shape;
  }, [curve]);

  const cameraGroup = useRef();
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length),
      linePoints.length - 1
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 1)];

    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    // Math.PI / 2 -> LEFT
    // -Math.PI / 2 -> RIGHT

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angleRotation
      )
    );
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    );

    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  const airplane = useRef();

  return (
    <>
     {/*<OrbitControls enableZoom={false} />*/}
     <Stars radius={10} depth={70} count={800} factor={4} saturation={10} fade speed={4} />

     <pointLight position={[0,0,0]} intensity={1}/>
      <pointLight position= {[-10, 10, -3]}  intensity={50} color={'orange'}/>
      <pointLight position= {[2.5, -0.5, -2]}  intensity={50} color={'orange'} />
      <pointLight position= {[0, -2.5,-0.5]}  intensity={50} color={'red'}/>
      <pointLight position= {[0, -4.5,-0.5]}  intensity={500} color={'red'}/>
      <pointLight position= {[3, 4, -5]} intensity={100} color={'orange'}/>
      <pointLight position= {[0, 2, -50]} intensity={200} color={'orange'}/>
      <pointLight position= {[-7, -1, -100]} intensity={900} color={'red'}/>
      <pointLight position= {[7, 7, -100]} intensity={900} color={'red'}/>


      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[0.2, 0.5, 6.9]} fov={30} makeDefault />
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Airplane
              rotation-y={Math.PI / 2}
              scale={[0.5, 0.5, 0.5]}
              position-y={0.2}
              position-z={1}
            />
          </Float>
        </group>
      </group>

      {/* LINE */}
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.7} transparent />
        </mesh>
      </group>

      {/* CLOUDS */}
      <Cloud opacity={0.95} scale={[0.9, 0.9, 0.9]} position={[-1.5, -1, -3]} rotation={[0,0,0]}/>

      <Cloud opacity={0.93} scale={[0.9, 0.9, 0.9]} position={[-6.5, -1, -8]} rotation={[0,0,0]} />
      
      <Cloud2 opacity={0.95} scale={[0.8, 0.8, 0.8]} position={[2.5, -0.5, -2]} rotation={[0,0,0]}/>

      <Cloud opacity={0.93} scale={[0.8, 0.8, 0.8]} position={[1.4, -1.2, -12]} rotation={[0,0,0]}/>

      <Cloud2 opacity={0.99} scale={[0.8, 0.8, 0.8]} position={[-1, -1, -53]} rotation={[0,0,0]}/>

      <Cloud opacity={0.97} scale={[1.8, 1.8, 1.8]} position={[0, 1, -100]} rotation={[0,0,0]}/>


    </>
  );
};
