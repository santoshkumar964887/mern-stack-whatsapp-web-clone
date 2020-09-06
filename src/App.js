import React, { Component } from 'react';
import MainWindo from './components/mainchat/mainchat';
import Sidebar from './components/sidebar/sidebar';
import './App.css';
class App extends Component {

  constructor(){
    super();
    this.state = {
    search:"",
    error: "",
    posts: [],
    };

  }


 render() {
    
    return (
      <div className="App">
        <div className="app-body">
        <Sidebar/>
        <MainWindo/>
   
        </div>
     
     </div>
    );
  }
}

export default App;