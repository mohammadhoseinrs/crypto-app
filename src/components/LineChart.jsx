import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart({coinHistory , currentPrice , coinName}) {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div >
      <div className='flex justify-between items-center my-6'>
        <div className='text-3xl text-blue-600'>{coinName} Price Chart</div>
        <div className='flex  text-black dark:text-white text-lg font-semibold'>
            <div>{coinHistory?.data?.change}%</div>
            <div className='ml-10'> Current {coinName} Price : $ {currentPrice}</div>
        </div>
      </div>  
      <Line data={data} options={options} />
    </div>
  )
}
