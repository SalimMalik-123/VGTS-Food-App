import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import AppRouter from './Router/AppRouter';

function App() {
  return (
    <div className=" w-100 h-100   ">
      <AppRouter />
    </div>
  );
}

export default App;
