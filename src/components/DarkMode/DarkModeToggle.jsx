"use client"
import React, { useContext } from 'react'
import './dark.scss'
import { ThemeContext } from '../../contextApi/ThemeContext';

export default function DarkModeToggle() {
    const {toggle,mode} = useContext(ThemeContext);

  return (
    <div className='darkContainer' onClick={toggle}>
        <div className="icon">🌙</div>
        <div className="icon">🔆</div>
        <div 
        className="ball"
        style={mode==="light" ? {left:"2px"}:{right:"2px"}}
        />
    </div>
  )
} 
