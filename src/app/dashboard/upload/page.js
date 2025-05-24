"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const UploadPage = () => {
  const router = useRouter();
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => {
    setDragActive(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleUpload = () => {
    if (!file) {
      alert("Lütfen bir dosya seçin.")
      return
    }
    alert(`Yüklendi: ${file.name}`)
    router.push("/dashboard/analyzes")

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div
        className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center transition ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <svg
          className="w-12 h-12 mb-4 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
          />
        </svg>
        <p className="mb-2 text-gray-600">Dosya Sürükle Bırak</p>
        <p className="mb-4 text-gray-400">ya da</p>
        <label className="cursor-pointer">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Göz at
          </span>
        </label>
        {file && (
          <p className="mt-4 text-sm text-gray-700">
            Seçilen dosya: <strong>{file.name}</strong>
          </p>
        )}
        <button
          onClick={handleUpload}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Yükle
        </button>
      </div>
    </div>
  )
}

export default UploadPage
