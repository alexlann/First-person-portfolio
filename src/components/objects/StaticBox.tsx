import { useBox } from "@react-three/cannon";
import { Mesh } from "three";

interface staticBoxBody {
    position: any,
    args: any,
    rotation?: any,
    type?: "Static" | "Kinematic" | "Dynamic" | undefined
 }

const StaticBox: React.FunctionComponent<staticBoxBody> = ({position, args, rotation=[0, 0, 0], type="Static"}) => {
    const [ref] = useBox<Mesh>(() => ({
        type: type,
        rotation: rotation,
        position: position,
        args: args
    }));

    return (
        <>
            <mesh ref={ref}></mesh>   
        </>        
    )
}

export default StaticBox;