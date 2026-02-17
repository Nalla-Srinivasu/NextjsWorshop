import { DBconnection } from "@/app/utilies/config/db";
import MobileModel from "@/app/utilies/models/mobile";
import { NextResponse } from "next/server";

const connectDB = async ()=>{
    await DBconnection
}

connectDB

export async function GET() {
    const mobile_data = await MobileModel.find({})
    return NextResponse.json({mobile_data})
}

export async function POST(request) {
    const {title,model,price} = await request.json()

    await MobileModel.create({
        title,model,price
    })

    return NextResponse.json({success:"mobile data added successfully"})
}

export async function put(request) {

    const mobileId = await request.nextUrl.searchParams.get("id");

    const {newTitle:title,newModel:model,newPrice:price} = await request.json()

    await MobileModel.findByIdAndUpdate(mobileId,{
        title,model,price
    })
    
    return NextResponse.json({success:"mobile is updated successfully"})
}