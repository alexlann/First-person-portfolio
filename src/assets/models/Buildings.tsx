import { useGLTF } from '@react-three/drei'

export function Buildings(props: any) {
  const { nodes, materials } = useGLTF('https://gdmgent-2223-xr.github.io/fpp-alexlann/buildings.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.62, 2.5, 0]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube_1 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <group position={[-1.45, 3.61, 2.16]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube030 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube030_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-1.1, 1.01, 1.4]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube005 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube005_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube005_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-0.12, 1.01, 1.45]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube007 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube007_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube007_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[-1.91, 1.13, 1.7]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube027 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube027_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.カラオケ as THREE.Mesh).geometry} material={materials['cloth black']} position={[-2.05, 1.58, 1.71]} rotation={[Math.PI / 2, 0, 0]} scale={0.46} />
      <mesh geometry={(nodes.カラオケ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[0.53, 1.58, 1.71]} rotation={[Math.PI / 2, 0, 0]} scale={0.46} />
      <mesh geometry={(nodes.b1_roof as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[-2.53, 5.39, 2.27]} rotation={[0.44, 0, 0]} scale={0.9} />
      <mesh geometry={(nodes.b1_roofCover as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[-3.11, 6.14, 0.03]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.88, 1.01, 0.88]} />
      <group position={[1.88, 0.08, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.59, 0.3, 0.09]}>
        <mesh geometry={(nodes.Cube001_1 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube001_2 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube001_3 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.stairs_railing as THREE.Mesh).geometry} material={materials['metal gray']} position={[2.29, 2.76, -0.55]} rotation={[-0.96, -0.37, 0]} scale={[0.6, 1.65, 0.6]} />
      <mesh geometry={(nodes.Concrete002 as THREE.Mesh).geometry} material={materials['concrete.002']} position={[4.08, 2.3, -2.26]} rotation={[Math.PI, -0.01, Math.PI]} scale={[1.24, 1, 3.06]} />
      <mesh geometry={(nodes.Feet002 as THREE.Mesh).geometry} material={materials['feet.002']} position={[3.66, 2.36, -2.24]} rotation={[Math.PI, -0.01, Math.PI]} />
      <mesh geometry={(nodes.Flap002 as THREE.Mesh).geometry} material={materials['flap.002']} position={[3.61, 2.91, -2.78]} rotation={[1.58, 0.28, -1.59]} />
      <mesh geometry={(nodes.Glass002 as THREE.Mesh).geometry} material={materials['glass.002']} position={[3.61, 3.84, -2.79]} rotation={[-Math.PI / 2, 0, -1.56]} />
      <mesh geometry={(nodes.Vending_machine002 as THREE.Mesh).geometry} material={materials['vendingmachine.002']} position={[4.08, 3.4, -2.73]} rotation={[Math.PI, -0.01, Math.PI]} scale={[1, 0.92, 1]} />
      <mesh geometry={(nodes.Concrete001 as THREE.Mesh).geometry} material={materials['concrete.001']} position={[-2.04, 2.28, -3.19]} scale={[1.24, 1, 3.06]} />
      <mesh geometry={(nodes.Feet001 as THREE.Mesh).geometry} material={materials['feet.001']} position={[-1.61, 2.34, -3.21]} />
      <mesh geometry={(nodes.Flap001 as THREE.Mesh).geometry} material={materials['flap.001']} position={[-1.57, 2.89, -2.67]} rotation={[Math.PI / 2, -0.28, Math.PI / 2]} />
      <mesh geometry={(nodes.Glass001 as THREE.Mesh).geometry} material={materials['glass.001']} position={[-1.57, 3.82, -2.66]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.Vending_machine001 as THREE.Mesh).geometry} material={materials['vendingmachine.001']} position={[-2.04, 3.38, -2.73]} scale={[1, 0.92, 1]} />
      <group position={[4.38, 2.63, 0.52]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube002 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube002_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube002_2 as THREE.Mesh).geometry} material={materials['metal blue']} />
      </group>
      <group position={[3.33, 1.01, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube009 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube009_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube009_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[4.56, 1, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube006 as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} />
        <mesh geometry={(nodes.Cube006_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} position={[3.34, 2.09, 2.09]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain as THREE.Mesh).geometry} material={materials['cloth white']} position={[3.11, 2.09, 2.09]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.95, 0.026, 0.95]} />
      <mesh geometry={(nodes.b2_backplanks_L as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} position={[4.08, 2.31, 2.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_backplanks_R as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.81, 2.31, 2.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_planks_L as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.58, 1.25, 2.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_planks_R as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[3.85, 1.25, 2.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_stuts as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[6.26, 2.63, 2.27]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_bar_F as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.5, 2.63, 3.1]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_bar_B as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.5, 2.93, 2.12]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_overhangBars as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.46, 2.91, 2.35]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_overhang as THREE.Mesh).geometry} material={materials['metal blue']} position={[5.36, 2.74, 3.14]} rotation={[0.24, 0, 0]} />
      <mesh geometry={(nodes.b2_gutter as THREE.Mesh).geometry} material={materials['metal gray']} position={[4.37, 2.65, 3.23]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.アレクサンダ as THREE.Mesh).geometry} material={materials['cloth black']} position={[2.94, 1.97, 2.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.09} />
      <mesh geometry={(nodes.ー_vertical as THREE.Mesh).geometry} material={materials['cloth black']} position={[2.95, 1.69, 2.13]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={0.09} />
      <mesh geometry={(nodes.ラニュオア as THREE.Mesh).geometry} material={materials['cloth black']} position={[3.68, 1.95, 2.13]} rotation={[Math.PI / 2, 0, 0]} scale={0.11} />
      <group position={[5.63, 4.37, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube010 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube010_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[3.15, 4.4, 2.19]} scale={[1, 1, 0.48]}>
        <mesh geometry={(nodes.Cube033 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube033_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <mesh geometry={(nodes.b2_roof as THREE.Mesh).geometry} material={materials['metal blue']} position={[5.38, 6.21, 2.99]} rotation={[0.44, 0, 0]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover as THREE.Mesh).geometry} material={materials['metal blue']} position={[1.8, 6.59, 0.04]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[2.55, 6.17, 2.64]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1, 0.39, 1]} />
      <group position={[-4.61, 2.63, 0.52]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube164 as THREE.Mesh).geometry} castShadow material={materials['wall orange']} />
        <mesh geometry={(nodes.Cube164_1 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
      </group>
      <group position={[-3.61, 1.01, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube165 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube165_1 as THREE.Mesh).geometry} material={materials['metal gold']} />
        <mesh geometry={(nodes.Cube165_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-5.7, 1, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube166 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube166_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar002 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-3.6, 2.09, 2.09]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain002 as THREE.Mesh).geometry} material={materials['cloth orange']} position={[-3.82, 2.09, 2.09]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.95, 0.027, 0.95]} />
      <mesh geometry={(nodes.b2_backplanks_L002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-6.18, 2.31, 2.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_backplanks_R002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-2.82, 2.31, 2.07]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_planks_L002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-3.04, 1.25, 2.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_planks_R002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-6.42, 1.25, 2.05]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_stuts002 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.73, 2.63, 2.27]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_bar_F002 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-6.49, 2.63, 3.1]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_bar_B002 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-6.49, 2.93, 2.12]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_overhangBars002 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-6.53, 2.91, 2.35]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={(nodes.b2_overhang002 as THREE.Mesh).geometry} material={materials['metal red']} position={[-3.63, 2.74, 3.14]} rotation={[0.24, 0, 0]} />
      <mesh geometry={(nodes.b2_gutter002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-4.62, 2.65, 3.23]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-2.71, 0.96, 2.25]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.ん002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-3.39, 1.69, 2.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.58} />
      <mesh geometry={(nodes.う001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-4.13, 1.7, 2.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.58} />
      <mesh geometry={(nodes.ど as THREE.Mesh).geometry} material={materials['cloth black']} position={[-3.77, 1.68, 2.12]} rotation={[Math.PI / 2, 0, 0]} scale={0.58} />
      <group position={[-5.52, 4.44, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube178 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube178_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_roofCover002 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-7.16, 6.67, 0.04]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.88, 1.02, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-6.44, 6.14, 2.64]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[1, 0.39, 1]} />
      <mesh geometry={(nodes.b1_roof002 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-6.52, 6.27, 2.78]} rotation={[0.23, 0, 0]} scale={0.9} />
      <group position={[8.9, 2.97, -0.76]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube003 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube003_1 as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} />
        <mesh geometry={(nodes.Cube003_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube003_3 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
      </group>
      <group position={[7.21, 1.01, 0.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube022 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube022_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube022_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[8.4, 0.69, 2.1]} rotation={[Math.PI, 0, Math.PI]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder003 as THREE.Mesh).geometry} material={materials['cloth red']} />
        <mesh geometry={(nodes.Cylinder003_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[8.4, 0.69, 2.1]} rotation={[-0.1, 0.01, -0.12]} scale={1.52} />
      <group position={[10.69, 0.69, 2.32]} rotation={[Math.PI, 0, Math.PI]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder188 as THREE.Mesh).geometry} material={materials['cloth red']} />
        <mesh geometry={(nodes.Cylinder188_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs007 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[10.69, 0.69, 2.32]} rotation={[-0.1, 0.01, -0.12]} scale={1.52} />
      <group position={[10.07, 0.69, 2.59]} rotation={[Math.PI, 0, Math.PI]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder190 as THREE.Mesh).geometry} material={materials['cloth red']} />
        <mesh geometry={(nodes.Cylinder190_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs008 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[10.07, 0.69, 2.59]} rotation={[-0.1, 0.01, -0.12]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang as THREE.Mesh).geometry} material={materials['cloth white']} position={[8.87, 2.81, 2.64]} rotation={[-2.77, 0, -Math.PI]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B as THREE.Mesh).geometry} material={materials['metal gray']} position={[8.88, 2.98, 2.04]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F as THREE.Mesh).geometry} material={materials['metal gray']} position={[8.88, 2.52, 3.23]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves as THREE.Mesh).geometry} material={materials['cloth white']} position={[6.57, 2.52, 3.29]} rotation={[Math.PI / 2, 0, 0]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain as THREE.Mesh).geometry} material={materials['cloth light blue']} position={[6.74, 1.93, 3.26]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.メ as THREE.Mesh).geometry} material={materials['cloth white']} position={[8.16, 1.55, 3.28]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.ラ as THREE.Mesh).geometry} material={materials['cloth white']} position={[6.42, 1.55, 3.28]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.ン as THREE.Mesh).geometry} material={materials['cloth white']} position={[9.01, 1.55, 3.28]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.ー as THREE.Mesh).geometry} material={materials['cloth white']} position={[7.3, 1.55, 3.28]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.拉麺 as THREE.Mesh).geometry} material={materials['cloth white']} position={[10.88, 1.85, 3.27]} rotation={[Math.PI / 2, 0, 0]} scale={0.41} />
      <group position={[7.27, 3.44, 2.02]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube029 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube029_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[6.51, 5.49, 2.27]} rotation={[0.26, 0, 0]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[5.83, 6.14, -0.73]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.88, 1.24, 0.88]} />
      <group position={[-12.04, 2.5, 2.4]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube026 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube026_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
      </group>
      <group position={[-9.76, 3.53, 1.14]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1, 1, 0.48]}>
        <mesh geometry={(nodes.Cube190 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube190_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <group position={[-9.88, 3.56, 2.46]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube189 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube189_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-9.68, 4.26, 1.28]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[0.62, 0.62, 0.3]}>
        <mesh geometry={(nodes.Cube137 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube137_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <group position={[-10.64, 1.01, 2.88]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube121 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube121_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube121_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-10.59, 1.01, 1.89]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube122 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube122_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube122_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[-10.33, 1.13, 3.68]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube123 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube123_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.カラオケ003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.3, 1.58, 3.82]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.46} />
      <mesh geometry={(nodes.カラオケ004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.31, 1.58, 1.24]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.46} />
      <mesh geometry={(nodes.b1_roof003 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[-9.76, 5.39, 4.3]} rotation={[1.58, 1.13, -1.58]} scale={0.9} />
      <mesh geometry={(nodes.b1_roofCover002 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[-11.99, 6.14, 4.89]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.01, 0.88]} />
      <group position={[-12.05, 0.08, -0.1]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.59, 0.3, 0.09]}>
        <mesh geometry={(nodes.Cube125 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube125_1 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube125_2 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.stairs_railing002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-12.61, 2.76, -0.5]} rotation={[-1.13, 0.56, 1.33]} scale={[0.6, 1.65, 0.6]} />
      <group position={[-11.54, 2.63, -2.6]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube126 as THREE.Mesh).geometry} castShadow material={materials['wall orange']} />
        <mesh geometry={(nodes.Cube126_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube126_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[-10.04, 1.01, -1.55]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube127 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube127_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube127_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-10.04, 1, -2.79]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube128 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube128_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.97, 2.09, -1.57]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-9.97, 2.09, -1.34]} rotation={[Math.PI / 2, 0, 0]} scale={[0.95, 0.03, 0.95]} />
      <mesh geometry={(nodes.b2_backplanks_L003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.99, 2.31, -2.31]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_backplanks_R003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.99, 2.31, -1.04]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_L003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-10.01, 1.25, -0.81]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_R003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-10.01, 1.25, -2.08]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_stuts003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.8, 2.63, -4.49]} rotation={[Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_F003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-8.95, 2.63, -0.73]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_B003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.93, 2.93, -0.72]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhangBars003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.7, 2.91, -0.69]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhang003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.92, 2.74, -3.59]} rotation={[1.59, 1.33, -1.59]} />
      <mesh geometry={(nodes.b2_gutter003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.83, 2.65, -2.6]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-9.82, 0.96, -4.51]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.アレクサンダ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.86, 2, -1.17]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.1} />
      <mesh geometry={(nodes.ー_vertical001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.94, 1.69, -1.17]} rotation={[0, 0, -Math.PI / 2]} scale={0.1} />
      <mesh geometry={(nodes.ラニュオア001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.86, 1.98, -1.9]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.13} />
      <group position={[-10.04, 4.37, -3.86]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube136 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube136_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_roof005 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-9.08, 6.21, -3.61]} rotation={[1.58, 1.13, -1.58]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-12.01, 6.59, -0.01]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.41, 6.17, -0.78]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.39, 1]} />
      <group position={[-12.85, 2.97, -7.11]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube153 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube153_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube153_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube153_3 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
      </group>
      <group position={[-12.05, 1.01, -5.43]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube154 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube154_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube154_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-9.99, 0.69, -6.63]} rotation={[0, -1.57, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder070 as THREE.Mesh).geometry} material={materials['cloth red']} />
        <mesh geometry={(nodes.Cylinder070_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.99, 0.69, -6.63]} rotation={[-1.67, 1.47, 1.55]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang002 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-9.44, 2.81, -7.11]} rotation={[-1.56, -1.2, -1.56]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-10.04, 2.98, -7.11]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.85, 2.52, -7.11]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves002 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-8.78, 2.52, -4.81]} rotation={[Math.PI / 2, 0, -1.58]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain002 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.81, 1.93, -4.97]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.メ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.75, 1.55, -6.39]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ラ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.74, 1.55, -4.66]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ン001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.75, 1.55, -7.25]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ー001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.74, 1.55, -5.53]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.拉麺001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.76, 1.85, -9.11]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.41} />
      <group position={[-10.06, 3.44, -5.5]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube157 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube157_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof002 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-9.8, 5.49, -4.74]} rotation={[1.59, 1.32, -1.59]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover002 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-12.8, 6.14, -4.04]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.24, 0.88]} />
      <group position={[-12.04, 2.5, 11.36]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube159 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube159_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <group position={[-9.88, 3.61, 12.17]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube160 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube160_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-10.64, 1.01, 11.83]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube161 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube161_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube161_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-10.59, 1.01, 10.85]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube162 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube162_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube162_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[-10.33, 1.13, 12.63]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube163 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube163_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.カラオケ005 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.3, 1.58, 12.77]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.46} />
      <mesh geometry={(nodes.カラオケ006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.31, 1.58, 10.19]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.46} />
      <mesh geometry={(nodes.b1_roof005 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-9.76, 5.39, 13.26]} rotation={[1.58, 1.13, -1.58]} scale={0.9} />
      <mesh geometry={(nodes.b1_roofCover005 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[-11.99, 6.14, 13.84]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.01, 0.88]} />
      <group position={[-12.05, 0.08, 13.86]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.59, 0.3, 0.09]}>
        <mesh geometry={(nodes.Cube175 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube175_1 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube175_2 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.stairs_railing004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-12.61, 2.76, 13.45]} rotation={[-1.13, 0.56, 1.33]} scale={[0.6, 1.65, 0.6]} />
      <group position={[-11.54, 2.63, 16.33]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube176 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube176_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube176_2 as THREE.Mesh).geometry} material={materials['metal blue']} />
      </group>
      <group position={[-10.04, 1.01, 17.37]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube180 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube180_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube180_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-10.04, 1, 16.14]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube181 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube181_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar005 as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} position={[-9.97, 2.09, 17.36]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain005 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-9.97, 2.09, 17.58]} rotation={[Math.PI / 2, 0, 0]} scale={[0.95, 0.03, 0.95]} />
      <group position={[-10.02, 4.45, 17.16]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube114 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube114_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_backplanks_L006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.99, 2.31, 16.61]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_backplanks_R006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.99, 2.31, 17.89]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_L006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-10.01, 1.25, 18.11]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_R006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-10.01, 1.25, 16.85]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_stuts006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.8, 2.63, 14.43]} rotation={[Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_F006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-8.95, 2.63, 18.2]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_B006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.93, 2.93, 18.2]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhangBars006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.7, 2.91, 18.23]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhang006 as THREE.Mesh).geometry} material={materials['metal blue']} position={[-8.92, 2.74, 15.33]} rotation={[1.59, 1.33, -1.59]} />
      <mesh geometry={(nodes.b2_gutter006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.83, 2.65, 16.32]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-9.82, 0.96, 14.41]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.アレクサンダ002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.91, 2, 17.76]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.1} />
      <mesh geometry={(nodes.ー_vertical003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.91, 1.69, 17.75]} rotation={[0, 0, -Math.PI / 2]} scale={0.1} />
      <mesh geometry={(nodes.ラニュオア002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.92, 1.98, 17.02]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.13} />
      <mesh geometry={(nodes.b2_roof006 as THREE.Mesh).geometry} material={materials['metal blue']} position={[-9.08, 6.21, 15.31]} rotation={[1.58, 1.13, -1.58]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover006 as THREE.Mesh).geometry} material={materials['metal blue']} position={[-12.01, 6.59, 18.91]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus006 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-9.41, 6.17, 18.14]} rotation={[0, 0, -Math.PI / 2]} scale={[1, 0.39, 1]} />
      <group position={[-12.85, 2.97, 6.84]} rotation={[Math.PI / 2, 0, 3.14]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube193 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
        <mesh geometry={(nodes.Cube193_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube193_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube193_3 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
      </group>
      <group position={[-12.05, 1.01, 8.52]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube194 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube194_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube194_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-9.99, 0.69, 7.32]} rotation={[0, -1.57, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder083 as THREE.Mesh).geometry} material={materials['cloth light blue']} />
        <mesh geometry={(nodes.Cylinder083_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs003 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.99, 0.69, 7.32]} rotation={[-1.67, 1.47, 1.55]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.44, 2.81, 6.85]} rotation={[-1.56, -1.2, -1.56]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-10.04, 2.98, 6.85]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.85, 2.52, 6.84]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.78, 2.52, 9.14]} rotation={[Math.PI / 2, 0, -1.58]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain003 as THREE.Mesh).geometry} material={materials['cloth light blue']} position={[-8.81, 1.93, 8.98]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.メ003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.77, 1.55, 7.56]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ラ003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.76, 1.55, 9.3]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ン003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.77, 1.55, 6.71]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.ー003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.76, 1.55, 8.42]} rotation={[Math.PI / 2, 0, -1.58]} />
      <mesh geometry={(nodes.拉麺002 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.78, 1.85, 4.84]} rotation={[Math.PI / 2, 0, -1.58]} scale={0.41} />
      <group position={[-10.06, 3.44, 8.45]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube197 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube197_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof003 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[-9.8, 5.49, 9.22]} rotation={[1.59, 1.32, -1.59]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover003 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[-12.8, 6.14, 9.91]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[0.88, 1.24, 0.88]} />
      <group position={[-11.15, 2.97, 23.54]} rotation={[Math.PI / 2, 0, 1.56]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube080 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube080_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube080_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube080_3 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
      </group>
      <group position={[-9.47, 1.01, 22.74]} rotation={[0, -1.56, 1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube081 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube081_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube081_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-11.44, 0.69, 20.25]} rotation={[0, 0.16, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder040 as THREE.Mesh).geometry} material={materials['cloth orange']} />
        <mesh geometry={(nodes.Cylinder040_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs010 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-11.44, 0.69, 20.25]} rotation={[-3.04, -0.17, 3.04]} scale={1.52} />
      <group position={[-10.64, 0.69, 19.9]} rotation={[0, 0.16, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder042 as THREE.Mesh).geometry} material={materials['cloth orange']} />
        <mesh geometry={(nodes.Cylinder042_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs011 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-10.64, 0.69, 19.9]} rotation={[-3.04, -0.17, 3.04]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang007 as THREE.Mesh).geometry} material={materials['cloth orange']} position={[-11.15, 2.81, 20.13]} rotation={[-0.37, 0.01, 0]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-11.15, 2.98, 20.74]} rotation={[-Math.PI / 2, 0, -1.56]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-11.16, 2.52, 19.54]} rotation={[-Math.PI / 2, 0, -1.56]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves007 as THREE.Mesh).geometry} material={materials['cloth orange']} position={[-8.86, 2.52, 19.47]} rotation={[Math.PI / 2, 0, 3.13]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain007 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.02, 1.93, 19.49]} rotation={[Math.PI / 2, 0, 3.13]} />
      <mesh geometry={(nodes.か001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-10.44, 1.55, 19.49]} rotation={[Math.PI / 2, 0, 3.13]} />
      <mesh geometry={(nodes.と001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.71, 1.55, 19.47]} rotation={[Math.PI / 2, 0, 3.13]} />
      <mesh geometry={(nodes.つ001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-11.3, 1.55, 19.49]} rotation={[Math.PI / 2, 0, 3.13]} />
      <mesh geometry={(nodes.ん003 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-9.58, 1.55, 19.48]} rotation={[Math.PI / 2, 0, 3.13]} />
      <mesh geometry={(nodes.魚001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-13.02, 1.61, 19.51]} rotation={[Math.PI / 2, 0, 3.13]} scale={0.86} />
      <group position={[-9.52, 3.44, 20.74]} rotation={[0, -1.56, 1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube084 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube084_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof007 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[-8.78, 5.49, 20.48]} rotation={[2.89, -0.01, 3.14]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover007 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[-8.07, 6.14, 23.48]} rotation={[-Math.PI / 2, 0, -1.56]} scale={[0.88, 1.24, 0.88]} />
      <group position={[-4.8, 2.97, 23.48]} rotation={[-Math.PI / 2, 0, 1.58]} scale={[-1.84, -2.23, -2.86]}>
        <mesh geometry={(nodes.Cube091 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube091_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube091_2 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube091_3 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
      </group>
      <group position={[-6.5, 1.01, 22.7]} rotation={[0, -1.56, -1.57]} scale={[-2.91, -0.06, -5.57]}>
        <mesh geometry={(nodes.Cube092 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube092_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube092_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-5.32, 0.69, 20.62]} rotation={[Math.PI, -0.01, 0]} scale={[-1.21, -1, -1.21]}>
        <mesh geometry={(nodes.Cylinder053 as THREE.Mesh).geometry} material={materials['cloth light blue']} />
        <mesh geometry={(nodes.Cylinder053_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs012 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-5.32, 0.69, 20.62]} rotation={[0.1, 0, 3.02]} scale={-1.52} />
      <mesh geometry={(nodes.b3_overhang008 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-5.5, 2.81, 20.07]} rotation={[2.77, -0.01, 0]} scale={[0.93, 0.28, 0.9]} />
      <mesh geometry={(nodes.b3_bar_B008 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-4.84, 2.98, 20.67]} rotation={[Math.PI / 2, 0, -1.58]} scale={[-1, -2.76, -1]} />
      <mesh geometry={(nodes.b3_bar_F008 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-4.85, 2.52, 19.48]} rotation={[Math.PI / 2, 0, -1.58]} scale={[-1, -2.76, -1]} />
      <mesh geometry={(nodes.b3_overhangWaves008 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-8.48, 2.52, 19.45]} rotation={[-Math.PI / 2, 0, -3.13]} scale={[-0.45, -0.04, -0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain008 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-8.26, 1.93, 19.49]} rotation={[-Math.PI / 2, 0, -3.13]} scale={-1} />
      <mesh geometry={(nodes.メ006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-4.29, 1.55, 19.43]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ラ006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-2.44, 1.55, 19.41]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ン006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-5.21, 1.55, 19.43]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ー006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-3.36, 1.55, 19.42]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.き001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-7.06, 1.55, 19.44]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.鳥001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-7.98, 1.55, 19.45]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.焼001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-6.13, 1.55, 19.44]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.Concrete003 as THREE.Mesh).geometry} material={materials.concrete} position={[-8.15, 0.06, 22.08]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={[1.24, 1, 3.06]} />
      <mesh geometry={(nodes.Feet003 as THREE.Mesh).geometry} material={materials.feet} position={[-8.18, 0.12, 21.66]} rotation={[-Math.PI, 1.56, -Math.PI]} />
      <mesh geometry={(nodes.Flap003 as THREE.Mesh).geometry} material={materials.flap} position={[-7.64, 0.67, 21.61]} rotation={[1.29, 0, -0.01]} />
      <mesh geometry={(nodes.Glass003 as THREE.Mesh).geometry} material={materials.glass} position={[-7.63, 1.6, 21.61]} rotation={[-Math.PI / 2, 0, -3.13]} />
      <mesh geometry={(nodes.Vending_machine003 as THREE.Mesh).geometry} material={materials.vendingmachine} position={[-7.69, 1.16, 22.07]} rotation={[-Math.PI, 1.56, -Math.PI]} scale={[1, 0.92, 1]} />
      <group position={[-3.61, 3.9, 20.68]} rotation={[0, -1.57, 1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube100 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube100_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof008 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-8.51, 5.49, 20.47]} rotation={[-0.26, 0.01, -3.14]} scale={-0.9} />
      <mesh geometry={(nodes.b3_roofCover008 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-7.88, 6.14, 23.46]} rotation={[Math.PI / 2, 0, -1.58]} scale={[-0.88, -1.24, -0.88]} />
      <group position={[-9.34, 2.5, -13.53]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube086 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube086_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <group position={[-9.4, 3.51, -11.29]} rotation={[3.14, 1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube087 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube087_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-9.82, 1.01, -12.13]} rotation={[3.14, 1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube088 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube088_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube088_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[-8.84, 1.01, -12.08]} rotation={[3.14, 1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube089 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube089_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube089_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[-10.62, 1.13, -11.83]} rotation={[3.14, 1.57, -1.57]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube090 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube090_1 as THREE.Mesh).geometry} material={materials['cloth orange']} />
      </group>
      <mesh geometry={(nodes.b1_norenBar002 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[-9.34, 2.02, -11.99]} rotation={[-Math.PI / 2, 0, 1.62]} scale={[0.84, 1.29, 0.84]} />
      <mesh geometry={(nodes.b1_norenCurtain002 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-10.07, 2.03, -11.95]} rotation={[Math.PI / 2, 0, 1.52]} scale={[0.95, 0.03, 0.95]} />
      <mesh geometry={(nodes.ラ__メン001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.74, 1.55, -11.82]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.とんこつ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.17, 1.52, -11.82]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.ー_vertical006 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.37, 1.46, -11.82]} rotation={[0, -1.57, -1.57]} scale={0.42} />
      <mesh geometry={(nodes.そ002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-10.35, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.う002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.99, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.め001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.64, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.ん004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-9.28, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.そ003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.94, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.ば001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-8.59, 1.76, -11.91]} rotation={[Math.PI / 2, 0, 0]} scale={0.42} />
      <mesh geometry={(nodes.b1_roofCover006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-11.83, 6.14, -13.49]} rotation={[-Math.PI / 2, 0, 1.57]} scale={[0.88, 1.02, 0.88]} />
      <mesh geometry={(nodes.b2_roof007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-8.34, 5.96, -10.55]} rotation={[0.44, 0, 0]} scale={[1.03, 0.97, 3.31]} />
      <group position={[-5.36, 2.63, -13.02]} rotation={[Math.PI / 2, 0, -1.58]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube102 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube102_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube102_2 as THREE.Mesh).geometry} material={materials['metal red']} />
      </group>
      <group position={[-6.4, 1.01, -11.52]} rotation={[3.14, 1.56, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube103 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube103_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube103_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-5.17, 1, -11.53]} rotation={[3.14, 1.56, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube104 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube104_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.カラオケ011 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-5.73, 1.9, -11.38]} rotation={[Math.PI / 2, 0, -0.01]} scale={0.46} />
      <group position={[-5.59, 1.45, -11.42]} rotation={[0, -1.56, Math.PI / 2]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube105 as THREE.Mesh).geometry} material={materials['cloth white']} />
        <mesh geometry={(nodes.Cube105_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.b2_backplanks_L007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-5.64, 2.31, -11.48]} rotation={[0, -1.56, -1.57]} />
      <mesh geometry={(nodes.b2_backplanks_R007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-6.92, 2.31, -11.47]} rotation={[0, -1.56, -1.57]} />
      <mesh geometry={(nodes.b2_planks_L007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-7.14, 1.25, -11.49]} rotation={[0, -1.56, -1.57]} />
      <mesh geometry={(nodes.b2_planks_R007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-5.88, 1.25, -11.5]} rotation={[0, -1.56, -1.57]} />
      <mesh geometry={(nodes.b2_stuts007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-3.46, 2.63, -11.29]} rotation={[-3.14, 1.56, 1.57]} />
      <mesh geometry={(nodes.b2_bar_F007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-7.22, 2.63, -10.43]} rotation={[3.14, 1.56, -1.57]} />
      <mesh geometry={(nodes.b2_bar_B007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-7.23, 2.93, -11.41]} rotation={[3.14, 1.56, -1.57]} />
      <mesh geometry={(nodes.b2_overhangBars007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-7.26, 2.91, -11.18]} rotation={[0, -1.56, 1.57]} />
      <mesh geometry={(nodes.b2_overhang007 as THREE.Mesh).geometry} material={materials['metal red']} position={[-4.36, 2.74, -10.41]} rotation={[0.24, 0.01, 0]} />
      <mesh geometry={(nodes.b2_gutter007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-5.35, 2.65, -10.32]} rotation={[0, 0.01, 0]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe007 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-3.45, 0.96, -11.31]} rotation={[0, 0.01, 0]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.b2_airo006 as THREE.Mesh).geometry} material={materials['plastic white']} position={[-4.19, 4.4, -11.36]} rotation={[0, 0.01, 0]} scale={[1, 1, 0.48]}>
        <mesh geometry={(nodes.b2_propellers004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </mesh>
      <group position={[-5.63, 4.36, -11.4]} rotation={[-Math.PI, 1.56, 1.57]} scale={[-2.91, -0.06, -5.57]}>
        <mesh geometry={(nodes.Cube146 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube146_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_roof008 as THREE.Mesh).geometry} material={materials['metal red']} position={[-4.34, 6.21, -10.57]} rotation={[0.44, 0.01, 0]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover007 as THREE.Mesh).geometry} material={materials['metal red']} position={[-7.94, 6.59, -13.49]} rotation={[-Math.PI / 2, 0, 1.58]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus007 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-7.17, 6.17, -10.89]} rotation={[0, -1.56, -1.57]} scale={[1, 0.39, 1]} />
      <group position={[16.87, 2.5, -1.71]} rotation={[Math.PI, -1.57, Math.PI]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube350 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube350_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
      </group>
      <group position={[14.58, 3.53, -0.46]} rotation={[Math.PI, -1.57, Math.PI]} scale={[1, 1, 0.48]}>
        <mesh geometry={(nodes.Cube351 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube351_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <group position={[14.71, 3.56, -1.78]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube352 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube352_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[14.5, 4.26, -0.6]} rotation={[Math.PI, -1.57, Math.PI]} scale={[0.62, 0.62, 0.3]}>
        <mesh geometry={(nodes.Cube353 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube353_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <group position={[15.47, 1.01, -2.19]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube355 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube355_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube355_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[15.41, 1.01, -1.21]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube356 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube356_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube356_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[15.17, 1.13, -3]} rotation={[0, 0, Math.PI / 2]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube357 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube357_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.カラオケ007 as THREE.Mesh).geometry} material={materials['cloth black']} position={[15.17, 1.58, -3.14]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.46} />
      <mesh geometry={(nodes.カラオケ008 as THREE.Mesh).geometry} material={materials['cloth black']} position={[15.16, 1.58, -0.56]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.46} />
      <mesh geometry={(nodes.b1_roof001 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[14.6, 5.39, -3.62]} rotation={[1.58, -1.13, 1.58]} scale={0.9} />
      <mesh geometry={(nodes.b1_roofCover001 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[16.84, 6.14, -4.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.01, 0.88]} />
      <group position={[16.86, 0.08, 0.79]} rotation={[Math.PI / 2, 0, 0]} scale={[1.59, 0.3, 0.09]}>
        <mesh geometry={(nodes.Cube359 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube359_1 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube359_2 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.stairs_railing001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[17.41, 2.76, 1.2]} rotation={[-2.01, -0.56, -1.82]} scale={[0.6, 1.65, 0.6]} />
      <group position={[16.33, 2.63, 3.29]} rotation={[Math.PI / 2, 0, 0]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube360 as THREE.Mesh).geometry} castShadow material={materials['wall orange']} />
        <mesh geometry={(nodes.Cube360_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube360_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[14.84, 1.01, 2.24]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube361 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube361_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube361_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[14.83, 1, 3.47]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube362 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube362_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.77, 2.09, 2.25]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[14.77, 2.09, 2.02]} rotation={[Math.PI / 2, 0, -3.14]} scale={[0.95, 0.03, 0.95]} />
      <mesh geometry={(nodes.b2_backplanks_L001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.79, 2.31, 2.99]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_backplanks_R001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.79, 2.31, 1.72]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_L001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.81, 1.25, 1.49]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_R001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.81, 1.25, 2.76]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_stuts001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.58, 2.63, 5.17]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_F001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[13.76, 2.63, 1.4]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_B001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.73, 2.93, 1.41]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhangBars001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.51, 2.91, 1.37]} rotation={[Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhang001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.71, 2.74, 4.27]} rotation={[1.58, -1.33, 1.58]} />
      <mesh geometry={(nodes.b2_gutter001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.62, 2.65, 3.28]} rotation={[Math.PI, -1.57, Math.PI]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[14.6, 0.96, 5.19]} rotation={[Math.PI, -1.57, Math.PI]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.アレクサンダ003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.75, 2, 1.85]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.1} />
      <mesh geometry={(nodes.ー_vertical004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.75, 1.69, 1.86]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.1} />
      <mesh geometry={(nodes.ラニュオア003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.75, 1.98, 2.59]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.13} />
      <group position={[14.83, 4.37, 4.54]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube370 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube370_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_roof001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.86, 6.21, 4.29]} rotation={[1.58, -1.13, 1.58]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[16.82, 6.59, 0.71]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.22, 6.17, 1.46]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.39, 1]} />
      <group position={[17.61, 2.97, 7.81]} rotation={[Math.PI / 2, 0, 0]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube372 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube372_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube372_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube372_3 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
      </group>
      <group position={[16.83, 1.01, 6.13]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube373 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube373_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube373_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[14.75, 0.69, 7.31]} rotation={[0, 1.57, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder161 as THREE.Mesh).geometry} material={materials['cloth red']} />
        <mesh geometry={(nodes.Cylinder161_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.75, 0.69, 7.31]} rotation={[-1.54, -1.47, -1.66]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.2, 2.81, 7.78]} rotation={[-1.57, 1.2, 1.56]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[14.8, 2.98, 7.79]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F001 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.61, 2.52, 7.79]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.56, 2.52, 5.48]} rotation={[Math.PI / 2, 0, 1.57]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.59, 1.93, 5.64]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.メ004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.57, 1.55, 7.07]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ラ004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.58, 1.55, 5.33]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ン004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.57, 1.55, 7.92]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ー004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.58, 1.55, 6.2]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.拉麺003 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.57, 1.85, 9.79]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.41} />
      <group position={[14.83, 3.44, 6.18]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube376 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube376_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof001 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[14.58, 5.49, 5.42]} rotation={[1.58, -1.32, 1.58]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover001 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[17.58, 6.14, 4.74]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.24, 0.88]} />
      <group position={[16.93, 2.5, 17.23]} rotation={[Math.PI, -1.57, Math.PI]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube378 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube378_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
      </group>
      <group position={[14.77, 3.61, 16.4]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube379 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube379_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[15.53, 1.01, 16.74]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube380 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube380_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube380_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[15.48, 1.01, 17.73]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube381 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube381_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube381_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[15.24, 1.13, 15.94]} rotation={[0, 0, Math.PI / 2]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube382 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube382_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.カラオケ009 as THREE.Mesh).geometry} material={materials['cloth black']} position={[15.21, 1.58, 15.8]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.46} />
      <mesh geometry={(nodes.カラオケ010 as THREE.Mesh).geometry} material={materials['cloth black']} position={[15.21, 1.58, 18.38]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.46} />
      <mesh geometry={(nodes.b1_roof004 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[14.66, 5.39, 15.31]} rotation={[1.58, -1.13, 1.58]} scale={0.9} />
      <mesh geometry={(nodes.b1_roofCover003 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} position={[16.9, 6.14, 14.74]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.01, 0.88]} />
      <group position={[16.96, 0.08, 14.73]} rotation={[Math.PI / 2, 0, 0]} scale={[1.59, 0.3, 0.09]}>
        <mesh geometry={(nodes.Cube384 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube384_1 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube384_2 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.stairs_railing003 as THREE.Mesh).geometry} material={materials['metal gray']} position={[17.51, 2.76, 15.14]} rotation={[-2.01, -0.56, -1.82]} scale={[0.6, 1.65, 0.6]} />
      <group position={[16.46, 2.63, 12.25]} rotation={[Math.PI / 2, 0, 0]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube385 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube385_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube385_2 as THREE.Mesh).geometry} material={materials['metal blue']} />
      </group>
      <group position={[14.97, 1.01, 11.2]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube386 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube386_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube386_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[14.97, 1, 12.43]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube387 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube387_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_norenBar004 as THREE.Mesh).geometry} castShadow material={materials['wood light brown']} position={[14.9, 2.09, 11.21]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.84, 0.66, 0.84]} />
      <mesh geometry={(nodes.b2_norenCurtain004 as THREE.Mesh).geometry} material={materials['cloth white']} position={[14.9, 2.09, 10.99]} rotation={[Math.PI / 2, 0, -3.14]} scale={[0.95, 0.03, 0.95]} />
      <group position={[14.95, 4.45, 11.41]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube388 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube388_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_backplanks_L004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.92, 2.31, 11.96]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_backplanks_R004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.93, 2.31, 10.68]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_L004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.94, 1.25, 10.46]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_planks_R004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.94, 1.25, 11.72]} rotation={[-Math.PI, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_stuts004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.71, 2.63, 14.14]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_F004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[13.89, 2.63, 10.37]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_bar_B004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.87, 2.93, 10.37]} rotation={[0, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhangBars004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.64, 2.91, 10.33]} rotation={[Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.b2_overhang004 as THREE.Mesh).geometry} material={materials['metal blue']} position={[13.84, 2.74, 13.23]} rotation={[1.58, -1.33, 1.58]} />
      <mesh geometry={(nodes.b2_gutter004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.76, 2.65, 12.24]} rotation={[Math.PI, -1.57, Math.PI]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[14.73, 0.96, 14.15]} rotation={[Math.PI, -1.57, Math.PI]} scale={[1, 1.7, 1]} />
      <mesh geometry={(nodes.アレクサンダ004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.88, 2, 10.81]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.1} />
      <mesh geometry={(nodes.ー_vertical005 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.88, 1.69, 10.82]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={0.1} />
      <mesh geometry={(nodes.ラニュオア004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.88, 1.98, 11.55]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.13} />
      <mesh geometry={(nodes.b2_roof003 as THREE.Mesh).geometry} material={materials['metal blue']} position={[14, 6.21, 13.25]} rotation={[1.58, -1.13, 1.58]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover004 as THREE.Mesh).geometry} material={materials['metal blue']} position={[16.95, 6.59, 9.67]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus004 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[14.35, 6.17, 10.42]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.39, 1]} />
      <group position={[17.71, 2.97, -6.14]} rotation={[Math.PI / 2, 0, 0]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube398 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
        <mesh geometry={(nodes.Cube398_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube398_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube398_3 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
      </group>
      <group position={[16.92, 1.01, -7.83]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube399 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube399_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube399_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[14.85, 0.69, -6.64]} rotation={[0, 1.57, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder173 as THREE.Mesh).geometry} material={materials['cloth light blue']} />
        <mesh geometry={(nodes.Cylinder173_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs004 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[14.85, 0.69, -6.64]} rotation={[-1.54, -1.47, -1.66]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[14.3, 2.81, -6.17]} rotation={[-1.57, 1.2, 1.56]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[14.9, 2.98, -6.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[13.71, 2.52, -6.17]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves004 as THREE.Mesh).geometry} material={materials['cloth black']} position={[13.66, 2.52, -8.47]} rotation={[Math.PI / 2, 0, 1.57]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain004 as THREE.Mesh).geometry} material={materials['cloth light blue']} position={[13.69, 1.93, -8.31]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.メ005 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.67, 1.55, -6.89]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ラ005 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.68, 1.55, -8.62]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ン005 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.67, 1.55, -6.03]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.ー005 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.67, 1.55, -7.75]} rotation={[Math.PI / 2, 0, 1.57]} />
      <mesh geometry={(nodes.拉麺004 as THREE.Mesh).geometry} material={materials['cloth white']} position={[13.67, 1.85, -4.17]} rotation={[Math.PI / 2, 0, 1.57]} scale={0.41} />
      <group position={[14.93, 3.44, -7.77]} rotation={[0, 0, Math.PI / 2]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube402 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube402_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof004 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[14.68, 5.49, -8.54]} rotation={[1.58, -1.32, 1.58]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover004 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[17.68, 6.14, -9.21]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.88, 1.24, 0.88]} />
      <group position={[5.48, 2.5, 8.26]} rotation={[-Math.PI, 0, -Math.PI]} scale={[2, 2.5, 2]}>
        <mesh geometry={(nodes.Cube024 as THREE.Mesh).geometry} castShadow material={materials['wall orange']} />
        <mesh geometry={(nodes.Cube024_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <group position={[5.54, 3.51, 6.02]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube017 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube017_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[5.96, 1.01, 6.86]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube019 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube019_1 as THREE.Mesh).geometry} material={materials['metal gray']} />
        <mesh geometry={(nodes.Cube019_2 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <group position={[4.98, 1.01, 6.8]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube021 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube021_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube021_2 as THREE.Mesh).geometry} material={materials['metal gray']} />
      </group>
      <group position={[6.76, 1.13, 6.56]} rotation={[-3.14, -1.57, -1.57]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube023 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube023_1 as THREE.Mesh).geometry} material={materials['cloth orange']} />
      </group>
      <mesh geometry={(nodes.b1_norenBar001 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[5.47, 2.02, 6.73]} rotation={[-Math.PI / 2, 0, -1.52]} scale={[0.84, 1.29, 0.84]} />
      <mesh geometry={(nodes.b1_norenCurtain001 as THREE.Mesh).geometry} material={materials['cloth white']} position={[6.21, 2.03, 6.68]} rotation={[Math.PI / 2, 0, -1.62]} scale={[0.95, 0.026, 0.95]} />
      <mesh geometry={(nodes.ラ__メン as THREE.Mesh).geometry} material={materials['cloth black']} position={[6.88, 1.55, 6.54]} rotation={[Math.PI / 2, 0, -3.14]} scale={0.42} />
      <mesh geometry={(nodes.とんこつ as THREE.Mesh).geometry} material={materials['cloth black']} position={[4.31, 1.52, 6.54]} rotation={[Math.PI / 2, 0, -3.14]} scale={0.42} />
      <mesh geometry={(nodes.ー_vertical002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[6.51, 1.46, 6.54]} rotation={[0, 1.57, -1.57]} scale={0.42} />
      <mesh geometry={(nodes.そ001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[6.48, 1.76, 6.64]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.う as THREE.Mesh).geometry} material={materials['cloth black']} position={[6.12, 1.76, 6.66]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.め as THREE.Mesh).geometry} material={materials['cloth black']} position={[5.78, 1.76, 6.68]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.ん001 as THREE.Mesh).geometry} material={materials['cloth black']} position={[5.42, 1.76, 6.69]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.そ as THREE.Mesh).geometry} material={materials['cloth black']} position={[5.07, 1.76, 6.71]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.ば as THREE.Mesh).geometry} material={materials['cloth black']} position={[4.73, 1.76, 6.73]} rotation={[Math.PI / 2, 0, 3.1]} scale={0.42} />
      <mesh geometry={(nodes.b1_roofCover004 as THREE.Mesh).geometry} material={materials['metal gray']} position={[7.97, 6.14, 8.23]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[0.88, 1.02, 0.88]} />
      <mesh geometry={(nodes.b2_roof002 as THREE.Mesh).geometry} material={materials['metal gray']} position={[4.48, 5.96, 5.28]} rotation={[2.71, 0, -3.14]} scale={[1.03, 0.97, 3.31]} />
      <group position={[-4.79, 2.63, 7.72]} rotation={[Math.PI / 2, 0, 1.57]} scale={[1.34, 2.43, 2.33]}>
        <mesh geometry={(nodes.Cube047 as THREE.Mesh).geometry} castShadow material={materials['wall dark gray']} />
        <mesh geometry={(nodes.Cube047_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube047_2 as THREE.Mesh).geometry} material={materials['metal red']} />
      </group>
      <group position={[-3.73, 1.01, 6.23]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube041 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube041_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube041_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[-4.97, 1, 6.23]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube042 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube042_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.カラオケ002 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-4.41, 1.9, 6.08]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.46} />
      <group position={[-4.54, 1.45, 6.12]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[1.56, 1.36, 1.36]}>
        <mesh geometry={(nodes.Cube115 as THREE.Mesh).geometry} material={materials['cloth white']} />
        <mesh geometry={(nodes.Cube115_1 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
      </group>
      <mesh geometry={(nodes.b2_backplanks_L005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-4.49, 2.31, 6.18]} rotation={[0, 1.57, -1.57]} />
      <mesh geometry={(nodes.b2_backplanks_R005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-3.21, 2.31, 6.19]} rotation={[0, 1.57, -1.57]} />
      <mesh geometry={(nodes.b2_planks_L005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.99, 1.25, 6.2]} rotation={[0, 1.57, -1.57]} />
      <mesh geometry={(nodes.b2_planks_R005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-4.25, 1.25, 6.2]} rotation={[0, 1.57, -1.57]} />
      <mesh geometry={(nodes.b2_stuts005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-6.67, 2.63, 5.97]} rotation={[3.14, -1.57, 1.57]} />
      <mesh geometry={(nodes.b2_bar_F005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.9, 2.63, 5.15]} rotation={[-3.14, -1.57, -1.57]} />
      <mesh geometry={(nodes.b2_bar_B005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.9, 2.93, 6.13]} rotation={[-3.14, -1.57, -1.57]} />
      <mesh geometry={(nodes.b2_overhangBars005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.87, 2.91, 5.9]} rotation={[0, 1.57, 1.57]} />
      <mesh geometry={(nodes.b2_overhang005 as THREE.Mesh).geometry} material={materials['metal red']} position={[-5.76, 2.74, 5.1]} rotation={[2.9, 0, -3.14]} />
      <mesh geometry={(nodes.b2_gutter005 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-4.77, 2.65, 5.02]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1.98, 1.22, 0.1]} />
      <mesh geometry={(nodes.b2_drainpipe005 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-6.69, 0.96, 6]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1.7, 1]} />
      <group position={[-5.94, 4.4, 6.06]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.48]}>
        <mesh geometry={(nodes.Cube043 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.Cube043_1 as THREE.Mesh).geometry} material={materials['plastic white']} />
        <mesh geometry={(nodes.b2_propellers006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[-0.3, -0.01, 0.4]} rotation={[0, Math.PI / 2, 0]} scale={[2.1, 0.48, 1]} />
      </group>
      <group position={[-4.5, 4.36, 6.11]} rotation={[0, -1.57, -1.57]} scale={[-2.91, -0.06, -5.57]}>
        <mesh geometry={(nodes.Cube045 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube045_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b2_roof004 as THREE.Mesh).geometry} material={materials['metal red']} position={[-5.78, 6.21, 5.26]} rotation={[2.71, 0, -3.14]} scale={[1.03, 0.97, 3.31]} />
      <mesh geometry={(nodes.b2_roofCover005 as THREE.Mesh).geometry} material={materials['metal red']} position={[-2.21, 6.59, 8.21]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[0.88, 1.04, 0.88]} />
      <mesh geometry={(nodes.b2_roofStus005 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} position={[-2.95, 6.17, 5.61]} rotation={[0, 1.57, -1.57]} scale={[1, 0.39, 1]} />
      <group position={[9.95, 2.97, 9]} rotation={[Math.PI / 2, 0, 1.57]} scale={[1.84, 2.23, 2.86]}>
        <mesh geometry={(nodes.Cube053 as THREE.Mesh).geometry} castShadow material={materials['wall white']} />
        <mesh geometry={(nodes.Cube053_1 as THREE.Mesh).geometry} castShadow material={materials['wood dark brown']} />
        <mesh geometry={(nodes.Cube053_2 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube053_3 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
      </group>
      <group position={[11.64, 1.01, 8.22]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube050 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube050_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube050_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[9.69, 0.69, 5.71]} rotation={[0, 0.15, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder021 as THREE.Mesh).geometry} material={materials['cloth orange']} />
        <mesh geometry={(nodes.Cylinder021_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs005 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[9.69, 0.69, 5.71]} rotation={[-3.04, -0.16, 3.04]} scale={1.52} />
      <group position={[10.49, 0.69, 5.37]} rotation={[0, 0.15, 0]} scale={[1.21, 1, 1.21]}>
        <mesh geometry={(nodes.Cylinder192 as THREE.Mesh).geometry} material={materials['cloth orange']} />
        <mesh geometry={(nodes.Cylinder192_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs009 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[10.49, 0.69, 5.37]} rotation={[-3.04, -0.16, 3.04]} scale={1.52} />
      <mesh geometry={(nodes.b3_overhang005 as THREE.Mesh).geometry} material={materials['cloth orange']} position={[9.98, 2.81, 5.6]} rotation={[-0.37, 0, 0]} scale={[-0.73, -0.28, -0.89]} />
      <mesh geometry={(nodes.b3_bar_B005 as THREE.Mesh).geometry} material={materials['metal gray']} position={[9.97, 2.98, 6.2]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_bar_F005 as THREE.Mesh).geometry} material={materials['metal gray']} position={[9.97, 2.52, 5.01]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[1, 2.76, 1]} />
      <mesh geometry={(nodes.b3_overhangWaves005 as THREE.Mesh).geometry} material={materials['cloth orange']} position={[12.28, 2.52, 4.95]} rotation={[Math.PI / 2, 0, -3.14]} scale={[0.45, 0.04, 0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain005 as THREE.Mesh).geometry} material={materials['cloth black']} position={[12.12, 1.93, 4.98]} rotation={[Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.か as THREE.Mesh).geometry} material={materials['cloth white']} position={[10.69, 1.55, 4.95]} rotation={[Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.と as THREE.Mesh).geometry} material={materials['cloth white']} position={[12.43, 1.55, 4.95]} rotation={[Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.つ as THREE.Mesh).geometry} material={materials['cloth white']} position={[9.84, 1.55, 4.95]} rotation={[Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.ん as THREE.Mesh).geometry} material={materials['cloth white']} position={[11.56, 1.55, 4.95]} rotation={[Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.魚 as THREE.Mesh).geometry} material={materials['cloth white']} position={[8.12, 1.61, 4.94]} rotation={[Math.PI / 2, 0, -3.14]} scale={0.86} />
      <group position={[11.6, 3.44, 6.22]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube051 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube051_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof005 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[12.34, 5.49, 5.97]} rotation={[2.89, 0, -3.14]} scale={0.9} />
      <mesh geometry={(nodes.b3_roofCover005 as THREE.Mesh).geometry} castShadow material={materials['wall black']} position={[13.02, 6.14, 8.97]} rotation={[-Math.PI / 2, 0, -1.57]} scale={[0.88, 1.24, 0.88]} />
      <group position={[1.01, 2.97, 9]} rotation={[-Math.PI / 2, 0, 1.57]} scale={[-1.84, -2.23, -2.86]}>
        <mesh geometry={(nodes.Cube113 as THREE.Mesh).geometry} castShadow material={materials['wall light gray']} />
        <mesh geometry={(nodes.Cube113_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube113_2 as THREE.Mesh).geometry} castShadow material={materials['wall black']} />
        <mesh geometry={(nodes.Cube113_3 as THREE.Mesh).geometry} castShadow material={materials['wall red']} />
      </group>
      <group position={[-0.68, 1.01, 8.22]} rotation={[0, -1.57, -1.57]} scale={[-2.91, -0.06, -5.57]}>
        <mesh geometry={(nodes.Cube110 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube110_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
        <mesh geometry={(nodes.Cube110_2 as THREE.Mesh).geometry} material={materials['metal gold']} />
      </group>
      <group position={[0.51, 0.69, 6.15]} rotation={[Math.PI, 0, 0]} scale={[-1.21, -1, -1.21]}>
        <mesh geometry={(nodes.Cylinder027 as THREE.Mesh).geometry} material={materials['cloth light blue']} />
        <mesh geometry={(nodes.Cylinder027_1 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
      </group>
      <mesh geometry={(nodes.b3_legs006 as THREE.Mesh).geometry} castShadow material={materials['wood black']} position={[0.51, 0.69, 6.15]} rotation={[0.1, 0, 3.02]} scale={-1.52} />
      <mesh geometry={(nodes.b3_overhang006 as THREE.Mesh).geometry} material={materials['cloth red']} position={[0.34, 2.81, 5.6]} rotation={[2.77, 0, 0]} scale={[0.93, 0.28, 0.9]} />
      <mesh geometry={(nodes.b3_bar_B006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[0.99, 2.98, 6.2]} rotation={[Math.PI / 2, 0, -1.57]} scale={[-1, -2.76, -1]} />
      <mesh geometry={(nodes.b3_bar_F006 as THREE.Mesh).geometry} material={materials['metal gray']} position={[0.99, 2.52, 5.01]} rotation={[Math.PI / 2, 0, -1.57]} scale={[-1, -2.76, -1]} />
      <mesh geometry={(nodes.b3_overhangWaves006 as THREE.Mesh).geometry} material={materials['cloth red']} position={[-2.64, 2.52, 4.95]} rotation={[-Math.PI / 2, 0, -3.14]} scale={[-0.45, -0.04, -0.45]} />
      <mesh geometry={(nodes.b3_norenCurtain006 as THREE.Mesh).geometry} material={materials['cloth white']} position={[-2.42, 1.93, 4.98]} rotation={[-Math.PI / 2, 0, -3.14]} scale={-1} />
      <mesh geometry={(nodes.メ002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[1.55, 1.55, 4.94]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ラ002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[3.4, 1.55, 4.93]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ン002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[0.63, 1.55, 4.94]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.ー002 as THREE.Mesh).geometry} material={materials['cloth black']} position={[2.48, 1.55, 4.93]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.き as THREE.Mesh).geometry} material={materials['cloth black']} position={[-1.23, 1.55, 4.94]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.鳥 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-2.14, 1.55, 4.94]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.焼 as THREE.Mesh).geometry} material={materials['cloth black']} position={[-0.29, 1.55, 4.93]} rotation={[Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.Concrete as THREE.Mesh).geometry} material={materials.concrete} position={[-2.33, 0.06, 7.59]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1.24, 1, 3.06]} />
      <mesh geometry={(nodes.Feet as THREE.Mesh).geometry} material={materials.feet} position={[-2.35, 0.12, 7.16]} rotation={[-Math.PI, 1.57, -Math.PI]} />
      <mesh geometry={(nodes.Flap as THREE.Mesh).geometry} material={materials.flap} position={[-1.81, 0.67, 7.12]} rotation={[1.29, 0, 0]} />
      <mesh geometry={(nodes.Glass as THREE.Mesh).geometry} material={materials.glass} position={[-1.8, 1.6, 7.12]} rotation={[-Math.PI / 2, 0, -3.14]} />
      <mesh geometry={(nodes.Vending_machine as THREE.Mesh).geometry} material={materials.vendingmachine} position={[-1.87, 1.16, 7.58]} rotation={[-Math.PI, 1.57, -Math.PI]} scale={[1, 0.92, 1]} />
      <group position={[2.22, 3.9, 6.21]} rotation={[-3.14, -1.57, -1.57]} scale={[2.91, 0.06, 5.57]}>
        <mesh geometry={(nodes.Cube111 as THREE.Mesh).geometry} castShadow material={materials['wood black']} />
        <mesh geometry={(nodes.Cube111_1 as THREE.Mesh).geometry} material={materials['rice paper windows']} />
      </group>
      <mesh geometry={(nodes.b3_roof006 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-2.68, 5.49, 5.97]} rotation={[-0.26, 0, -3.14]} scale={-0.9} />
      <mesh geometry={(nodes.b3_roofCover006 as THREE.Mesh).geometry} castShadow material={materials['wall red']} position={[-2.06, 6.14, 8.97]} rotation={[Math.PI / 2, 0, -1.57]} scale={[-0.88, -1.24, -0.88]} />
      <group position={[12.19, 1.61, 3.95]} rotation={[0, -1.57, 0]}>
        <mesh geometry={(nodes.Cube215 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube215_1 as THREE.Mesh).geometry} material={materials['mirror.002']} />
      </group>
      <mesh geometry={(nodes.Cube as THREE.Mesh).geometry} castShadow material={materials['Body.002']} position={[11.4, 0.96, 4.49]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.door_handle as THREE.Mesh).geometry} material={materials['black hard plastic.002']} position={[9.43, 0.39, 3.95]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <mesh geometry={(nodes.license_plate_back as THREE.Mesh).geometry} material={materials['License plate.002']} position={[9.43, 0.39, 3.95]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.license_plate_front as THREE.Mesh).geometry} material={materials['License plate.002']} position={[12.86, 0.38, 3.95]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.lights_back as THREE.Mesh).geometry} material={materials['red lights.002']} position={[9.43, 0.39, 3.95]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={(nodes.lights_front_bottom as THREE.Mesh).geometry} material={materials['white lights.002']} position={[12.86, 0.38, 3.95]} rotation={[Math.PI / 2, 0, -1.14]} />
      <mesh geometry={(nodes.lights_front_top as THREE.Mesh).geometry} material={materials['white lights.002']} position={[12.69, 0.88, 4.48]} rotation={[-Math.PI / 2, 0, 1.14]} />
      <mesh geometry={(nodes.nail_back as THREE.Mesh).geometry} material={(nodes.nail_back as THREE.Mesh).material} position={[9.43, 0.39, 3.95]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.84, 1, 0.84]} />
      <mesh geometry={(nodes.nail_front as THREE.Mesh).geometry} material={(nodes.nail_front as THREE.Mesh).material} position={[12.9, 0.38, 3.95]} rotation={[-Math.PI / 2, 0, -1.47]} scale={[0.84, 1, 0.84]} />
      <group position={[11.11, 0.67, 3.95]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]}>
        <mesh geometry={(nodes.Cube213 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube213_1 as THREE.Mesh).geometry} material={materials['mirror.002']} />
      </group>
      <group position={[11.11, 0.67, 3.95]} scale={[1.7, 0.31, 0.74]}>
        <mesh geometry={(nodes.Cube211 as THREE.Mesh).geometry} castShadow material={materials['Body.002']} />
        <mesh geometry={(nodes.Cube211_1 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube211_2 as THREE.Mesh).geometry} material={materials['bottom.002']} />
        <mesh geometry={(nodes.Cube211_3 as THREE.Mesh).geometry} material={materials['dirty body.002']} />
      </group>
      <mesh geometry={(nodes.truck_bed_cargo_bar as THREE.Mesh).geometry} castShadow material={materials['Body.002']} position={[10.6, 0.67, 4.55]} />
      <group position={[11.11, 0.69, 3.95]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <group position={[13.13, 0.69, 3.95]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder068 as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder068_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <group position={[11.73, 0.69, 3.95]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder069 as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder069_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <mesh geometry={(nodes.window as THREE.Mesh).geometry} material={materials['mirror.002']} position={[12.11, 1.42, 4.7]} rotation={[Math.PI / 2, Math.PI / 2, 0]} />
      <group position={[-7.66, 1.61, 3.16]}>
        <mesh geometry={(nodes.Cube216 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube216_1 as THREE.Mesh).geometry} material={materials['mirror.002']} />
      </group>
      <mesh geometry={(nodes.Cube001 as THREE.Mesh).geometry} castShadow material={materials['Body.002']} position={[-7.12, 0.96, 3.95]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.door_handle001 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} position={[-7.67, 0.39, 5.92]} rotation={[Math.PI, 0, -Math.PI / 2]} />
      <mesh geometry={(nodes.license_plate_back001 as THREE.Mesh).geometry} material={materials['License plate.002']} position={[-7.67, 0.39, 5.92]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.license_plate_front001 as THREE.Mesh).geometry} material={materials['License plate.002']} position={[-7.66, 0.38, 2.49]} rotation={[-Math.PI / 2, 0, 3.14]} />
      <mesh geometry={(nodes.lights_back001 as THREE.Mesh).geometry} material={materials['red lights.002']} position={[-7.67, 0.39, 5.92]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={(nodes.lights_front_bottom001 as THREE.Mesh).geometry} material={materials['white lights.002']} position={[-7.66, 0.38, 2.49]} rotation={[Math.PI / 2, 0, -2.71]} />
      <mesh geometry={(nodes.lights_front_top001 as THREE.Mesh).geometry} material={materials['white lights.002']} position={[-7.13, 0.88, 2.66]} rotation={[-Math.PI / 2, 0, 2.71]} />
      <mesh geometry={(nodes.nail_back001 as THREE.Mesh).geometry} material={(nodes.nail_back001 as THREE.Mesh).material} position={[-7.67, 0.39, 5.92]} rotation={[-Math.PI / 2, 0, 3.14]} scale={[0.84, 1, 0.84]} />
      <mesh geometry={(nodes.nail_front001 as THREE.Mesh).geometry} material={(nodes.nail_front001 as THREE.Mesh).material} position={[-7.66, 0.38, 2.45]} rotation={[-Math.PI / 2, 0, 0.09]} scale={[0.84, 1, 0.84]} />
      <group position={[-7.66, 0.67, 4.24]} rotation={[0, 0, Math.PI / 2]}>
        <mesh geometry={(nodes.Cube224 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube224_1 as THREE.Mesh).geometry} material={materials['mirror.002']} />
      </group>
      <group position={[-7.66, 0.67, 4.24]} rotation={[0, 1.57, 0]} scale={[1.7, 0.31, 0.74]}>
        <mesh geometry={(nodes.Cube225 as THREE.Mesh).geometry} castShadow material={materials['Body.002']} />
        <mesh geometry={(nodes.Cube225_1 as THREE.Mesh).geometry} material={materials['black hard plastic.002']} />
        <mesh geometry={(nodes.Cube225_2 as THREE.Mesh).geometry} material={materials['bottom.002']} />
        <mesh geometry={(nodes.Cube225_3 as THREE.Mesh).geometry} material={materials['dirty body.002']} />
      </group>
      <mesh geometry={(nodes.truck_bed_cargo_bar001 as THREE.Mesh).geometry} castShadow material={materials['Body.002']} position={[-7.06, 0.67, 4.76]} rotation={[0, 1.57, 0]} />
      <group position={[-7.66, 0.69, 4.24]} rotation={[0, 0, Math.PI / 2]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder097 as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder097_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <group position={[-7.66, 0.69, 2.22]} rotation={[0, 0, Math.PI / 2]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder098 as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder098_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <group position={[-7.66, 0.69, 3.63]} rotation={[0, 0, Math.PI / 2]} scale={[0.99, 1, 0.99]}>
        <mesh geometry={(nodes.Cylinder099 as THREE.Mesh).geometry} material={materials['rubber.002']} />
        <mesh geometry={(nodes.Cylinder099_1 as THREE.Mesh).geometry} material={materials['clear metal.002']} />
      </group>
      <mesh geometry={(nodes.window001 as THREE.Mesh).geometry} material={materials['mirror.002']} position={[-6.91, 1.42, 3.24]} rotation={[Math.PI, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/buildings.glb')
