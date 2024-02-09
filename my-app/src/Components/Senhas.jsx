/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber';
import gsap from "gsap"

import img1 from '../md-v.jpg'
import img2 from '../md-h.jpg'
import img3 from '../ctv.jpg'
import img4 from '../ipad.jpg'
import img_display from '../display1.jpg'

export const FLOOR_HEIGHT = 10;
export const NB_FLOORS = 4;



export function Senhas(props) {
  const { nodes, materials } = useGLTF('./Dispensador.glb')
  const ref = useRef();
  const tl = useRef();

  const teste = useRef();
  const senhas = useRef();
  const teste2 = useRef();
  const teste3 = useRef();
  const luz1 = useRef();

  const bloco01 = useRef();
  const bloco02 = useRef();
  const bloco03 = useRef();
  const bloco04 = useRef();
  const displayRef = useRef();

  const texturedisplay = useLoader(THREE.TextureLoader, img_display);
  const texture1 = useLoader(THREE.TextureLoader, img1);
  const texture2 = useLoader(THREE.TextureLoader, img2);
  const texture3 = useLoader(THREE.TextureLoader, img3);
  const texture4 = useLoader(THREE.TextureLoader, img4);

  const scroll = useScroll();

  useFrame(() =>{
    tl.current.seek(scroll.offset*tl.current.duration());


    // if (senhas.current.position.y > -2.5) {// Change 4 to the desired stopping position
    //   senhas.current.position.y -= 0.05;   // You can adjust the speed here
    //   // senhas.current.rotation.y += Math.PI*0.02;
    // }
  // console.log(scroll.offset);
  });

  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    senhas.current.rotation.y+=Math.sin(Math.PI/2+a)/200;
    bloco01.current.rotation.y+=Math.sin(Math.PI/2+a)/200;
    bloco02.current.rotation.y+=Math.sin(Math.PI/2+a)/200;
    bloco03.current.rotation.y+=Math.sin(Math.PI/2+a)/200;
    if(scroll.offset<1){
      ref.current.position.y+=Math.sin(3*a)/15;
    }
    

    
    
  }
  );


  useLayoutEffect(() => {
    tl.current = gsap.timeline();


    tl.current.to(
      ref.current.position,
      {
          duration:1, 
          y: -FLOOR_HEIGHT, 
          x: -3,
      },
      0
  );
    tl.current.to(
      displayRef.current.position,
      {
          duration:1, 
          y: FLOOR_HEIGHT+1.8, 
          x: 0,
      },
      0
  );
    tl.current.to(
      displayRef.current.rotation,
      {
          duration:1, 
          y: Math.PI/2,
      },
      0
  );
    tl.current.to(
      displayRef.current.scale,
      {
          duration:1, 
          x:1,
          y:1,
      },
      0
  );
  



  // tl.current.to(
  //     ref.current.rotation,
  //     {
  //         duration:1, 
  //         y: -Math.PI/12, 
  //     },
  //     0
  // );
  // tl.current.to(
  //     bloco02.current.rotation,
  //     {
  //         duration:1, 
  //         y: Math.PI/6, 
  //     },
  //     0
  // );

  tl.current.to(
    ref.current.position,
    {
        duration:1, 
        y: -2*FLOOR_HEIGHT, 
        x: -3,
    },
    1
);


  tl.current.to(
      displayRef.current.position,
      {
          duration:1, 
          y: 4.33, 
          x: 0.175,
      },
      1
  );
  tl.current.to(
      displayRef.current.rotation,
      {
          duration:1, 
          y: Math.PI*.204, 
      },
      1
  );
  tl.current.to(
      displayRef.current.scale,
      {
          x:.1,
          y:.1,
      },
      1
  );
   // position={[0.175,4.33,0]} rotation={[0,Math.PI/2,0]} rotation-z={Math.PI/2} rotation-x={-Math.PI/2} rotation-y={Math.PI*.204} scale={.1} ref={displayRef}>  

  // tl.current.to(
  //   ref.current.rotation,
  //   {
  //       duration:1, 
  //       y: Math.PI/12, 
  //   },
  //   1
  // );
  // tl.current.to(
  //   bloco03.current.rotation,
  //   {
  //       duration:1, 
  //       y: -Math.PI/10, 
  //   },
  //   1
  // );
  tl.current.to(
    ref.current.position,
    {
        duration:1, 
        y: -FLOOR_HEIGHT* 3, 
        x: -4.5,
    },
    2
);

tl.current.to(
  ref.current.position,
  {
      duration:1, 
      y: -FLOOR_HEIGHT* 4, 
      x: -6,
  },
  3
);
tl.current.to(
ref.current.rotation,
{
    duration:1, 
    y: -Math.PI/12, 
},
3
);
  // tl.current.to(
  //   bloco04.current.rotation,
  //   {
  //       duration:1, 
  //       y: Math.PI/6, 
  //   },
  //   2
  // );

  }, []);


  return (
    <>
    <group {...props} dispose={null} ref={ref} position={[0,0,0]}>
        <group ref={senhas}  position={[-4,-2,0]}>
          <mesh geometry={nodes.Cube.geometry} material={materials['Material.002']} position={[0, 1.286, 0]} castShadow  />
          <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[1.021, 2.388, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 1, 0.644]} castShadow />
          <mesh geometry={nodes.Plane001.geometry} material={materials['Material.001']} position={[1.188, 0, 0]} castShadow receiveShadow/>
          <mesh
          position={[0.175,4.33,0]} rotation={[0,Math.PI/2,0]} rotation-z={Math.PI/2} rotation-x={-Math.PI/2} rotation-y={Math.PI*.204} scale={.1} ref={displayRef}>  
            <planeGeometry args={[9.3, 14]}/>
            <meshBasicMaterial attach="material" map={texturedisplay} toneMapped={false}/>
      </mesh>
        </group>

    <group
      position={[0, 2*FLOOR_HEIGHT,0]}
      rotation={[0, Math.PI/2, 0]}
      ref={bloco01}
    >
      <mesh castShadow>  
        <boxGeometry args={[2.9, 5.1, 0.25]} />
        <meshBasicMaterial color='#445577' />
      </mesh>
      <mesh
      position={[0,0,0.126]}>  
        <planeGeometry args={[2.8, 5]} />
        <meshBasicMaterial attach="material" map={texture1} toneMapped={false}/>
      </mesh>
    </group>

    <group
      position={[0, 3*FLOOR_HEIGHT, 0]} 
      rotation={[0, Math.PI/2, 0]} 
      ref={bloco02}
    > 
      <mesh castShadow>  
        <boxGeometry args={[5.1, 2.9, 0.25]} />
        <meshBasicMaterial color='#445577' />
      </mesh>
      <mesh
      position={[0,0,0.126]}>  
        <planeGeometry args={[5, 2.8]} />
        <meshBasicMaterial attach="material" map={texture2} toneMapped={false}/>
    </mesh>
    </group>

    <group
      position={[0 , 4*FLOOR_HEIGHT, 0]} 
      rotation={[0, Math.PI/2, 0]}
      ref={bloco03}
    >
      <mesh castShadow>  
      <boxGeometry args={[5.1, 2.9, 0.25]} />
      <meshBasicMaterial color='#445577' />
      </mesh>
      <mesh
      position={[0,0,0.126]}>  
        <planeGeometry args={[5, 2.8]} />
        <meshBasicMaterial attach="material" map={texture3} toneMapped={false}/>
    </mesh>
    </group>

{/* //IPAD
    <group
    position={[0, 4*FLOOR_HEIGHT, 0]} 
    rotation={[0, -Math.PI / 12, 0]}
    ref={bloco04}
    >
      <mesh>  
      <boxGeometry args={[3.1, 2.35,  0.05]} />
      <meshBasicMaterial color='#333333' />
    </mesh>
    <mesh
    position={[0,0,0.051]}>  
      <planeGeometry args={[3, 2.25]} />
      <meshBasicMaterial attach="material" map={texture4} toneMapped={false}/>
    </mesh>
    </group> */}
    
    </group>
    {/* <mesh position={[-8,25,0]} receiveShadow rotation={[0,Math.PI/2,0]}>
    <planeGeometry args={[100, 150]}/>
    <meshStandardMaterial color='#FFaa77'/>
    </mesh> */}
    </>
    
    
    
  )
}

useGLTF.preload('./Senhas.glb')