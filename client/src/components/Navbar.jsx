import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">
            Roaming Lanka
            </Link>

        <div className="space-x-4"> 
            <Link to="/" className="hover:text-gray-300 font-bold">
            Home
            </Link>

            <Link to="/login" className="hover:text-gray-300 font-bold">
            Login
            </Link>

            </div>
        </nav>
    )
}

export default Navbar;