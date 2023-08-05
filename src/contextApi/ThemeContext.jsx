"use client"
import { createContext, useState } from "react"

// import create context.
export const ThemeContext = createContext();

export const  ThemeProvider =({children})=>{
    const [mode,setMode] = useState("dark")

    const toggle =()=>{
        setMode((prev)=>(prev==="dark"?"light":"dark"));
        // console.log("toggle Fired") 
    }
   return<ThemeContext.Provider value={{toggle,mode}}>
        <div className={`theme ${mode}`}>
            {/* space is necessary between the  two classes */}
        {children}
        </div>
    </ThemeContext.Provider>
}
