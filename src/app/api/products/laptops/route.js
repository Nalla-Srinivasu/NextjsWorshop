import { DBconnection } from "@/app/utiles/config/db";
import laptopModel from "@/app/utiles/models/laptop";
import { NextResponse } from "next/server";

const connectDB = async () => {
    await DBconnection()
}

connectDB();

export async function GET() {
    const laptopData = await laptopModel.find({})
    return NextResponse.json({laptopData})    
}


export async function POST(request){
    const {title,model,price} = await request.json()

    await laptopModel.create({title,model,price});

    return NextResponse.json({success:"laptop data addded successfully"})
}

export async function PUT(request) {
    const laptopID =  await request.nextUrl.searchParams.get("id")

    const {newTitle:title,newModel:model,newPrice:price} = await request.json();
    
    await laptopModel.findByIdAndUpdate(laptopID,{title,model,price})

    return NextResponse.json({success:"laptop data is updated successfully"})
}


export async function DELETE(request) {
    const laptopID = await request.nextUrl.searchParams.get("id")
    await laptopModel.findByIdAndDelete(laptopID)
    return NextResponse.json({success:"laptop data is deleted"})
}
