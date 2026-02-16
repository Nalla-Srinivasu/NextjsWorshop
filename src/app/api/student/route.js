import { DBconnection } from "@/app/utilies/config/db";
import { NextResponse } from "next/server";

const connectoDb = async ()=>{
    await DBconnection()
}

connectoDb();

export async function GET(request) {
    return new NextResponse("Hello, Next.js API!");
}