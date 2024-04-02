import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Bell(props: any) {
  const { nodes, materials } = useGLTF('https://gdmgent-2223-xr.github.io/fpp-alexlann/bell.glb')
  return (
    <group {...props} dispose={null} position={[0.8, 1, 6.5]} scale={0.6}>
      <mesh geometry={(nodes.Bell as THREE.Mesh).geometry} material={materials.gold} position={[0, 0.15, 0]} scale={0.35} />
      <mesh geometry={(nodes.Holder as THREE.Mesh).geometry} material={materials['dark wood']} position={[0, 0.15, 0]} scale={0.35} />
      <mesh geometry={(nodes.Stick as THREE.Mesh).geometry} material={materials.gold} position={[0, 0.14, 0]} scale={[0.2, 0.06, 0.2]} />
      <mesh geometry={(nodes.Button as THREE.Mesh).geometry} material={materials.gold} position={[0, 0.16, 0]} scale={0.25} />
    </group>
  )
}

useGLTF.preload('/bell.glb')
