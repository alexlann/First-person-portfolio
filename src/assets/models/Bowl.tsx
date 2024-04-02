import { useGLTF } from '@react-three/drei'

export function Bowl(props: any) {
  const { nodes, materials } = useGLTF('https://gdmgent-2223-xr.github.io/fpp-alexlann/bowl.gltf')
  return (
    <group {...props} dispose={null} position={[1.32, 1, 6.5]} scale={0.6}>
      <group scale={0.93}>
        <mesh geometry={(nodes.Mesh_bowlBroth as THREE.Mesh).geometry} material={materials._defaultMat} />
        <mesh geometry={(nodes.Mesh_bowlBroth_1 as THREE.Mesh).geometry} material={materials.purple} />
        <mesh geometry={(nodes.Mesh_bowlBroth_2 as THREE.Mesh).geometry} material={materials.brown} />
        <mesh geometry={(nodes.Mesh_bowlBroth_3 as THREE.Mesh).geometry} material={materials.green} />
        <mesh geometry={(nodes.Mesh_bowlBroth_4 as THREE.Mesh).geometry} material={materials.brownLight} />
        <group position={[0.14, 0.16, -0.1]} rotation={[0, Math.PI / 3, 0]} scale={1.08}>
          <mesh geometry={(nodes.Mesh_Group_495 as THREE.Mesh).geometry} material={materials._defaultMat} />
          <mesh geometry={(nodes.Mesh_Group_495_1 as THREE.Mesh).geometry} material={materials.yellow} />
        </group>
        <group position={[0.16, 0.16, 0.07]} scale={1.08}>
          <mesh geometry={(nodes.Mesh_Group_495 as THREE.Mesh).geometry} material={materials._defaultMat} />
          <mesh geometry={(nodes.Mesh_Group_495_1 as THREE.Mesh).geometry} material={materials.yellow} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bowl.gltf')
