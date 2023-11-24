import { useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import {OrthographicCamera } from "@react-three/drei";

function App() {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [largeCurosr, setLargeCursor] = useState(false);
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  });
  return (
    <>
      {/* <Content /> */}
      <div className="absolute h-[50px] w-[50px] border-2 border-black rounded-full top-0 left-0 z-50 pointer-events-auto transition-all duration-75 " style={{transform:`translate(${position.x}px,${position.y}px)`}}></div>
      <div className="h-[100vh] fixed bg-gray-300 w-full top-0 left-0">
        <Canvas shadows>
          <OrthographicCamera
            near={-10}
            far={1000}
            zoom={100}
            makeDefault
            castShadow
          />
          <Scene />
        </Canvas>
      </div>
    </>
  );
}

export default App;
