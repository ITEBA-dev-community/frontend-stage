import React from 'react'
import Sidebar from '../components/Sidebar'
import DataMock from '../components/mockData'
import Header from '../components/Home/header'
import Recomendation from '../components/Home/recomendation'

function Home() {
  return (
    <>
      <Header />
      <Recomendation />
      {/* <Sidebar userInfo={DataMock} /> */}
    </>
  )
}

export default Home