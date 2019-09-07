import React from 'react';
import Display from './containers/Display'
import UI from './containers/UI'
import {SecretProvider} from './context/SecretContext'

function App() {
  return (
    <div className="App">
      <SecretProvider>
      <Display/>
        <UI/>
      </SecretProvider>
    </div>
  );
}

export default App;
