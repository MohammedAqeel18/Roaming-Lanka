import { Link } from "react-router-dom";
import Rating from "./Rating";
function DistrictCard({district}){
    return(
                <Link to={`/district/${district._id}`}> 

        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">

        <img
         src={district.image}
         className="w-full h-48 object-cover"
         />   

         <div className="p-4">
        <h3 className="text-lg font-semibold">
        {district.name}
        </h3>

        <p className="text-sm text-gray-500">
           {district.province} 
        </p>

        <p className="text-sm text-gray-500"> {district.description}</p>
         
       <Rating rating={district.rating} />
         </div>

        </div>
        </Link>
    )
}

export default DistrictCard;