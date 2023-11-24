import { useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls, OrthographicCamera, Sky } from "@react-three/drei";
import Content from "./Content";

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
