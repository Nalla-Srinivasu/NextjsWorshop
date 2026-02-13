import Link from "next/link"

const Headers = () => {
    return(
        <div style={{display:"flex", gap:"20px", background:"white", color:"black"}}>
            <Link href="/office/staff/frontend">
                Frontend Team
            </Link>
            <Link href="/office/staff/backend">
                Backend  Team
            </Link>
        </div>        

    )
}

export default Headers