import React, { useEffect, useState } from 'react'
import {  useRoutes } from 'react-router-dom'
import { Navbar , Footer } from './components'
import routes from './routes'
import {QueryClientProvider , QueryClient} from 'react-query'

export default function App() {
 
  const queryClient=new QueryClient()
  const [darkTheme,setDarkTheme]=useState(true)
  const router=useRoutes(routes)
  const [menu,setMenu]=useState(false)
  
 
  return (
    <QueryClientProvider client={queryClient}>
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <div className='flex'>
          <div>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          </div>
          <div className='flex-1 flex flex-col '>
            <div className='flex-1'>
             {router} 
            </div>
            <Footer  />
          </div>
        
        </div>
        
      </div>
      
   </div>
   </QueryClientProvider>
  )
}
