import React from 'react';
import Display from './containers/Display'
import UI from './containers/UI'
import {GameProvider} from './context/GameContext'

function App() {
  return (
    <div className="App">
      <GameProvider>
            <Display/>
            <UI/>
      </GameProvider>
     
    </div>
  );
}

export default App;
