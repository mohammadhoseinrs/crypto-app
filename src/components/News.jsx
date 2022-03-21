import moment from 'moment';
import React from 'react'
import demo from './../assets/image/demo.jpeg'
export default function News({newsData ,simplified }) {
  
  return (
    <div className='pr-6 md:pr-0'>
     {simplified && <p className='pl-8   py-3 text-3xl border-b border-gray-300 dark:border-gray-700'>Crypyo Latest News</p>}
      <div className='flex flex-wrap justify-center  md:justify-start md:items-start  md:py-5'>
        {newsData?.value.map((news,index)=>(
          <div key={index} className='px-3' >
              <div className='w-60 md:w-80 mb-5 p-5  bg-white dark:bg-stone-600 border border-gray-300 dark:border-gray-700 m-3 rounded-xl hover:shadow-lg transition ease-out duration-200 dark:hover:shadow-gray-700 dark:hover:shadow-lg'>
              <a href={news.url}>
                <div className='flex flex-wrap  pb-5'>
                  <div className='mb-5 md:mb-0'>{news.name}</div>
                  <img className='md:w-24 md:h-24 w-full h-20 rounded-xl' src={news?.image?.thumbnail?.contentUrl || demo} alt="" />
                </div>
                <p className='md:text-sm text-xs dark:text-gray-300 text-gray-500 mb-5'>
                  {news.description > 60 ? `${news.description.substring(0,60)}...`: news.description }
                </p>
                <div className='flex items-center flex-wrap  justify-between text-xs'>
                  <div className='flex  items-center'>
                    <img className='md:w-10 md:h-10 w-5 h-5 mr-2' src={news.provider[0]?.image?.thumbnail?.contentUrl || demo} alt="" />
                    <p>{news.provider[0]?.name}</p>
                  </div>
                    <p className='mt-2 md:mt-0'>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
