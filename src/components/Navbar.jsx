import React, { useState } from 'react'
import logo from './../assets/image/cryptocurrency.png'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineHome , AiOutlineLineChart , AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { RiExchangeDollarFill } from 'react-icons/ri'
import { FaRegNewspaper } from 'react-icons/fa'
import { motion ,AnimatePresence } from 'framer-motion'

    const NavbarItem=[
        {id:1 , icon:<AiOutlineHome /> , text :'Home'},
        {id:2 , icon:<AiOutlineLineChart /> , text :'Cryptocurrency'},
        {id:4 , icon:<FaRegNewspaper /> , text :'News'},
    ]

export default function Navbar({darkTheme,setDarkTheme}) {
  
  const [menu,setMenu]=useState(false)

  return (
    
    <div className=' md:h-screen  md:flex-1 lg:w-80 md:w-56 bg-transparent md:bg-stone-900 dark:bg-transparent md:dark:bg-stone-600 text-white  overflow-hidden sticky top-0 left-0'>
      
        <AiOutlineMenu onClick={()=>setMenu(true)}  className='md:hidden mt-5 ml-6 cursor-pointer text-xl text-black dark:text-white'/>
        <AnimatePresence>
      {menu && (

      
      <motion.div
      initial={{x:-1000 , opacity:0}}
      animate={{x:0 , opacity:1}}
      transition={{duration:1 , ease:'easeInOut'}}
      exit={{x:-1000 , opacity:0}}
      className='dark:bg-stone-600 bg-blue-700 rounded-r-lg  w-64 h-screen fixed  top-0 left-0 border-r dark:border-gray-400'>
        <div className='flex justify-end pt-4 pr-4 text-2xl cursor-pointer'>
        <AiOutlineClose className=''
        onClick={()=>setMenu(false)}
        >x</AiOutlineClose>
        </div>
        <div className=''>
        <Link to={'/'} className=' flex   justify-center pt-10 items-center' onClick={()=>setMenu(false)}>
            <img src={logo} alt="logo"  className='w-8 h-8'/>
            <p className='ml-3 font-bold tracking-widest '>Cryptoreverse</p>
        </Link>
       </div> 
         <div className=''>
        <div className='flex  justify-center items-center mt-5'>
            <p className='bg-gray-50 text-gray-900 w-20 rounded-full text-center cursor-pointer tracking-widest'
        onClick={()=>setDarkTheme(!darkTheme)}
        >{!darkTheme ? 'Dark 🌚' : 'Light 🌝'}</p>
        </div>
        <div className='mt-3'>
        {NavbarItem.map(({id,icon,text})=>(
            <NavLink key={id} to={`/${text}`} className={(link)=>link.isActive ? 'active-class' : 'notactive-class'} onClick={()=>setMenu(false)} >
              <p>{icon}</p>  
            <div className='text-lg ml-3 font-light'  >
            {text}
            </div>
            </NavLink>
        ))}
        </div> 
        </div>
      </motion.div>
      )}
      </AnimatePresence>

      <div className='hidden md:block'>
        <Link to={'/'} className=' flex   justify-center pt-10 items-center' >
            <img src={logo} alt="logo"  className='w-8 h-8'/>
            <p className='ml-3 font-bold tracking-widest'>Cryptoreverse</p>
        </Link>
       </div> 
         <div className='hidden md:inline '>
        <div className='flex  justify-center items-center mt-5'>
            <p className='bg-gray-50 text-gray-900 w-20 rounded-full text-center cursor-pointer tracking-widest'
        onClick={()=>setDarkTheme(!darkTheme)}
        >{!darkTheme ? 'Dark 🌚' : 'Light 🌝'}</p>
        </div>
        <div className='mt-3' >
        {NavbarItem.map(({id,icon,text})=>(
            <NavLink key={id} to={`/${text}`} className={(link)=>link.isActive ? 'active-class' : 'notactive-class'}>
              <p>{icon}</p>  
            <div className='text-lg ml-3 font-light'  >
            {text}
            </div>
            </NavLink>
        ))}
        </div> 
        </div>
        
    </div>
   
  )
}
