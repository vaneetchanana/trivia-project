
import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import StartScreen from './Components/StartScreen'
import MainScreen from './Components/MainScreen'
import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={<StartScreen />} />
    <Route path='main' element={<MainScreen />} />
    {/* catch all route */}
    <Route path='*' element={<h1>Page not found!</h1>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
