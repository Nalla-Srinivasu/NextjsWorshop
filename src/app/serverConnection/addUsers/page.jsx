const { DBconnection } = require("@/app/utiles/config/db")
import userModel from "@/app/utiles/models/adduser"
// import styled from './User.module.css'

import React from "react"
const addUsers = () => {
    const addUserData = async(formData) => {
        "use server"
        await DBconnection()
        let name = formData.get("userName")
        let mobile = formData.get("userMobile")
        let age = formData.get("userAge")

        await userModel.create({name:name,mobile:mobile,age:age})
    }
    return(
        <div className="form_section">
            <h5>ADD Users</h5>
            <form action={addUserData}>
                <div>
                    <label for="name" className="form-label">Name</label>
                    <input type="text" required className="form-control" id="name" name="userName"/>
                </div>
               <div>
                    <label for="mobile" className="form-label">Mobile</label>
                    <input type="text" required className="form-control" id="mobile" name="userMobile"/>
                </div>
                <div>
                    <label for="age" className="form-label">Age</label>
                    <input type="text" required className="form-label" id="age" name="userAge"/>
                </div>
                <input type="submit" value="Add user"/>
            </form>
        </div>
    )
}

export default addUsers;