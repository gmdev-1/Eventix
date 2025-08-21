import React from 'react'

export default function Header() {
  return (
    <>
      <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
    <div className="text-2xl font-bold text-blue-900">Eventix</div>
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 font-medium">Logout</span>
    </div>
  </header>
    </>
  )
}
