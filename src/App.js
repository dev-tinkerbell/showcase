import "./App.css";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Experience } from "./components/Experience";
import Preloader from "./components/Preloader";
import { useState, useEffect, useRef } from "react";

function App() {
  const [load, setLoad] = useState(true);
  const [hover, setHover] = useState(false);
  return (
    <div className="app">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
        onCreated={() => {
          console.log("LOADED");
          setLoad(true);
        }}
      >
        <>
          <color attach="background" args={["blue"]} />
          <ScrollControls
            pages={5}
            damping={0.3}
            style={{ width: "94.5%", height: "92%", top: "26px" }}
          >
            {/**you can listen and react to scrolling page using this */}
            <Experience />
            <Scroll html position={[-0.8, 2, 0]}>
              <h1
                className="text1"
                style={{
                  top: "15vh",
                  left: "37vw",
                  transition: "all 0.1s ease",
                }}
              >
                Scroll to begin journey
              </h1>
              <h1 className="text2" style={{ top: "100vh", left: "10vw" }}>
                Info 1
              </h1>
              <h1 className="text3" style={{ top: "200vh", left: "74vw" }}>
                Info 2
              </h1>
              <h1 className="text3" style={{ top: "300vh", left: "10vw" }}>
                Info 3
              </h1>
            </Scroll>
          </ScrollControls>
        </>
      </Canvas>
    </div>
  );
}

export default App;
