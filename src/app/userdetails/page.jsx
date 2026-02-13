import { Fragment } from "react";

const Page = async() => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const response =  await fetch(url);
    const sample_data = await response.json()
    
    return(
        <div style={{background:"white",color:"black"}}>
            {
                sample_data.map((item,i) => {
                    return (
                        <Fragment key={i}>
                            {`${i+1} - ${item.title}`}
                            <hr />                        
                        </Fragment>
                        
                    )
                })
            }
        </div>
    )
}

export default Page