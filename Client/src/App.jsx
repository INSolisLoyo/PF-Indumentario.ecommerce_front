import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail"; // Conflict resolution: Added Detail import
import MyAccount from "./components/MyAccount/MyAccount"; // Conflict resolution: Added MyAccount import
import Footer from "./components/Footer/Footer"; // Conflict resolution: Added Footer import
import Create from "./components/Create/Create";

function App() {

  return (
    <>

        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/create" element={ <Create /> } />
        </Routes>

        
        <Footer />
        
  
    
    </>
  )
}

export default App;
