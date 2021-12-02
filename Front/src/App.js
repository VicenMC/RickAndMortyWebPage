import "./App.css";
import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import MainPage from './pages/mainPage';
import Episode from './pages/episode';
import Location from './pages/location';


//We define our routes and start defining our components
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route exact path ="/" component={MainPage}>
      <Redirect to="/home" />
    </Route>
    <Route exact path="/home" component={MainPage}/>
    <Route exact path="/episode" component={Episode}/>
    <Route exact path="/location" component={Location}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
