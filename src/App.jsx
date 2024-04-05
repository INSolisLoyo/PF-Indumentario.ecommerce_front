import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail";
import MyAccount from "./components/MyAccount/MyAccount";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Create from "./components/Create/Create";
import CartJ from "./components/CartJerry/CartJ";
import CartDetailJ from "./components/CartJerry/CartDetailJ";


function App() {
  return (
    <div className="m-0 p-0 w-full h-auto bg-gradient-to-t from-primary/40">
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/create" element={<Create />} />
        <Route path="/cartj" element={<CartJ />} />
        <Route path="/cartdetailj" element={<CartDetailJ />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
