"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

const Page = () => {
    const [uselogin,setLogin] = useState(true);
    const router = useRouter();
    
    const userHandler = () => {
        if(uselogin){
            router.push('/dashboard')
        }
    }
    return(
        <div align="center">
            <h1>Welcome to nex.js</h1>
            <button onClick={userHandler}>Login</button>
        </div>
    )
}

export default Page