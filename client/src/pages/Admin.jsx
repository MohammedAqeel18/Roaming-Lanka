import { useState,useEffect } from "react";
import { getDistricts } from "../services/api";
import { deleteDistrict } from "../services/api";
import { createDisrict } from "../services/api";
function Admin(){
    const[districts,setDistricts] = useState([]);
    const [name,setName] = useState("");
    const [province,setProvince] = useState("");
    const [description,setDescription] = useState("");
    const[image,setImage] = useState("");

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

    const handleCreate = async()=>{
    try{
        await createDisrict({
            name,
            province,
            description,
            image,
        });
        loadDistricts();

        setName("");
        setProvince("");
        setDescription("");
        setImage("");

    
    }catch(error){
        console.error
    }
    }
    return(
        <div className="p-6">
         <h1 className="text-2xl font-bold"> Admin Panel</h1>

         <div className="border p-4 mt-4">
          <h2 className="text-xl font-bold mb-2"> Add New District</h2>
          <input
          type="text"
          placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-2 w-full mb-2"
          />  

          <input
          type="text"
            placeholder="Province"
            value={province}
            onChange={(e)=>setProvince(e.target.value)}
            className="border p-2 w-full mb-2"
            />

           <textarea
           placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            className="border p-2 w-full mb-2"
            
           />
            <input
            placeholder="Image URL"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            className="border p-2 w-full mb-2"

            />
        <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded"> Create</button>
         </div>
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