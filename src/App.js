
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartScreen from './Components/StartScreen'
import MainScreen from './Components/MainScreen'
import './App.css';

function App() {

  // const [gameStart, setGameStart] = React.useState(false)

  // function gameStarter() {
  //   setGameStart(prevState => !prevState)
  // }
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<StartScreen />} />
      <Route path='/main' element={<MainScreen />} />
    </Routes>

      {/* {
        gameStart ?
          <MainScreen /> :
          <StartScreen gameStarter={gameStarter} />
      } */}
    </div>
  );
}

export default App;
