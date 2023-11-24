import {
  CameraControls,
  Center,
  ContactShadows,
  Html,
  OrbitControls,
  OrthographicCamera,
  PresentationControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Lucy } from "./Lucy";
import { ButterFly } from "./Butterfly";
import Content from "./Content";
const Scene = () => {
  return (
    <>
      <ContactShadows />
      <ambientLight intensity={1} />
      <ScrollControls
        maxSpeed={2}
        damping={0.5}
        pages={5}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Scroll>
          <ButterFly />
        </Scroll>
        <Scroll>
          <Scroll html children>
            <div
              className="w-screen min-h-screen text-transparent text-[160px] max-md:text-[120px] flex items-center justify-center font-bold flex-wrap"
              style={{ WebkitTextStroke: "2px black" }}
            >
              <span className="text-black">A</span>RGU
              <span className="text-black">S</span>
            </div>
            <div className=" w-screen h-screen plant object-contain text-3xl  flex items-center  justify-end font-bold">
            <div className="w-[30%] max-md:w-full pr-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </div>
            </div>
            <div className=" w-screen h-screen flex flex-col gap-5 items-start justify-center p-16">
            <p className="text-[160px] text-transparent font-bold ran" style={{WebkitTextStroke:"2px black"}}>&apos;01</p>                <h1 className="text-2xl font-bold">Lorem Ipsum Doloe sit , amet</h1>
              <p className="w-1/2 max-md:w-full">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                iste impedit maxime ex aperiam modi suscipit velit laboriosam
                vel officiis dolorum, vero architecto. Temporibus quibusdam
                tenetur perspiciatis, quo placeat voluptates?
              </p>{" "}
            </div>
            <div className=" w-screen h-screen flex flex-col gap-5 items-end justify-center p-16">
            <p className="text-[160px] text-transparent font-bold" style={{WebkitTextStroke:"2px black"}}>&apos;02</p> 
            <h1 className="text-2xl font-bold">Lorem Ipsum Doloe sit , amet</h1>
                         <p className="w-1/2 max-md:w-full">
                {" "}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                iste impedit maxime ex aperiam modi suscipit velit laboriosam
                vel officiis dolorum, vero architecto. Temporibus quibusdam
                tenetur perspiciatis, quo placeat voluptates?
              </p>{" "}
            </div>
            <div className=" w-screen h-screen flex flex-col gap-5 items-start justify-center p-16">
            <p className="text-[160px] text-transparent font-bold" style={{WebkitTextStroke:"2px black"}}>&apos;03</p>
            <h1 className="text-2xl font-bold">Lorem Ipsum Doloe sit , amet</h1>
              <p className="w-1/2 max-md:w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                iste impedit maxime ex aperiam modi suscipit velit laboriosam
                vel officiis dolorum, vero architecto. Temporibus quibusdam
                tenetur perspiciatis, quo placeat voluptates?
              </p>
            </div>
          </Scroll>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
