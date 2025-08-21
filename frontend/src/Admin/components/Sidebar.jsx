import React from 'react'

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-gray-100 h-screen shadow-md p-6">
    <div className="text-2xl font-bold text-blue-900 mb-8">Eventix</div>
    <nav className="flex flex-col space-y-4">
      <a href="#" className="text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded transition">
        Dashboard
      </a>
      <a href="#" className="text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded transition">
        Events
      </a>
      <a href="#" className="text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded transition">
        Attendees
      </a>
      <a href="#" className="text-gray-700 hover:bg-blue-900 hover:text-white px-4 py-2 rounded transition">
        Settings
      </a>
    </nav>
  </aside>
    </>
  )
}
