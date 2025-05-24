'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { BarChart3, ArrowRight } from 'lucide-react'

const HomeSummaryCard = () => {
  const router = useRouter()

  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-2xl shadow-xl p-6 w-full max-w-sm text-white overflow-hidden">
      {/* Arka plan blur efekti */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-6 h-6" />
          <h2 className="text-xl font-extrabold">Büyük Veri Paneli</h2>
        </div>

        <p className="text-sm font-bold text-white/90 mb-6">
          Verilerinizi yükleyin, analizleri keşfedin ve performansı görselleştirin.
        </p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => router.push('/dashboard/upload')}
            className="px-4 py-2 bg-white text-blue-600 text-sm font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Başla
          </button>
          <button
            onClick={() => router.push('/dashboard/analyzes')}
            className="flex items-center text-sm text-white/90 hover:underline"
          >
            Analizleri Gör <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeSummaryCard
