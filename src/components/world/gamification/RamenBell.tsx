import { useState } from "react";
import { Bell } from "../../../assets/models/Bell";
import { Bowl } from "../../../assets/models/Bowl";
import MultiLineText from "../../text/MultiLineText";
const serviceBellSound = require("../../../assets/sounds/service-bell-ring.mp3");

const warningText = (content: string) => {
    return (
        <MultiLineText
            content={content}
            position={[1.7, 1.9, 7.5]}
            rotation={[0, Math.PI, 0]}
            fontSize={0.13}
        />
    )
}   

const RamenBell = () => {
    const [bowl, setBowl] = useState(false);
    const [warning, setWarning] = useState(<></>);
    const ringBell = new Audio(serviceBellSound);



    // Show bowl if true
    const showBowl = bowl ? <Bowl /> : <></>;

    const handleBell = () => {
        // get number of coins from storage
        let numberOfCoins = parseInt(localStorage.getItem('coins') || "0");

        // play sound
        ringBell.play();

        // if player has no coins, show warning
        if (numberOfCoins === 0 && bowl === false) {
            setWarning(warningText("You don't have any coins to order ramen"));

        // if player has coins, remove one and show bowl
        } else if (numberOfCoins > 0 && bowl === false) {
            setWarning(warningText(""));
            numberOfCoins--;
            setBowl(true);
            localStorage.setItem('coins', numberOfCoins.toString());

        // else show warning
        } else {
            setWarning(warningText("You already ordered ramen"));
        }
    }

    return (
        <>  
            <group name="explanation">
                <MultiLineText
                    content={"Click the bell to order some ramen"}
                    position={[1.7, 0.002, 5.65]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                    fontSize={0.2}
                />
                <MultiLineText
                    content={"Credits to Kenney from pmnd.rs for the bowl\n                                Sound effect from Pixabay"}
                    position={[1.4, 1.4, 7.5]}
                    rotation={[0, Math.PI, 0]}
                />
            </group>
            <group name="models">
                <Bell onClick={handleBell} />
                {showBowl}
            </group>
            {warning}
        </>
    )
}

export default RamenBell;