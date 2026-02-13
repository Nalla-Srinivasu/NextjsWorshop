

const Page =  async ({params}) => {
    const {username} = await params
    console.log("username:", username); // Terminal, not browser
    return(
        <div>
            <div>Hi, {username[0]}</div>
            {/* <div>Hi, {username[1]}</div> */}
        </div>

    )
}

export default Page