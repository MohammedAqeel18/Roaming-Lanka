import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import DistrictPage from "./pages/DistrictPage";
function App(){
  return (
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/district/:id" element={<DistrictPage/>}/>
            

    </Routes>

    
  );
}

export default App;