import React from 'react'
import Sidebar from '../components/Sidebar'
import mockUser from '../components/mockUser'
import Header from '../components/header'
import Recomendation from '../components/recomendation'

function Home() {
  return (
    <>
      <Header />
      <Recomendation />
      {/* <Sidebar userInfo={mockUser} /> */}
    </>
  )
}

export default Home