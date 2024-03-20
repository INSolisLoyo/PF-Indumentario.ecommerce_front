import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import NavBar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <div>

        <NavBar />

        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
