import React from 'react'

const AnalyzeCard = () => {
  return (
    <div className='flex-1 w-full bg-white rounded-lg shadow-lg p-6 text-sm text-gray-800'>
          <h2 className='text-xl font-semibold mb-4'>Analiz Bilgileri</h2>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <span className='font-medium'>Analiz ID:</span>
              <span>{/*analysisInfo.id*/}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Kullanıcı:</span>
              <span>{/*analysisInfo.user*/}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Tarih:</span>
              <span>{/*analysisInfo.date*/}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Kategori:</span>
              <span>{/*analysisInfo.category*/}</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Durum:</span>
              <span>{/*analysisInfo.status*/}</span>
            </div>
          </div>
        </div>
  )
}

export default AnalyzeCard