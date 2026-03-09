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

          <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4"> Reviews </h2>

          {district.reviews.length === 0 && (
            <p> No reviews yet</p>
          )}  

          {district.reviews.map((review, index)=>(
            <div key={index} className="border p-4 rounded-lg mb-3">
                <h4 className="font-semibold"> {review.name}</h4>

                <p className="text-gray-700"> {review.rating}</p>
            
            <p className="text-gray-700"> {review.comment}</p>
            </div>
          ))}
          </div>
        <p className="mt-4 text-yellow-500 font-bold">
       ⭐  {district.rating}   
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4"> Write a review</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1"> Rating </label>

            <select className="border p-2 rounded w-full">

               <option value=""> Select Rating</option>
               <option value="1"> 1- Poor</option>
               <option value="2"> 2 - Fair</option>
               <option value="3"> 3 - Good</option>
               <option value="4">4 - Very Good</option>
               <option value="5"> 5 - Excellent</option> 
            </select>
          </div>

          <div>
            <label className="block mb-1"> Comment</label>
          
          <textarea className="border p-2 rounded w-full " rows="4"/> 
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded"> Submit Review </button>
        </form>

        </div>
        </div>
        
    )
}

export default DistrictPage;