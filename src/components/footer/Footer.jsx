import React from 'react'
import'./footer.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className='ftrmain'>
      <div>©2023 KYC.All rights are reserved.</div>
      <div  className='image'>
        <Link href="#"><Image src='/1.png' alt="KYC fb" width={15} height={15}/></Link>
        <Link href="#"><Image src='/2.png' alt="KYC instagram" width={15} height={15}  /></Link>
        <Link href="#"><Image src='/3.png' alt="KYC twitter" width={15} height={15}  /></Link>
        <Link href="#"><Image src='/4.png' alt="KYC youtube" width={15} height={15}  /></Link>
      </div>
    </div>
  )
}
