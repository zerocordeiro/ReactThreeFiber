import { Canvas } from "@react-three/fiber"
import { Experience } from "./Components/Experience.jsx"
import './App.css' 

function App() {
  return (
     <Canvas camera={ {fov: 64, position: [2, 0, 0],} } shadows>
      <Experience/>
      

     </Canvas>

  )
}

export default App
