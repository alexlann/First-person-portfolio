import CollectCoin from "./CollectCoin";

const Coins = () => {
    const coinPositions = [{
            first: [-2.15, 0.02, 6.7],
            second: [-2.15, -0.01, 6.7]
        },
        {
            first: [8.02, 0.73, 5.88],
            second: [8.02, 0.71, 5.88],
        },
        {
            first: [-7.45, 0.67, 4.7],
            second: [-7.45, 0.63, 4.7]
        },
        {
            first: [0, 2.21, -2.54],
            second: [0, 2.19, -2.54],
        },
        {
            first: [8.47, 1.02, 1.87],
            second: [8.47, 1, 1.87],
        }
    ];

    const coinArray = coinPositions.map((coin, index) => {
        return (
            <CollectCoin
                key={index}
                firstPosition={coin.first}
                secondPosition={coin.second}
            />
        )
    });

    return (
        <>
            {coinArray}
        </>
    )
};

export default Coins;