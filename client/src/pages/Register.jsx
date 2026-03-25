import { useState } from "react";
import API from "../services/api";

function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const submitHandler = async(e)=>{
        e.preventDefault();

        try{
            const {data} =await API.post("/users/register",{
                name,
                email,
                password
            });

            localStorage.setItem("userInfo", JSON.stringify(data));

            alert("Account created");

        }catch(error){
            alert("Registration Failed");
        }
    };

    return(
        <div className="max-w-md mx-auto mt-10">
         <h1 className="text-3xl font-bold mb-6 text-center"> Register</h1>   
        
        <form onSubmit={submitHandler} className="space-y-4">
        <input
        type="text"
        placeholder="enter your name"
        className="border w-full p-2 rounded"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />

        <input
        type="email"
        placeholder="enter your email"
        className="border w-full p-2 rounded"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="enter your password"
        className="border w-full p-2 rounded"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded" type="submit"> Signup</button>
        </form>
        </div>
    )
}

export default Register;