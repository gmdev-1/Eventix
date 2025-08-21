import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
            <Sidebar />
            <Dashboard />
        </div>
    </div>
    </>
  )
}
