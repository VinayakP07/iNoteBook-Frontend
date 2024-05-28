
import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import NoteState from './Context/notes/NoteState';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Alerts from './Components/Alerts';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState("");
  const [alertType,setAlertType] = useState("");
  // const [loc,setLoc] = useState("");

  // document.body.style.backgroundColor = '#1d5a79';


  const showAlert = (msg, type) => {
    setAlert(msg);
    setAlertType(type);
  setTimeout(()=>{
        setAlert("");
        setAlertType("");
      }, 3000)
    }

  return (
    <>
    <NoteState>
      
      <Router>

      <Navbar/>
      <Alerts msg = {alert} type = {alertType} />
      <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/contact" element={<Contact/>}></Route>

          <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>

          <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>

      </Routes>
      <Footer/>

    </Router>
    </NoteState>
    </>
  );
}

export default App;