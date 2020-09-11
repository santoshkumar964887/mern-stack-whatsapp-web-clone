import React,{useEffect,useState} from 'react';
import MainWindo from './components/mainchat/mainchat';
import Sidebar from './components/sidebar/sidebar';
import './App.css';
import Pusher from 'pusher-js';
import axios from './components/axios'
const App= ()=> {
  const[allmessages,setMessage]=useState([]);
  useEffect(()=>{
    axios.get('/message').then(res=>{
  
      setMessage(res.data.data);
    })
      

  },[])


  
  useEffect(()=>{
    const pusher = new Pusher('1bfabf99055cfb47bcd5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage)=>{
      setMessage([...allmessages,newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[allmessages])
 
  console.log(allmessages)
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