import React from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import ClientContainer from "./components/mainPage/clientInfo/сlientContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/profile";



function App(props) {
//debugger
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>

        <div className="main-wrapper">
          <Route path='/' render={() =>  <ClientContainer />}/>
          <Route path='/Profile' render={() =>  <Profile />}/>
        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
