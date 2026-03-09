import { useState,useEffect  } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function DistrictPage(){
    const {id} = useParams();

    const [district,setDistrict] = useState(null);

    useEffect(()=>{
        const fetchDistrict= async()=>{

            const {data} = await API.get(`/districts/${id}`);
            setDistrict(data)
        }

                    fetchDistrict();

    },[id]);

    if(!district) return <h3> Loading .. .. ..</h3>

    return(
        <div className="max-w-4xl mx-auto p-6">
        <img
        src={district.image}
        className="w-full h-96 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-4">
        {district.name}

        </h1>

        <p className="text-gray-500"> 
          {district.province}  
        </p>

        <p className="mt-4">
        {district.description}    
        </p>

        <p className="mt-4 text-yellow-500 font-bold">
       ⭐  {district.rating}   
        </p>
        </div>
    )
}

export default DistrictPage;