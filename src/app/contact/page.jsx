import Image from 'next/image'
import './page.scss'
import Button from '@/components/button/button'

export const metadata = {
  title: 'MohdTanveer|contactUs',
  description: 'kindly share your concern with us',
}

export default function page() {
  return (
    <div className='contactContainer'>
      <h1 className='title'>Let's Keep in touch</h1>
      <div className='contact_img_form'>
        <div className='item'>
          <Image src="/contact.png" alt='contact' fill={true} className='contactImg'/>
        </div>
        <div className='item textItem'>
          <input type="text" placeholder="Name" className='input'/>
          <input type="text" placeholder="Email" className='input'/>
          <textarea className='textArea' name="message" id="message" cols="30" rows="10" placeholder='type your query' />
          <Button url={"#"} props="Submit"/>
        </div>
      </div>
    </div>
  )
}
