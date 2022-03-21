import React, { useEffect, useState } from 'react'
import {millify} from 'millify'
import { Link } from 'react-router-dom'
import Loading from './Loading';


export default function Cryptocurrency({data , simplified}) {
  
  const [searchTerm,setSeatchTerm]=useState('')
  const [cryptos,setCryptos]=useState(data?.data.coins)
  useEffect(()=>{  
     const filteredData=data?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filteredData)
  },[searchTerm , data ])
  
  if(cryptos){
  return (
    <div>
      <div className='flex items-center justify-center  my-4'>
      {simplified && 
      <div className='w-60 border border-gray-300 dark:border-gray-600 h-10 rounded-lg mr-7 md:mr-0 '>
    <input type="text"
     placeholder='Search Cryptocurrency'
     onChange={(event)=>setSeatchTerm(event.target.value)}
     className='w-full border-0 outline-none dark:bg-stone-600 rounded-lg px-3  h-full bg-stone-900 text-white'
     />
    </div>
  }
  </div>
      <div className='flex flex-wrap justify-center mr-8 md:justify-start md:mr-0 px-4 '>
        {cryptos?.map(currency=>{
          return(
          <div  className='px-1' >
            <Link to={`/crypto/${currency.uuid}`} >
              <div className='w-60 h-52 bg-white dark:bg-stone-600 border border-gray-300 dark:border-gray-700 m-3 rounded-xl hover:shadow-lg transition ease-out duration-200 dark:hover:shadow-gray-700 dark:hover:shadow-lg'>
                <div className='flex items-center px-3 py-4 justify-between border-b border-gray-300 dark:border-gray-700 '>
                  <div className='flex text-sm'>
                    <div>{currency.rank}.</div>
                    <div className='ml-1 '>{currency.name}</div>
                  </div>
                  <img className='w-7 h-7 ' src={currency.iconUrl} alt="" />
                </div>
                <div className='px-4 py-3 dark:text-gray-400 text-gray-500'>
                <div>Price: {millify(currency.price)}</div>
                <div className='my-3'>Market cap: {millify(currency.marketCap)}</div>
                <div>Daily Change: {millify(currency.change)}</div>
                </div>
              </div>
            </Link>
          </div>
         )})}
      </div>
    </div>
  )}else{
    <Loading/>
  }
}
