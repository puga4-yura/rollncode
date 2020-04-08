import React from 'react';
import './App.scss';
import {Header} from "./components/header/header";
import ClientContainer from "./components/mainPage/clientInfo/сlientContainer";


function App(props) {
//debugger
  return (
    <div className="App">
        <Header/>
        <div className="main-wrapper">
            <ClientContainer />
            {/*<Clients store={props.store}/>*/}

        </div>

    </div>
  );
}

export default App;
