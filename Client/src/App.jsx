import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail"; // Conflict resolution: Added Detail import
import MyAccount from "./components/MyAccount/MyAccount"; // Conflict resolution: Added MyAccount import
import Footer from "./components/Footer/Footer"; // Conflict resolution: Added Footer import

function App() {

  return (
    <>

      <div className='bg-primary/20 font-RedHat'>
        Hola Front 💜
      </div>
    
    </>
  )
}

export default App;
