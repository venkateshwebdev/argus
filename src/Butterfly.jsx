import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll, Wireframe } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function ButterFly(props) {
  const scroll = useScroll();
  console.log(scroll.offset);
  const { camera } = useThree();
  const [animation, setAnimation] = useState(false);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/animated_flying_fluttering_butterfly_loop.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    group.current.position.y = scroll.offset*-30;
    if (scroll.offset > 0 && scroll.offset < 0.1) {
      setAnimation(false);
      group.current.rotation.x =
        ((scroll.offset - 0) / (0.1 - 0)) * (0 - Math.PI / 2) + Math.PI / 2;
      group.current.rotation.y = 0;
      group.current.position.x = 0;
    }
    if (scroll.offset > 0.1 && scroll.offset < 0.2) {
      setAnimation("take_off_and_land");
    }
    if (scroll.offset > 0.2 && scroll.offset < 0.3) {
      setAnimation("take_off_and_land");
      group.current.rotation.y = ((scroll.offset-0.2)/(0.3-0.2)*(-Math.PI/2-0)+0)
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
      <group
        ref={group}
        {...props}
        dispose={null}
        scale={25}
        rotation={[Math.PI / 2, 0, 0]}
        
      >
        <group name="Sketchfab_Scene" >
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} >
            <group name="root" >
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]} >
                <group name="RootNode0_159" scale={0.01}>
                  <group name="skeletal3_158" >
                    <group name="GLTF_created_0" >
                      <primitive object={nodes.GLTF_created_0_rootJoint}  />
                      <skinnedMesh
                      
                        name="Object_8"
                        geometry={nodes.Object_8.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_8.skeleton}
                      />
                      <group name="butterfly2_157" />
                    </group>
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

useGLTF.preload("/animated_flying_fluttering_butterfly_loop.glb");

