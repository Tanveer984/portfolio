import Image from 'next/image'
import styles from './page.module.css'
import hero from 'public/hero.png'
import Button from '@/components/button/button';
// import { Link } from 'next/link';


// async function getData(){
//   const res = await fetch(`http://localhost:3000/api/posts`,{cache:'no-store'});
//   if(!res.ok) throw new Error("failed to fetch Data!");
//   return res.json();
// }


export default async function Home() {
  // const data = await getData();
  // console.log("🚀 ~ file: page.jsx:16 ~ Home ~ d̥ata:", data)

  return (
    <div className={styles.homemain}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your  Digital Products.
        </h1>
        <p className={styles.desc}>Turing your ideas into reality. we bring togather the tech team from global community</p>
        <Button props={"see our works"} url={"portfolio"}/>
      </div>
      <div className={styles.item}>
      <Image src={hero} alt="KYChero" className={styles.image} />
      </div>
      {/* {data.map(ele=>
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
        )} */}
    </div>
  )
}
