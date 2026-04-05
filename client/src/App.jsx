import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import DistrictPage from "./pages/DistrictPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

function App(){
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/district/:id" element={<DistrictPage/>}/>
      <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
       <Route path="admin" element={<Admin/>}/>
    </Routes>

    
  );
}

export default App;