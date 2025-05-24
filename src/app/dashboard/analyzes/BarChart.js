'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// SSR kapalı olarak yükleniyor
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BarChart = () => {
  const series = [
    {
      name: 'Değer',
      data: [87, 42, 8, 3, 512],
    },
  ]

  const options = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    title: {
      text: 'Analiz Performans Özeti',
      align: 'left',
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '50%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ['Analiz Skoru', 'Çalışma Süresi (dk)', 'Slave Sayısı', 'Hata Sayısı', 'Bellek (MB)'],
    },
    colors: ['#10b981'],
  }

  return <ReactApexChart options={options} series={series} type="bar" height={350} width="100%"  />
}

export default BarChart
