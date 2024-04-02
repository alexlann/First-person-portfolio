import { Text } from "@react-three/drei";

interface TextBody {
    content: string,
    color?: number,
    position: any,
    rotation?: any,
    fontSize?: number
 }

const MultiLineText: React.FunctionComponent<TextBody> = ({content, color=0x999999, position, rotation=[0, 0, 0], fontSize=0.1}) => {
    // Create new Text component each break
    const splitContent = content.split("\n");
    const multiLineText = [];

    for(let i = 0; i < splitContent.length; i++) {
        // define lineBreak distance
        const lineBreak = 7*i*fontSize/5;
        // make unique key
        const uniqueKey = position[0]*i + position[1]*i + position[2]*i;
        // calculate new position taking possible linebreak and rotation into account
        const posX = position[0];
        const posY = rotation[0] === 0 ? position[1] - lineBreak : position[1]
        const posZ = rotation[0] !== 0 ? position[2] + lineBreak : position[2];
        const newPosition = splitContent.length > 1 ? [posX, posY, posZ] : position;
        
        // push text component into array
        multiLineText.push(
           <group position={newPosition} rotation={rotation} key={uniqueKey}>
                <Text color={color} fontSize={fontSize}>
                    {splitContent[i]}
                </Text>
            </group>
        )
    };


    return (
        <>
            {multiLineText}
        </>        
    )
}

export default MultiLineText;