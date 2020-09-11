import React,{useEffect} from 'react';
import MainWindo from './components/mainchat/mainchat';
import Sidebar from './components/sidebar/sidebar';
import './App.css';
import Pusher from 'pusher-js';
const App= ()=> {

  
  useEffect(()=>{
    const pusher = new Pusher('1bfabf99055cfb47bcd5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(data)=>{
      alert(JSON.stringify(data));
    });

  },[])

    
    return (
      <div className="App">
        <div className="app-body">
        <Sidebar/>
        <MainWindo/>
   
        </div>
     
     </div>
    );
  
}

export default App;