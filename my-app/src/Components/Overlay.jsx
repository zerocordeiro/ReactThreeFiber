import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section itemID="sectionElement"
      className={`h-screen flex flex-col justify-center p-3 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div itemID="firstDiv"  className="w-1/2 flex items-center justify-center">
        <div itemID="secondDiv" className="max-w-sm w-full">
          <div itemID="thirdDiv" className="bg-white  rounded-lg px-2 py-2">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0  , 1 / 8));
    setOpacitySecondSection(scroll.curve(1 / 8, 2 / 8));
    setOpacityThirdSection(scroll.curve(1 / 4, 3 / 4));
    setOpacityLastSection(scroll.range(3 / 4, 1 / 4));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <details>
	          <summary className="font-bold text-2x1  p-3 m-0 transition: 150">DISPENSADOR</summary>
	          <p className="text-gray-500 text-2x1  p-3 m-0">Lorem ipsum </p>
            </details>
          
          
          
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Parabens acabas de ganhar um ReactThreeFiber website 
          </h1>
          <p className="text-gray-500">PS: I never test</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityThirdSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call me maybe?
          </h1>
          <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+42) 4242-4242-424242">(+42) 4242-4242-424242</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};