import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Overlay } from "./Overlay";
import { Senhas } from "./Senhas";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[3,3,3]} castShadow/>
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} minAzimuthAngle={1.3} maxAzimuthAngle={1.7} minPolarAngle={1.2} maxPolarAngle={1.7}/>
      <ScrollControls pages={4} damping={1}>
        <Overlay />
        <Senhas scale={[.3,.3,.3]} rotation-y={Math.PI*-0} position={[0,-1,0]}/>
       
       
      </ScrollControls>
    </>
  );
};

 