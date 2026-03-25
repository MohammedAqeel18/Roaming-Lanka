import { useState } from "react";
import API from "../services/api";

function Login(){
    const [email, setEmail]  = useState("");
    const [password,setPassword] = useState("");

    const submitHandler = async (e)=>{
        e.preventDefault();

        try{

            const {data} = await API.post("/users/login", {
            email,
            password
            
            });

            localStorage.setItem("userInfo", JSON.stringify(data))

            alert("Login Successful");

        } catch(error){
            console.error(error)
            alert("Invalid email or password")
        }
    };

    return(
        <div className=" max-w-md mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-center">  Login</h1>

            <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                 <label> Email</label>

                <input
                type="email"
                className="border w-full p-2 rounded"
                value={email}
                placeholder="enter your email"
                onChange={(e)=>setEmail(e.target.value)}
                autoComplete="email"
                />
            
                <input
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="border w-full p-2 rounded"
                autoComplete="password"
                />
                <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded"> Login</button>
                </div>
            </form>
        </div>
    )

}

export default Login;