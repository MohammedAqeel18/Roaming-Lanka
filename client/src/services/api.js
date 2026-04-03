import axios from 'axios';


const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

API.interceptors.request.use((req)=>{
    const userInfo = localStorage.getItem("userInfo");

    if(userInfo){
        const token = JSON.parse(userInfo).token;
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;

});
    export const getDistricts = async (keyword = "", pageNumber = "") => {
        const { data } = await API.get(
            `/districts?keyword=${keyword}&page=${pageNumber}`
        );
        return data;
    };


export default API;