import { useEffect,useState } from "react";
import { getDistricts } from "../services/api";

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
                <div key={district._id}>
                   <h3>  {district.name}</h3>
                   <p> {district.description} </p> 
                </div>
        ))}
        </div>
    )
}
export default Home;