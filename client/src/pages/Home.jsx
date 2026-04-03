import { use, useEffect,useState } from "react";
import { getDistricts } from "../services/api";
import DistrictCard from "../components/DistrictCard";

function Home(){

    const [districts,setDistricts]= useState([]);
    const [page,setPage]= useState(1);
    const [keyword,setKeyword]= useState("");
    const [pages,setPages]= useState(1);
    useEffect(()=>{
        const fetchDistricts = async ()=>{
            try{
                const data = await getDistricts(keyword, page);

                setDistricts(data.districts);
               setPage(data.page);
               setPages(data.pages);
            }catch(error){
                console.error(error)
            }
        };

        fetchDistricts();
    },[])

    const loadDistricts = async (searchKeyword = "", pageNumber="") =>{
        try{
            const data = await getDistricts(searchKeyword, pageNumber);

            setDistricts(data.districts);
           setPage(data.page);
           setPages(data.pages);
        }catch(error){
            console.error(error);
        }
    };

    useEffect(()=>{
    loadDistricts();
    },[]);

    return(
        <div>

            <form
            onSubmit={(e)=>{
                e.preventDefault();
                loadDistricts(keyword,1);
                
            }}
            className="flex justify-center mb-6"
            >

                <input
                type="text"
                placeholder="Search districts..."
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
                className="border p-2 w-1/2 rounded-1"
                />
            <button type="submit" className="bg-blue-600 text-white px-4 rounded-r"> 
                Search
            </button>
            </form>
            <h1 className="text-blue-500"> Welcome to Sri Lanka</h1>

            {districts.map((district)=>(
                <DistrictCard key={district._id} district={district}/>
        ))}
        </div>
    )
}
export default Home;