import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api"

});

export const getDistricts = async (keyword = "" , pageNumber="")=>{
    const {data} = await API.get(
    `/districts?keyword=${keyword}&page=${pageNumber}`
    )

    return data;
};

export default API