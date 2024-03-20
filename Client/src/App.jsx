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
      <div className="m-0 p-0 w-full h-auto bg-gradient-to-t from-primary/40">

        <NavBar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          {/* Conflict resolution: Added routes for Detail and MyAccount */}
          <Route path="/detail" element={<Detail />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>

        {/* Conflict resolution: Added Footer */}
        <Footer />
        
      </div>
    </>
  );
}

export default App;
