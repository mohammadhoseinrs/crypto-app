import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Cryptocurrency, Loading } from '../components'
import { fetchCoinData } from '../data/DataFile';


export default function CryptoPage() { 
    const {isLoading , data}=useQuery('coin-data-100', ()=>fetchCoinData(100)) 
    if(isLoading) return <Loading />
  return (
    <>
    <Cryptocurrency simplified  data={data} isLoading={isLoading} />
    </>
  )
}
