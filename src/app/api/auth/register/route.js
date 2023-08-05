import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bycrypt from 'bcryptjs'

export const POST =async(request) =>{
    const{Name,email,password} = await request.json();
    console.log("name,email,password:",Name,email, password)

    await connect();
    const hashedPassword = await bycrypt.hash(password,5) 
    const newUser = new User({
        Name,
        email,
        password:hashedPassword
    })
    try {
       await  newUser.save();
       return new NextResponse("user has been created",{status:201})
    } catch (error) {
      return new NextResponse(error.message,{status:500});  
    }
}