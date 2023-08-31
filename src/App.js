import logo from './logo.svg';
import './App.css';

import { Canvas } from "@react-three/fiber";
import MainMesh from './components/MainMesh';
import { ScrollControls } from "@react-three/drei";
import { Experience } from './components/Experience';
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';

function App() {

  const[load,setLoad]=useState(true)

  return (
    <div >
       <Canvas camera={{
        position: [0, 0, 5],
        fov: 30,
      }} onCreated={()=>{console.log("LOADEDDD");setTimeout(()=>setLoad(false),2000)}}>{load?
       <Preloader/>
       :
      
          <>
          <color attach="background" args={["transparent"]} />
          <ScrollControls pages={5} damping={0.3}>
          <Experience/>
          </ScrollControls> 
         </>
      
   }</Canvas>
    </div>
  );
}

export default App;
