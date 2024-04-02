import { useState } from "react";

const CoinCounter = () => {
    const [numberOfCoins, setNumberOfCoins] = useState(parseInt(localStorage.getItem('coins') || "0"))

    // wait for coinChange event and update numberOfCoins
    window.addEventListener('coinChange', () => {
        setNumberOfCoins(parseInt(localStorage.getItem('coins') || "0"));
    })
    
    return (
        <div className="coinCounter">
            <div>
                {numberOfCoins} coins
            </div>
        </div>
    )
}

export default CoinCounter;