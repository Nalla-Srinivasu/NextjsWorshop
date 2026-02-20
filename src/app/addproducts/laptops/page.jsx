"use client"

import React, { useState } from "react"
import styled from './product.module.css'

const Page = () => {
    const [name,setName] = useState()
    const [model,setModel] = useState()
    const [price,setPrice] = useState()

    const laptopHandler = async(e) => {
        e.preventDefault()
        const body = JSON.stringify({title:name,model:model, price:price});
        const respons = await fetch("http://localhost:3000/api/products/laptops",{
            method:'POST',
            "Content-Type":"application/json",
            body:body
        });

        if(respons.ok){
            alert("laptop added successfully")
        }

        setName("")
        setModel("")
        setPrice("")
    }

    return(
        <div className={styled.mainContainer}>
            <h2 className={styled.title}>Laptop Form</h2>
            <form className={styled.formsection} onSubmit={laptopHandler}>
                <div className={styled.forminput}>
                    <h5 className={styled.title}>Name</h5>
                    <input type="text" className={styled.inputitem} value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className={styled.forminput}>
                    <h5 className={styled.title}>Model</h5>
                    <input type="text" className={styled.inputitem} value={model} onChange={(e)=>setModel(e.target.value)}/>
                </div>
                <div className={styled.forminput}>
                    <h5 className={styled.title}>Price</h5>
                    <input type="text" className={styled.inputitem} value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <button type="submit" className={styled.btn}>Add laptop</button>
            </form>
        </div>
    )
}

export default Page