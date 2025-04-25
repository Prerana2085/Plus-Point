import React from 'react'

function DocDashCard({value, title}) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow text-center">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  )
}

export default DocDashCard