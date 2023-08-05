"use client"
import React from 'react'
import './page.scss'
import Link from 'next/link';
import Image from 'next/image';

async function getData(){
  const res = await fetch(`http://localhost:3000/api/posts`,{cache:'no-store'});
  if(!res.ok) throw new Error("failed to fetch Data!");
  return res.json();
}


export const metadata = {
  title: 'Blogs by Mohd tanveer',
  description: 'Blogs to enhsnce your knowledge.',
}

export default async function Blog() {
  const data = await getData();
  console.log("datablogpage",data)
  return (
    <div className='blogcontainer'>
      {data.map(ele=>
      <Link href={`/blog/${ele._id}`} className='blog_Link_Container' key={ele._id}>
        <div className="imageContainer">
          <Image
          src={ele.img}
          alt="blogImage"
          width={200}
          height={180}
          className='img'
          />
        </div>
        <div className="text_parent_container">
          <h1 className='title'>{ele.title}</h1>
          <p className="desc">{ele.desc}</p>
        </div>
      </Link>
        )}
      
      </div>
  )
}
