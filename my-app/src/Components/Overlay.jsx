import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import '../styles/App.css' 


const Section = (props) => {
  return (
    <section itemID="sectionElement"
      className={`h-screen flex flex-col justify-top p-3 ${
        props.right ? "items-end" : "items-start"
      }`}
      
    >
      <div itemID="firstDiv"  className="w-2/3 flex items-start justify-center">
        <div itemID="secondDiv" className="max-w-sm w-full">
          <div itemID="thirdDiv" className="bg-white  rounded-lg px-2 py-2" style={{'backgroundColor':`rgba(255,255,255,${props.opacity})`,'color':`rgba(0,0,0,${props.opacity*2})`}}>
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Indicator = (propsindicator) => {
  return (
    <div className="w-screen" style={{'opacity':`${propsindicator}` }}>
        <div>
        <div>asasasas</div>
        <div>22222222</div>
        <div>3333333</div>
        <div>44444444</div>
        <img src="./src/ctv.png" alt=""/>
      </div>
    </div>
  );
};

const maxOpacity = 0.7;

export const Overlay = (propsol) => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);
  const [opacityFifthSection, setOpacityFifthSection] = useState(1);
  // console.log(scroll.offset);

  // console.log('curve: '+scroll.curve(1/3,0,1/3));

  useFrame(() => {
    
    setOpacityFirstSection(maxOpacity*(1));
    // setOpacitySecondSection(maxOpacity*(scroll.curve(1/3,0,1/3)**2));
    setOpacitySecondSection(maxOpacity*(scroll.offset/(1/propsol.pages)));
    setOpacityThirdSection(maxOpacity*(scroll.offset/(2/propsol.pages)));
    setOpacityFourthSection(maxOpacity*(scroll.offset/(3/propsol.pages)));
    setOpacityFifthSection(maxOpacity*(scroll.offset/(4/propsol.pages)));
    // console.log(scroll.offset/(2/5));

  });

  return (
    <Scroll html>
        {/* <Indicator opacity={opacityFirstSection} /> */}
        <div className="w-screen">

        
        <Section opacity={opacityFirstSection}>
          <details open>
	          <summary className="font-bold text-2xl  p-3 m-0">Dispensador de senhas</summary>
	          
            <ul className="p-2 m-0">
              <li>Ecrã touch 600x1024</li>
              <li>Impressora térmica</li>
              <li>Sistema Linux</li>
              <li>Interface web (HTML5)</li>
              <li>Personalizável com marca do cliente </li>
            </ul>
            </details>
        
          
          
          
        </Section>
        <Section right 
        opacity={opacitySecondSection} 
        >
        <details open>
            <summary className="font-bold text-2xl  p-3 m-0">
            Menu       </summary>
            <p className="p-2 m-0">Menu HTML. Escolha uma opção para simular uma chamada de senha.

</p>
        </details>
        
          
          
        </Section>
        <Section  
        opacity={opacityThirdSection} 
        >
        <details open>
            <summary className="font-bold text-2xl  p-3 m-0">
            Montra Digital vertical
       </summary>
            <p className="p-2 m-0">Montra Digital, no formato Vertical, com playlist de Campanhas </p>
        </details>
        
          
          
        </Section>
        <Section right opacity={opacityFourthSection}>
        <details open>
            <summary className="font-bold text-2xl  p-3 m-0">
            Montra Digital horizontal
       </summary>
            <p className="p-2 m-0">Montra Digital, no formato Horizontal, com playlist de Campanhas</p>
          </details>
          
        </Section>

        <Section  opacity={opacityFifthSection}>
        <details open>
            <summary className="font-bold text-2xl  p-3 m-0">
            TV Corporativa
       </summary>
            <p className="p-2 m-0">TV Corporativa com Gestão de Atendimento e playlist de Campanhas e Conteúdos Institucionais

</p>
            
          </details>
        </Section>
        </div>
    </Scroll>
  );
};