import React from 'react'
import './button.scss'
import Link from 'next/link'
export default function Button({props,url}) {
  return (
    <Link href={url}>
        <button className='btn'>
            {props}
        </button>
    </Link>
    
  )
}
