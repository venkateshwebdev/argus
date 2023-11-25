import React, { useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  useScroll,
  Wireframe,
} from "@react-three/drei";
import { act, useFrame, useThree } from "@react-three/fiber";

export function ButterFly(props) {
  const scroll = useScroll();
  const { camera } = useThree();
  const [animation, setAnimation] = useState(false);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/stylized_flying_bee_bird_rigged.glb"
  );
  const { actions } = useAnimations(animations, group);
  useFrame(({clock}) => {
    group.current.position.y=-window.innerHeight * scroll.offset *0.04
    if (scroll.offset > 0 && scroll.offset < 0.1) {
      setAnimation(false);
      group.current.rotation.x =
        ((scroll.offset - 0) / (0.1 - 0)) * (0 - Math.PI / 2) + Math.PI / 2;
      group.current.rotation.y = 0;
      group.current.position.x = 0;
    }
    if (scroll.offset > 0.1 && scroll.offset < 0.2) {
      setAnimation("hover_skeletal.1");
    }
    if (scroll.offset > 0.2 && scroll.offset < 0.3) {
      group.current.rotation.y =
        ((scroll.offset - 0.2) / (0.3 - 0.2)) * (-Math.PI / 2 - 0) + 0;
    }
    if (scroll.offset > 0.3 && scroll.offset < 0.4) {
      group.current.position.x =
        ((scroll.offset - 0.3) / (0.4 - 0.3)) * (Math.PI / 2 - 0) + 0;
    }
    if (scroll.offset > 0.4 && scroll.offset < 0.5) {
      group.current.rotation.y =
        ((scroll.offset - 0.4) / (0.5 - 0.4)) * (Math.PI / 2 - -Math.PI / 2) +
        -Math.PI / 2;
      group.current.position.x =
        ((scroll.offset - 0.4) / (0.5 - 0.4)) * (-3 - 3) + 3;
    }
    if (scroll.offset > 0.5 && scroll.offset < 0.6) {
      group.current.rotation.y =
        ((scroll.offset - 0.5) / (0.6 - 0.5)) * (-Math.PI / 2 - Math.PI / 2) +
        Math.PI / 2;
      group.current.position.x =
        ((scroll.offset - 0.5) / (0.6 - 0.5)) * (3 - -3) + -3;
    }
    if (scroll.offset > 0.6 && scroll.offset < 0.7) {
      group.current.rotation.y =
        ((scroll.offset - 0.6) / (0.7 - 0.6)) * (Math.PI / 2 - -Math.PI / 2) +
        -Math.PI / 2;
      group.current.position.x =
        ((scroll.offset - 0.6) / (0.7 - 0.6)) * (-3 - 3) + 3;
    }
    if (scroll.offset > 0.8 && scroll.offset < 0.9) {
      group.current.rotation.y =
        ((scroll.offset - 0.8) / (0.9 - 0.8)) * (-Math.PI / 2 - Math.PI / 2) +
        Math.PI / 2;
      group.current.position.x =
        ((scroll.offset - 0.8) / (0.9 - 0.8)) * (3 - -3) + -3;
    }
  });
  useEffect(() => {
    animation && actions[animation].fadeIn().play();
    return () => animation && actions[animation].fadeOut().stop();
  }, [animation]);
  return (
    <>
      <directionalLight position={[5, 0, 5]} color={"red"} intensity={2} />
      <directionalLight position={[5, 0, 5]} color={"blue"} intensity={2} />
      <group ref={group} {...props} dispose={null} scale={0.025} rotation={[Math.PI / 2, 0, 0]}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="skeletal1_108" scale={0.05}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials["Material_0.001"]}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group name="bee110_107" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}
useGLTF.preload("/stylized_flying_bee_bird_rigged.glb");
// useGLTF.preload("/animated_flying_fluttering_butterfly_loop.glb");

// import React, { useRef } from "react";
// import { useGLTF, useAnimations } from "@react-three/drei";

// export function Model(props) {
//   const group = useRef();
//   const { nodes, materials, animations } = useGLTF(
//     "/stylized_flying_bee_bird_rigged.glb"
//   );
//   const { actions } = useAnimations(animations, group);
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group name="Sketchfab_Scene">
//         <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//           <group name="root">
//             <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
//               <group name="skeletal1_108" scale={0.03}>
//                 <group name="GLTF_created_0">
//                   <primitive object={nodes.GLTF_created_0_rootJoint} />
//                   <skinnedMesh
//                     name="Object_7"
//                     geometry={nodes.Object_7.geometry}
//                     material={materials["Material_0.001"]}
//                     skeleton={nodes.Object_7.skeleton}
//                   />
//                   <group name="bee110_107" />
//                 </group>
//               </group>
//             </group>
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("/stylized_flying_bee_bird_rigged.glb");
