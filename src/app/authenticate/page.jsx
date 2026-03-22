
import Link from 'next/link'
import {auth} from './auth'
import { redirect } from 'next/navigation'

const LandingPage = async() => {

    const sesssion = await auth()
    if(!sesssion){
        redirect('/authenticate/api/auth/signin')
    }

    return(
        <div>
            <h1>Welcome to my application</h1>
            <Link href="/authenticate/api/auth/signout">
                <button>Sign Out</button>
            </Link>
        </div>
    )
}

export default LandingPage