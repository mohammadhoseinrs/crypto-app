import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import { useQuery } from 'react-query'
import { fetchCoinDetail, fetchCoinDetailChart } from '../data/DataFile'
import Loading from './Loading'
import {RiExchangeDollarFill} from 'react-icons/ri'
import {BsHash,BsLightning,BsCashCoin} from 'react-icons/bs'
import {BiTrendingUp,BiHash} from 'react-icons/bi'
import {CgDollar , CgDanger} from 'react-icons/cg'
import {AiOutlineStop , AiOutlineCheck} from 'react-icons/ai'
import LineChart from './LineChart'


export default function CryptoDetails() {
  const {coinid}=useParams()
  const [timePeriod,setTimePeriod]=useState('')
  const {isLoading,data}=useQuery('coin-detail',()=>fetchCoinDetail(coinid))
  const cryptoDetails=data?.data?.coin
  const {isLoading:isLoadingChart,data:coinHistory}=useQuery('coin-detail-Chart',()=>fetchCoinDetailChart({coinid,timePeriod}))
  console.log(timePeriod);
  
  console.log(coinHistory);

  const time=['3h','24h','7d','30d','1y','3m','3y','5y']
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,icon:<RiExchangeDollarFill /> },
    { title: 'Rank', value: cryptoDetails?.rank , icon:<BiHash /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,icon:<BsLightning />},
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}` ,icon:<RiExchangeDollarFill /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,icon:<BsCashCoin /> },
  ];
  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <BiTrendingUp /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <CgDollar /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <CgDanger /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <CgDanger /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <CgDanger /> },
  ]
  if(isLoading || isLoadingChart) return <Loading />
  
  return (
    <div className='pr-5 md:px-10 lg:px-8'>
      <div className='flex flex-col items-center justify-center border-b border-gray-300 dark:border-gray-700'> 
        <div className='text-blue-600 text-2xl font-semibold mt-10'>
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) price
        </div>
        <div className='text-xs md:text-sm break-words mt-7 mb-10 text-gray-500'>
        {cryptoDetails?.name} live price in us dollars.
        view value statistics, market cap and supply.
        </div>
      </div>
      <div className='pt-5' >
        <select className='w-40 h-7 border outline-none dark:bg-stone-600 rounded-lg dark:border-gray-900 bg-stone-900 text-white ' placeholder='select time period' name="" id=""
        value={timePeriod}
        onChange={(event)=>setTimePeriod(event.target.value)}>
          {time.map(date=>(
            <option key={date}>{date}</option>
          ))}
        </select>
      </div>
            <div>
            </div>
      <div className='flex  flex-col  lg:flex-row items-center md:justify-between mt-10 '>
        <div className='mb-16 lg:mb-0' >
          <div >
            <div className='text-2xl mb-4 mt-2'>
              {cryptoDetails?.name} value statistics
            </div>
              <p className='text-xs md:text-sm text-gray-600 pb-3'>
                An overview showing the stats of {cryptoDetails?.name}
              </p>
          </div>
            {stats.map(({icon ,title,value},index)=>(
              <div key={index} className='flex items-center justify-between px-2 py-4 border-b dark:hover:bg-gray-700 hover:bg-white transition ease-out duration-200 cursor-pointer'>
                <div className='flex items-center justify-center'>
                  <p>{icon}</p>
                  <p className='ml-2'>{title}</p>
                </div>
                <p>{value}</p>
              </div>
            ))}
        </div>
        <div>
          <div className='flex flex-col'>
            <div className='text-2xl mb-4'>
              other statistics
            </div>
              <p className='text-xs md:text-sm text-gray-600 pb-3'>
                An overview showing the stats of all cryptocurrency
              </p>
          </div>
            {genericStats.map(({icon ,title,value},index)=>(
              <div key={index} className='flex items-center justify-between px-2 py-4 border-b dark:hover:bg-gray-700 hover:bg-white transition ease-out duration-200 cursor-pointer '>
                <div className='flex items-center justify-center'>
                  <p>{icon}</p>
                  <p className='ml-2'>{title}</p>
                </div>
                <p>{value}</p>
              </div>
            ))}
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row my-10'>
        <div className='my-14 xl:my-0' >
          <div className='basis-2/4' >
            <div className='text-3xl mb-4'>
              what is {cryptoDetails?.name}
            </div>
            <div className=' text-xs md:text-sm pr-2'>
              {HTMLReactParser(`${cryptoDetails?.description}`)}
            </div>
            
          </div>
        </div>
        <div className='hidden md:block basis-2/4 ml-0 xl:ml-20' >
          <div className='text-3xl'>
            {cryptoDetails?.name} Links
          </div>
          {cryptoDetails?.links.map(link=>(
            <div  className='flex justify-between  items-center px-4 py-5 border-b'>
              <div >
                {link.type}
              </div>
              <a href={link.url} className='text-blue-600 ml-48'>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
