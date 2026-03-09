import { useEffect,useState } from "react";
import { getDistricts } from "../services/api";
import DistrictCard from "../components/DistrictCard";

function Home(){

    const [districts,setDistricts]= useState([]);
    const [page,setPage]= useState(1);
    const[pages,setPages]= useState(1);

    useEffect(()=>{
        const fetchDistricts = async ()=>{
            try{
                const data = await getDistricts();

                setDistricts(data.districts);
               setPage(data.page);
               setPages(data.pages);
            }catch(error){
                console.error(error)
            }
        };

        fetchDistricts();
    },[])

    return(
        <div>
            <h1 className="text-blue-500"> Welcome to Sri Lanka</h1>

            {districts.map((district)=>(
                <DistrictCard key={district._id} district={district}/>
        ))}
        </div>
    )
}
export default Home;