import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { Senhas } from "./Senhas";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={.5} />
      <directionalLight intensity={2.5} position={[6,2,3]} 
      // shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-mapSize={(512,512)} 
      />
      
      {/* <directionalLight intensity={.5} position={[4,-1,5]} castShadow shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-mapSize={(512,512)}
      />

      <directionalLight intensity={.5} position={[4,-1,-2]} castShadow shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-mapSize={(512,512)}
            />

      <directionalLight intensity={.5} position={[4,3,-4]} castShadow shadow-camera-left={-20} shadow-camera-right={20} shadow-camera-top={20} shadow-camera-bottom={-20} shadow-mapSize={(512,512)}
      /> */}
      <pointLight position={[10, 10, 10]} />
      {/* <OrbitControls enableZoom={false} minAzimuthAngle={1.3} maxAzimuthAngle={1.7} minPolarAngle={1.2} maxPolarAngle={1.7}       /> */}
      <ScrollControls pages={4} damping={0.25}>
        <Overlay />
        <Senhas />
      </ScrollControls>
    </>
  );
};