import { DBconnection } from "@/app/utiles/config/db";
import { NextResponse } from "next/server";

const connectoDb = async ()=>{
    await DBconnection()
}

connectoDb();




export async function GET(request) {
     return NextResponse.json({student:"all student data"})
}