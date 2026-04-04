import {  useEffect,useState } from "react";
import { getDistricts } from "../services/api";
import DistrictCard from "../components/DistrictCard";
import Pagination from "../components/Pagination";
function Home(){

    const [districts,setDistricts]= useState([]);
    const [page,setPage]= useState(1);
    const [keyword,setKeyword]= useState("");
    const [pages,setPages]= useState(1);
    const [province, setProvince] = useState("");

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

        searchKeyword = "",
        pageNumber ="",
        selectedProvince= ""
        try{
            const data = await getDistricts(
                searchKeyword,
                pageNumber,
                selectedProvince
            );

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
                loadDistricts(keyword,1,province);
                
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

            <div className="flex justify-center mt-4">
                <select value={province}
                onChange={(e)=>{setProvince(e.target.value);
                loadDistricts(keyword,1,e.target.value);
    
                }}
                className="border p2 rounded"
                >
                    <option value=""> All Provinces</option>
                    <option value="Western"> Western Province</option>
                    <option value="NorthCentral"> North Central Province</option>
                     <option value="South"> South Province</option>
                    <option value="Central"> Central Province</option>
                    <option value="Eastern"> Eastern Province</option>
                    <option value="NorthWestern"> NorthWestern Province</option>
                    <option value="North"> North Province</option>
                    <option value="Uva"> Uva Province</option>
                    <option value="Sabaragamuva"> Sabaragamuva Province</option>

                </select>
            </div>
            <h1 className="text-blue-500"> Welcome to Sri Lanka</h1>

            {districts.map((district)=>(
                <DistrictCard key={district._id} district={district}/>
        ))}

        <Pagination
        page={page}
        pages={pages}
        onPageChange={(p)=> loadDistricts(keyword,p,province)}
        />
        </div>
    )
}
export default Home;