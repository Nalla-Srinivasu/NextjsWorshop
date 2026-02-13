
'use client'

import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    const userLoginhandler = () => {
        router.back('/')
    }
    return(
        <div align="center">
            <h1>Welcome to dasboard</h1>
            <button onClick={userLoginhandler}>Back</button>
        </div>
    )
}

export default Page