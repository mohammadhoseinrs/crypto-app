import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='mb-2' >
      <div className='flex flex-col justify-center items-center text-xs font-light dark:text-gray-400'>
        <p>Cryptoreverse</p>
        <p>All rights reserved</p>
        <div className='mt-5'>
       <Link to={'/home'}>Home</Link>
        <Link className='px-4' to={'/exchange'}>Exchange</Link>
        <Link to={'/news'}>News</Link>
        </div>
      </div>
    </div>
  )
}
