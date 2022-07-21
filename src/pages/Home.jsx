import React from 'react'
import Sidebar from '../components/Sidebar'
import mockUser from '../components/mockUser'

function Home() {
  return (
    <Sidebar userInfo={mockUser} />
  )
}

export default Home