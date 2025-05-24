'use client'
import React from 'react'
import { parseISO, format } from 'date-fns'
import { tr } from 'date-fns/locale'

const TableComponent = () => {
  const displayedExpenses = [
    {
      id: 1,
      type: 'Taksi verisi',
      cost: 1250.5,
      entryDate: '2025-05-20',
    },
    {
      id: 2,
      type: 'Map reduce veri test',
      cost: 980.75,
      entryDate: '2025-05-22',
    },
    {
      id: 3,
      type: 'Ev fiyat verileri',
      cost: 432,
      entryDate: '2025-05-23',
    },
  ]

  return (
    <div className="overflow-x-auto min-h-[200px] w-full p-4">
      <table className="min-w-full table-auto border rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-600 uppercase">Analizler</th>
            <th className="px-4 py-2 text-center text-xs font-medium text-gray-600 uppercase">Küme Sayısı</th>
            <th className="px-4 py-2 text-center text-xs font-medium text-gray-600 uppercase">
              Çalışma süresi (sn)
            </th>
            <th className="px-4 py-2 text-right text-xs font-medium text-gray-600 uppercase">Tarih</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {displayedExpenses.map((expense, idx) => (
            <tr key={expense.id || idx} className="hover:bg-blue-50 transition">
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                {expense.type}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-800 items-center text-center">
                3
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-center text-blue-700 font-semibold text-center">
                {typeof expense.cost === 'number'
                  ? expense.cost.toFixed(2)
                  : Number(expense.cost).toFixed(2)}
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 text-right">
                {expense.entryDate
                  ? format(parseISO(expense.entryDate), 'dd MMMM yyyy', { locale: tr })
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
