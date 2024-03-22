import Sale from "./components/sale/Sale";
import Orders from "./components/orders/Orders";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail";
import MyAccount from "./components/MyAccount/MyAccount";
import Footer from "./components/Footer/Footer";
// import Create from "./components/Create/Create";

function App() {
  return (
    <div className="m-0 p-0 w-full h-auto bg-gradient-to-t from-primary/40">
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myaccount" element={<MyAccount />} />
        {/* <Route path="/create" element={<Create />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
