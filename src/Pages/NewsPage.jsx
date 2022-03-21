import React from 'react'
import { useQuery } from 'react-query';
import { Loading, News } from '../components';
import { fetchCoinNews } from '../data/DataFile'

export default function NewsPage() {
    const {isLoading , data}=useQuery('coin-news', ()=>fetchCoinNews(100))
    if(isLoading) return <Loading />
  return (
    <div>
        <News newsData={data} simplified />
    </div>
  )
}
