import Link from 'next/link'
import React from 'react'
import  './navbar.scss'
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links =[
  {
    id:1,
    title:"Home",
    url:"/"
  },
  {
    id:2,
    title:"portfolio",
    url:"/portfolio"
  },
  {
    id:3,
    title:"Blogs",
    url:"/blog"
  },
  {
    id:4,
    title:"About",
    url:"/about"
  },
  {
    id:5,
    title:"Contact",
    url:"/contact"
  },
  {
    id:6,
    title:"Dasboard",
    url:"/dasboard"
  },
];

export default function Navbar() {
  const session = useSession()
  return (
    <div className='navmain'>

      <Link href={"/"} className='navlogo'>KYC</Link>
  
      <div className='navlinks'>
        <DarkModeToggle/>
      {links.map(link=><Link href={link.url} key={link.id}>
        {link.title}
      </Link>)}
      {
        session.status==="authenticated"?
      <button className='navbtn' onClick={()=>signOut()}>logout</button>
      :""
      }
      </div>
    </div>
  )
}
