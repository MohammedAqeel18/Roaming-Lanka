import { useEffect,useState } from "react";
import API from "../services/api";

function Home(){

    const [districts,setDistricts] = useState([])

    useEffect(()=>{
        const fetchDistricts = async()=>{
            try{
                const {data} = await API.get("/districts")

                setDistricts(data.districts)
            }catch(error){
                console.error(error)
            }
        };

        fetchDistricts();
    },[])
    return (
        <div>
            <h2> Welcome to Roaming Lanka</h2>
            <p> Discover the beauty of Sri Lanka</p>

            {districts.map((district)=>(
                <div key={district._id}>
                 <h2>{district.name} </h2>
                 <h3> {district.province}</h3>
                 <h4> {district.description}</h4>   
                 <h4> {district.rating}</h4>
                </div>
            ))}
        </div>
    )
}

export default Home;