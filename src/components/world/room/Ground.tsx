import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../../../assets/images/textures";
import { Mesh } from "three";

export const Ground = () => {
    const [textureRef] = usePlane<Mesh>(() => ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, 0, 0]
    }));

    const [shadowRef] = usePlane<Mesh>(() => ({
        rotation: [-Math.PI / 2, 0, 0], position: [0, 0.001, 0]
    }));

    groundTexture.repeat.set(100, 100);

    return (
        <group>
            <mesh ref={textureRef} receiveShadow>
                <planeGeometry attach='geometry' args={[100, 100]} />
                <meshStandardMaterial attach='material' map={groundTexture} />
            </mesh>
            <mesh ref={shadowRef} receiveShadow>
                <planeGeometry attach='geometry' args={[100, 100]} />
                <shadowMaterial attach='material' opacity={0.4} />
            </mesh>
        </group>
    )
}