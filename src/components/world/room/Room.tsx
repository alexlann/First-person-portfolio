import StaticBox from "components/objects/StaticBox"

export const Room = () => {
    return (
        <group name="room">
            {/* Right side */}
            <StaticBox
                position={[-7, 1, 12.2]}
                args={[7.5, 10, 10]}
            />
            <StaticBox
                position={[-2.5, 1, 13]}
                args={[1, 10, 10]}
            />
            <StaticBox
                position={[-0.8, 1, 14]}
                args={[2.5, 10, 10]}
            />
            <StaticBox
                position={[2.3, 1, 12]}
                args={[2.5, 10, 10]}
            />
            <StaticBox
                position={[5, 1, 13]}
                args={[2.5, 10, 10]}
            />
            <StaticBox
                rotation={[0, Math.PI / 12 , 0]}
                position={[11, 1, 11]}
                args={[4, 10, 10]}
            />

            {/* Front side */}
            <StaticBox
                position={[15.4, 1, 8]}
                args={[10, 10, 12.5]}
            />

            {/* Left side */}
            <StaticBox
                rotation={[0, -Math.PI / 10 , 0]}
                position={[12.15, 1, -3]}
                args={[4, 10, 10]}
            />
            <StaticBox
                position={[8, 1, -6]}
                args={[2.5, 10, 10]}
            />
            <StaticBox
                position={[4.5, 1, 0]}
                args={[2.3, 10, 2.1]}
            />

            {/* Stairs */}
            <StaticBox
                rotation={[Math.PI / 5, 0, 0]}
                position={[1.9, 0, 0]}
                args={[1.2, 1.6, 5]}
            />
            <StaticBox
                position={[2, 0, -3]}
                args={[10, 4.35, 2.5]}
            />
            <StaticBox
                position={[5.7, 0, -3]}
                args={[2, 10, 2]}
            />
            <StaticBox
                position={[2, 0, -9.8]}
                args={[5, 10, 10]}
            />
            <StaticBox
                position={[-3.5, 0, -3]}
                args={[2, 10, 2]}
            />
            <StaticBox
                position={[0.3, 0, 0.15]}
                args={[0.02, 10, 1.8]}
            />
            <StaticBox
                position={[-0.2, 0, -0.3]}
                args={[1.1, 10, 1.6]}
            />
            <StaticBox
                position={[-6, 0, 0.2]}
                args={[6, 10, 1.6]}
            />

            {/* Back side */}
            <StaticBox
                position={[-13, 0, 4]}
                args={[10, 10, 10]}
            />
        </group>
    )

}