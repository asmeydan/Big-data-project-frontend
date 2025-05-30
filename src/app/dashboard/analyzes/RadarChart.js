'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// SSR kapalı olarak yükleniyor
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const RadarChart = () => {
  const series = [
    {
      name: 'Analiz',
      data: [80, 50, 30, 40, 100, 20],
    },
  ]

  const options = {
    chart: {
      type: 'radar',
    },
    title: {
      text: 'Map-Reduce analizi',
    },
    xaxis: {
      categories: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
  }

  return <ReactApexChart options={options} series={series} type="radar" height={300} />
}

export default RadarChart
