import Link from 'next/link'
import './portfolio.scss'
import Image from 'next/image'

export const metaData ={
  title:"mohdtanveer|PortFolio",
  descritption: "websites,mobile Apllication and more..."
}

export default function Portfolio() {
  return (
    <div className='portfolioContainer'>
      <h1 className="title">choose a gallery</h1>
      <div className="items">
        <Link className="item" href="/portfolio/illustrations">
          <Image src="/illustration.png" alt="Illustrations" fill={true}/>
          <span className='title'>Illustrations</span>
        </Link>
        <Link className="item" href="/portfolio/websites">
          <Image src="/websites.jpg" alt="websites" fill={true}/>
          <span className='title'>Websites</span>
        </Link>
        <Link className="item" href="/portfolio/applications">
          <Image src="/apps.jpg" alt="applications" fill={true}/>
          <span className='title'>Applications</span>
        </Link>
      </div>
    </div>
  )
}
