import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link, useLocation } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from '../components/Loading'
import Cryptocurrency from '../components/Cryptocurrency'
import News from '../components/News'
import {fetchCoinData, fetchCoinNews} from './../data/DataFile'

export default function Home() {
  
  const {isLoading , data}=useQuery('coin-data', ()=>fetchCoinData(10))
  const {isLoading:isloadingData , data:newsData}=useQuery('coin-news', ()=>fetchCoinNews(6))
  const globalStats=data?.data?.stats
  

  if(isLoading ) return <Loading />
  
  return (
    <div className='flex-1'>
      <div className='pr-8 md:pr-0'>
      <div className='pl-8 py-3  text-3xl border-b border-gray-300 dark:border-gray-700'>
        Global Crypto Stats
      </div>
      </div>
     <div>
     <div className='flex flex-wrap mt-5  '>
        <div className=' Home-item '>Total Cryptocurrencies
        <p className='Home-subitem'>{globalStats?.total}</p>
        </div>
        <div className=' Home-item '>Total Exchanges
        <p className='Home-subitem'>{globalStats?.totalExchanges}</p>
        </div>
        <div className=' Home-item '>Total Market Cap
        <p className='Home-subitem'>{millify(globalStats?.totalMarketCap)}</p>
        </div>
        <div className=' Home-item '>Total 24h Volume
        <p className='Home-subitem'>{millify(globalStats?.total24hVolume)}</p>
        </div>
        <div className=' Home-item '>Total Markets
        <p className='Home-subitem'>{millify(globalStats?.totalMarkets)}</p>
        </div>
      </div>
     </div>

     <div className='pr-6 md:pr-0'>
      <div className='px-8 py-3  border-t border-gray-300 dark:border-gray-700 flex flex-wrap  justify-between items-center'>
        <div className='md:text-2xl text-lg'>
          Top 10 Cryptocurrencies in the World
        </div>
        <Link to={'/cryptocurrency'} className='cursor-pointer md:py-0 pt-4'>
          Show more
        </Link>
      </div>
      </div>
        <Cryptocurrency  data={data}  />
      
      <div className='md:px-8 px-0 py-5  lex flex-wrap justify-between items-center'>
        <div className='text-2xl'>
          Latest Crypto News
        </div>
        <div>
        <Link to={'/cryptocurrency'} className='cursor-pointer pr-7 md:pr-0 '>
          Show more
        </Link>
        </div>
      </div>
      <News newsData={newsData}   />
    </div>
  )
}
