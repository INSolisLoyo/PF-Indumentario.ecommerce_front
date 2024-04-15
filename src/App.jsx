import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail";
import MyAccount from "./components/MyAccount/MyAccount";
import Footer from "./components/Footer/Footer";
import Cards from "./components/Cards/Cards";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import AboutUs from "./components/About/AboutUs";
import UnsubscribeConfirmation from "./components/NewsLetter/unsubscribe";
import NewsLetter from "./components/NewsLetter/NewsLetter";

function App() {
  const location = useLocation();

  // Verifica si la ruta actual es /admin
  const isAdminRoute = location.pathname === "/admin";

  return (

    <div className="m-0 p-0 w-full h-auto bg-gradient-to-t from-primary/40">
      {/* Renderiza el NavBar solo si no estás en la ruta /admin */}
       <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/create" element={<Create />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/about/:section" element={<About />} />
        <Route path="/unsubscribe" element={<UnsubscribeConfirmation />} />
        {/* <Route path="/" element={<NewsLetter />} /> */}
        


      </Routes>

      {/* Renderiza el Footer solo si no estás en la ruta /admin */}
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
