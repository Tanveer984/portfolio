
import Post from "@/models/Post";
import connect from "@/utils/db"
import { NextResponse } from "next/server"

export const GET =async(request)=>{
    const url = new URL(request.url);
    const username = url.searchParams.get("username")
    try{
        await connect()
        const Posts = await Post.find(username && {username});
        return new NextResponse(JSON.stringify(Posts),{status:200})
    }
    catch(err){
        return new NextResponse(err.message,{status:500})
    }
}

export const POST =async(request)=>{
    const body = await request.json();
    const newPost = new Post(body);
    try{
        await connect()
        await newPost.save();
        return new NextResponse("post has been created! ",{status:201})
    }
    catch(err){
        return new NextResponse(err.message,{status:500})
    }
}