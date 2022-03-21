import React from 'react'
import { TailSpin } from 'react-loader-spinner';

export default function Loading() {
  return (
      <div className='flex justify-center items-center h-screen'>
          <TailSpin color="#00BFFF" height={80} width={80} /> 
      </div>
     )
}
