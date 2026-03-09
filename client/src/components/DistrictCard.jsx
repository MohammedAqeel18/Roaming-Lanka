function DistrictCard({district}){
    return(
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
         
        <p className="mt-2 text-yellow-500 font-semibold"> {district.rating}</p> 
         </div>

        </div>
    )
}

export default DistrictCard;