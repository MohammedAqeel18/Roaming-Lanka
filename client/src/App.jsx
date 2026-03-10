import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import DistrictPage from "./pages/DistrictPage";
import Login from "./pages/LoginPage";
function App(){
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/district/:id" element={<DistrictPage/>}/>
      <Route path="login" element={<Login/>}/>

    </Routes>

    
  );
}

export default App;