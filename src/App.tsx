import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/world/room/Ground';
import { Player } from './components/world/player/Player';
import { FPV } from './components/world/player/FPV';
import { Buildings } from './assets/models/Buildings';
import { Suspense } from 'react';
import Lights from './components/world/room/Lights';
import { softShadows } from '@react-three/drei';
import { Room } from './components/world/room/Room';
import Portfolio from './components/world/Portfolio';
import RamenBell from './components/world/gamification/RamenBell';
import Clarifications from './components/Clarifications';
import CoinCounter from 'components/world/gamification/CoinCounter';
import Coins from 'components/world/gamification/Coins';

function App() {
  softShadows();

  return (
    <>
      <Canvas
        shadows={true}
      >
        <Lights />
        <FPV />
        <Physics>
          <Ground />
          <Player />
          <Room />
          <Portfolio />
          <Suspense fallback={null}>
            <Buildings />
            <RamenBell />
            <Coins />
          </Suspense>
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <Clarifications />
      <CoinCounter />
    </>
  );
}

export default App;
