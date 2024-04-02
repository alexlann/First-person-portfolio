import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';

export function Coin(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('https://gdmgent-2223-xr.github.io/fpp-alexlann/coin.glb')

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // return when animation didn't start
    if (!props.startAnimation) return;

    // play animation
    const coinAnimation = actions["coinAction.001"]!;
    coinAnimation.loop = THREE.LoopOnce;
    coinAnimation.play();
    
  }, [props.startAnimation, actions, animations]);

  return (
    <>
      <group ref={group} {...props} dispose={null} position={props.position} scale={1.3}>
        <group name="Scene">
          <group name="coin" rotation={[Math.PI, -0.48, 0]} scale={0.98}>
            <mesh name="Cylinder" geometry={(nodes.Cylinder as THREE.Mesh).geometry} material={materials.gold} />
            <mesh name="Cylinder_1" geometry={(nodes.Cylinder_1 as THREE.Mesh).geometry} material={materials.silver} />
            <mesh name="2_bottom" geometry={(nodes['2_bottom'] as THREE.Mesh).geometry} material={materials.gold} scale={[-0.05, -0.17, -0.04]} />
            <mesh name="2_top" geometry={(nodes['2_top'] as THREE.Mesh).geometry} material={materials.gold} rotation={[-Math.PI, 0, 0]} scale={[0.05, 0.17, 0.04]} />
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/coin.glb')
