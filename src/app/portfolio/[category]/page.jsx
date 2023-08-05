import React from 'react'
import './category.scss'
import Button from '@/components/button/button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'


const getData =(cat)=>{
  const data = items[cat]

  if(data)return data;

  return notFound(); 
}

export default function category({ params }) {
  const data = getData(params.category)

  return (
    <div className='category'>
      <h1 className='cate_title'>{params.category}</h1>
      {data.map(ele=>
      <div className="item" key={ele.id}>
        <div className="textContainer">
          <h2 className="subtitle">{ele.title}</h2>
          <p className='text'>{ele.desc}</p>
          <Button props="see more" url="#" />
        </div>
        <div className="imageContainer">
          <Image src={ele.image} alt={ele.title} fill={true} className='img' />
          zoom
        </div>
      </div> 
        )}
      
    </div>
  )
}
