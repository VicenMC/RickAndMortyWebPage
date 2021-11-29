import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './pages/mainPage'

//We define our routes and start defining our components
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path="/" component={MainPage}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
