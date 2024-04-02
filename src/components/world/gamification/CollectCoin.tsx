import { useState} from "react";
import { Coin } from "../../../assets/models/Coin";
const collectCoinSound = require("../../../assets/sounds/collect-coin.mp3");

const CollectCoin = (props: any) => {
    const [coin, setCoin] = useState(true);
    const collectCoin = new Audio(collectCoinSound);

    const handleCollect = () => {
        // get number of coins from storage and add one
        const numberOfCoins = parseInt(localStorage.getItem('coins') || "0") + 1;

        // save number of coins in storage
        localStorage.setItem('coins', numberOfCoins.toString());

        // add event coinChange (used by CoinCouter)
        window.dispatchEvent(new Event("coinChange"));

        // remove coin from scene
        setCoin(false);

        // play sound
        collectCoin.play();
    }

     // Show coin if not yet collected
     const visibleCoin = coin
        ? <Coin onClick={handleCollect} startAnimation={false} position={props.firstPosition} />
        : <Coin startAnimation={true} position={props.secondPosition} />;

    return (
        <>  
            <group name="models">
                {visibleCoin}
            </group>
        </>
    )
}

export default CollectCoin;