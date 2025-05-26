"use client"
import React, { useState } from 'react'

const UploadPage = () => {
  const [file, setFile] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [clusterCount, setClusterCount] = useState(2)
  const [previewData, setPreviewData] = useState(null)
  const [selectedFunctions, setSelectedFunctions] = useState([])

  const availableFunctions = [
    "Ortalama",
    "Maksimum",
    "Minimum",
    "Standart Sapma",
    "Normalize Et"
  ]

  const isCSV = (filename) => {
    return filename?.toLowerCase().endsWith(".csv")
  }

  const parseCSV = (content) => {
    const lines = content.trim().split("\n").slice(0, 6) // ilk 5 satır + başlık
    const rows = lines.map(line => line.split(","))
    setPreviewData(rows)
  }

  const handleFileLoad = (selectedFile) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      parseCSV(text)
    }
    reader.readAsText(selectedFile)
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && !isCSV(selectedFile.name)) {
      alert("Lütfen yalnızca .csv uzantılı dosya yükleyin.")
      return
    }
    setFile(selectedFile)
    handleFileLoad(selectedFile)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragActive(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && !isCSV(droppedFile.name)) {
      alert("Sadece .csv dosyaları kabul edilmektedir.")
      return
    }
    setFile(droppedFile)
    handleFileLoad(droppedFile)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = () => {
    setDragActive(false)
  }

  const handleFunctionToggle = (func) => {
    setSelectedFunctions((prev) =>
      prev.includes(func)
        ? prev.filter((f) => f !== func)
        : [...prev, func]
    )
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 py-10 px-4 max-h-screen overflow-auto">
      <div
        className={`border-2 border-dashed rounded-xl p-8 w-full max-w-xl flex flex-col items-center transition ${
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
        <p className="mb-2 text-gray-600">CSV Dosyasını Sürükle ve Bırak</p>
        <p className="mb-4 text-gray-400">ya da</p>
        <label className="cursor-pointer">
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
          <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Göz at
          </span>
        </label>
        {file && (
          <p className="mt-4 text-sm text-gray-700">
            Seçilen dosya: <strong>{file.name}</strong>
          </p>
        )}

        <div className="mt-4 flex flex-col items-center">
          <label htmlFor="clusterCount" className="text-sm text-gray-600 mb-1">Küme Sayısı:</label>
          <input
            id="clusterCount"
            type="number"
            min="1"
            value={clusterCount}
            onChange={(e) => setClusterCount(Number(e.target.value))}
            className="border px-3 py-1 rounded text-center w-24"
          />
        </div>

        {/* Fonksiyon Seçimi */}
        <div className="mt-6 w-full">
          <p className="text-sm text-gray-700 mb-2 font-medium">Çalıştırmak istediğiniz fonksiyonları seçin:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {availableFunctions.map((func) => (
              <label key={func} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedFunctions.includes(func)}
                  onChange={() => handleFunctionToggle(func)}
                />
                <span className="text-sm text-gray-800">{func}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {previewData && (
        <div className="mt-8 w-full max-w-lg overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">CSV Önizleme (ilk 5 satır)</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
            <thead>
              <tr>
                {previewData[0].map((header, i) => (
                  <th key={i} className="border px-3 py-2 bg-gray-100 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, i) => (
                    <td key={i} className="border px-3 py-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default UploadPage
