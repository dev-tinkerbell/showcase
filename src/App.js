import './App.css';

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Experience } from './components/Experience';
import Preloader from './components/Preloader';
import { useState } from 'react';
import {Html } from '@react-three/drei';
import RadialGradientt from './components/radial-gradient (1).png';


function App() {

  const[load,setLoad]=useState(true)
  const[hover,setHover]=useState(false)
  return (

    <div className='aapp'>
       <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }} 
      onCreated={()=>{console.log("LOADEDDD");setLoad(true);}}>
      {
        load?
       <><Preloader/>
         <Html position={[-0.6,0,0]}>  
         <button style={{fontSize:"25px",fontFamily:"emoji",width: "max-content",border: "none",padding: "11px 30px",cursor:"pointer"}}
                 onClick={()=>setLoad(false)}               
                 onMouseOver={()=>setHover(true)}
                 onMouseOut={()=>setHover(false)}
                   >
              <div >Explore me</div>
         </button>
         </Html>
       </>
       :
      
          <>
          <color attach="background" args={["blue"]} />
          <ScrollControls pages={5} damping={0.3}>
          <Experience/>
          </ScrollControls> 
         </>
      
   }</Canvas>
    </div>
  );
}

export default App;
