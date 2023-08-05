'use client'
import Link from 'next/link'
import './register.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'



export default function Register() {
  const router = useRouter();
  const [formData, setformData] = useState({
    Name: "",
    email: "",
    password: ""
  });
  const [err, setErr] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      console.log(formData)
      res.status === 201 && router.push('/dasboard/login?success=Account has been created')
    } catch (error) {
      setErr(!err)
    }
    // console.log(formData)
  }
  return (
    <div className='register_container'>
      <form onSubmit={handleSubmit} className='form'>

        <input type="text"
          name='Name'
          placeholder='username'
          autoComplete='off'
          className='input'
          onChange={handleChange}
          required 
          />

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

        <button type='submit' className="btn">sign Up</button>
        {err && 'something went wrong.'}
        <Link className="existed_account" href='/dasboard/login'>Login with existed account</Link>
      </form>
    </div>
  )
}
