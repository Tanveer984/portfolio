import './blogpost.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';


async function getData(id){
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache:"no-store"});
  if(!res.ok){
   return notFound();
  };
  return res.json();
}


export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: post.title,
    desc:post.desc,
  }
}

export default async function BlogPost({params}) {
  let data = await getData(params.id)
  return (
    <div className='blogpost_container'>
      <div className="topblog">
        <div className="info">
          <h1 className='blog_title'>{data.title}</h1>
          <p className='desc'>{data.desc}</p>
          <div className='author'>
          <Image
          src={data.img}
          alt='avatar'
          width={40}
          height={40}
          className='avatar'
          />
          <span className="username">{data.userName}</span>
          </div>
        </div>
        <div className="blogImage">
        <Image
          src={data.img}
          alt='blogpostImage'
          fill={true}
          className='Blog_image'
        />
        </div>
      </div>
      <div className="blogText">
        <p className="text">
          {data.content}
        </p>
      </div>
    </div>
  )
}
