
import React from 'react';
import StartScreen from './Components/StartScreen'
import MainScreen from './Components/MainScreen'
import './App.css';

function App() {

  const [gameStart, setGameStart] = React.useState(false)

  function gameStarter() {
    setGameStart(prevState => !prevState)
  }

  return (
    <div className="App">
      {
        gameStart ?
          <MainScreen /> :
          <StartScreen gameStarter={gameStarter} />
      }
    </div>
  );
}

export default App;
