import { useState,useEffect } from "react";
import { getDistricts } from "../services/api";

function Admin(){
    const[districts,setDistricts] = useState([]);

    useEffect(()=>{
    loadDistricts();
    },[]);

    const loadDistricts = async ()=>{
        const data = await getDistricts();
        setDistricts(data.districts);
    };

    return(
        <div className="p-6">
         <h1 className="text-2xl font-bold"> Admin Panel</h1>
         {districts.map((districts)=>{
            <div key={d.id} className="border p-3 mt-2">
                <h2>{d.name}</h2>
                <p>{d.province}</p>

                <button className="bg-yellow-500 text-white px-2 py-1"> Edit</button>
                 </div>
         })}   
        </div>
    )
}

export default Admin;