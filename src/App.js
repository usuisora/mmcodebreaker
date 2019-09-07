import React from 'react';
import Display from './containers/Display'
import UI from './containers/UI'
import {SecretProvider} from './context/SecretContext'
import {GameProvider} from './context/GameContext'

function App() {
  return (
    <div className="App">
      <GameProvider>
      <SecretProvider>
          <Display/>
            <UI/>
      </SecretProvider>
      </GameProvider>
     
    </div>
  );
}

export default App;
