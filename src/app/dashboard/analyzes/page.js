"use client"
import React from 'react'
import RadarChart from './RadarChart'
import AnalyzeCard from './AnalyzeCard'
import TableComponent from './TableComponent'
import BarChart from './BarChart'

const page = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-start max-h-screen overflow-auto'>
      <div className=' w-full flex flex-col-reverse sm:flex-row justify-between items-center gap-10 p-16'>
        <div className=' flex-1'>
          <RadarChart />
        </div>
        <AnalyzeCard />
      </div>
      <TableComponent />
      <BarChart />
    </div>
  )
}

export default page