import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon";
import { Vector3, Mesh } from "three";
import { useEffect, useRef } from "react";
import { useKeyboard } from "../../../hooks/useKeyboard";

const SPEED = 4;

export const Player = () => {
    const {moveBackward, moveForward, moveRight, moveLeft} = useKeyboard();

    const { camera } = useThree();
    // make player sphere
    const [ref, api] = useSphere<Mesh>(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [-5, 1.5, 5],
        args: [1.5]
    }))

    // subscibe to velocity and position to sphere
    const vel = useRef([0, 0, 0]);
    useEffect(() => {
            api.velocity.subscribe((v) => vel.current = v)
    }, [api.velocity]);

    const pos = useRef([0, 0, 0]);
    useEffect(() => {
            api.position.subscribe((p) => pos.current = p)
    }, [api.position]);

    // move camera along with sphere by copying position
    useFrame(() => {
        camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));
        
        const direction = new Vector3();

        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        );

        const sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        );

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation);

        api.velocity.set(direction.x, vel.current[1], direction.z);
    })

    return (
        <mesh ref={ref}></mesh>
    )
}