import Image from 'next/image'
import React from 'react'
import './about.scss'
import Button from '@/components/button/button'


export const metadata = {
  title: 'About us',
  description: 'About Us',
}

export default function About() {
  return (
    <div className='abtcontainer'>
      <div className='imageContainer'>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="KYCABout"
          className='aboutImg'
          fill={true}
        />
        <div className='imgText'>
          <h1 className='imgTitle'>Digital storytellers</h1>
          <p className='imgDesc'>Handcraft award winning digital experince</p>
        </div>
      </div>
      <div className='textContainer'>
        <div className='textItem'>
          <h1 className='title'>who we are?</h1>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dicta vitae
            necessitatibus quam error culpa quo exercitationem optio quibusdam autem eaque mollitia,<br/> iste enim suscipit temporibus corrupti ad veritatis aperiam.</p>
        </div>
        <div className='textItem'>
          <h1 className='title'> what we do?</h1>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum ullam nisi similique quo sit ex saepe quod dolor officia
            <br/>qui laborum libero soluta dolore,
            voluptate aspernatur adipisci nemo pariatur.</p>
            <Button props={"contact"} url={"contact"}/>
        </div>
      </div>
    </div>
  )
}
