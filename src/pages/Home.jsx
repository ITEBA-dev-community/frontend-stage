import React from 'react'
import Sidebar from '../components/Sidebar'
import mockUser from '../components/mockUser'
import Header from '../components/Home/header'
import Recomendation from '../components/Home/recomendation'

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