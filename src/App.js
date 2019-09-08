import React from 'react';
import Display from './containers/Display'
import UI from './containers/UI'
import {SecretProvider} from './context/SecretContext'
import {GameProvider} from './context/GameContext'
import GuessProvider from './context/GuessContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
      <SecretProvider>
        <GuessProvider>
        <Display/>
            <UI/>
        </GuessProvider>
          
      </SecretProvider>
      </GameProvider>
     
    </div>
  );
}

export default App;
