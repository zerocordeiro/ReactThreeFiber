import { Canvas } from "@react-three/fiber"
import { Experience } from "./Components/Experience.jsx"
import './App.css' 
import * as THREE from 'three'


function App() {
  return (
     <Canvas camera={ {fov: 64, position: [2, 0, 0],} } shadows={{ type: THREE.PCFSoftShadowMap, mapSize:(10240,10240)}}>
      <Experience/>
      

     </Canvas>

  )
}

export default App
