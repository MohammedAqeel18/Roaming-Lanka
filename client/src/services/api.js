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
   export const getDistricts = async (keyword = "", pageNumber = "", province = "") => {
  const { data } = await API.get(
    `/districts?keyword=${keyword}&page=${pageNumber}&province=${province}`
  );

  return data;
};

export const createDisrict = async (districtData) => {
    const {data} = await API.post("/districts", districtData);
    return data;
};

export const deleteDistrict = async(id, token) => {
    const {data}= await API.delete(`/districts/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}


export default API;