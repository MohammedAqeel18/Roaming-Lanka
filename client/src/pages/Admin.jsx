import { useState,useEffect } from "react";
import { getDistricts } from "../services/api";
import { deleteDistrict } from "../services/api";

function Admin(){
    const[districts,setDistricts] = useState([]);

    useEffect(()=>{
    loadDistricts();
    },[]);

    const loadDistricts = async ()=>{
        const data = await getDistricts();
        setDistricts(data.districts);
    };

    const handleDelete = async(id)=>{
        if(window.confirm("Are you sure you want to delete this district?")){
            await deleteDistrict(id);
            loadDistricts();
        }
    };


    return(
        <div className="p-6">
         <h1 className="text-2xl font-bold"> Admin Panel</h1>
        {districts.map((district)=>(
            <div key={district._id} className="border p-4 my-4 rounded">
                <h2 className="text-xl font-bold">{district.name}</h2>
                <p className="text-gray-600">{district.province}</p>
            <button className="bg-yellow-500 txt-white px-2 py-1"> Edit </button>
            <button onClick={()=>handleDelete(district._id)} className="bg-red-500 txt-white px-2 py-1 ml-2"> Delete </button> 
            </div>
        ))}

        </div>
    )
}

export default Admin;