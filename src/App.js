import React from 'react';
import Display from './containers/Display'
import UI from './containers/UI'
import {GameProvider} from './context/GameContext'
import {GuessProvider} from './context/GuessContext'

function App() {
  return (
    <div className="App">
    <GameProvider>
      <GuessProvider>
            <Display/>
            <UI/>
      </GuessProvider>
      </GameProvider>
    </div>
  );
}

export default App;
