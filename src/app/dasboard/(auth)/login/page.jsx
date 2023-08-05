"use client"
import { useState } from 'react'
import './login.scss'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const session = useSession();
  const router = useRouter()
  const [credentials,setCredentials] = useState({
    email:"",
    password:""
  });
  if(session.status === "loading") return <p>Loading...</p>
  if(session.status=== "authenticated"){
    router?.push('/dasboard')
  }
  const handleChange =(e)=>{
    const {name,value} = e.target;
    setCredentials({...credentials,[name]:value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    signIn("credentials",credentials)
  }
  return (
    <div className='loginContainer'>
  <form onSubmit={handleSubmit} className='form'>
  <button className='btn' onClick={()=>signIn('google')}>Login With Google</button>

<input type="email"
  name="email"
  placeholder='enter your email'
  autoComplete='off'
  className="input"
  onChange={handleChange}
  required
/>

<input type="password"
  name='password'
  placeholder='password'
  autoComplete='off'
  className='input'
  onChange={handleChange}
  required
/>

<button type='submit' className="btn">login</button>
<Link href={'/dasboard/register'}>haven't account? register here</Link>
</form>
</div>
  )
}
