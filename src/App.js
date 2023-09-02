
import './App.css';
import Leftsidebar from './Components/Leftsidebar';
import Feed from './Components/Feed';
import {useState} from 'react'
import Widget from './Components/Widget';
import Login from './Components/Login';
function App() {
  const [isLoggedIn ,setIsLoggedIn] = useState(false)
  return (
   <div>
     {isLoggedIn?<div className="App">
     <Leftsidebar/>
     <Feed/>
     <Widget/>
     </div>:<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
   </div>
  );
}

export default App;
