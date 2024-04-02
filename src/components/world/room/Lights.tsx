
const Lights = () => {
    const eveningGlowOrange = '#ad8249';

    return (
        <>
            <fog attach='fog' args={[eveningGlowOrange, 0, 52]} />
            <ambientLight intensity={.4} />
            <directionalLight
                castShadow
                color={eveningGlowOrange}
                position={[-8, 16, -8]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <pointLight color={eveningGlowOrange} position={[0, 50, 0]} intensity={2} />
        </>
    )
}

export default Lights;