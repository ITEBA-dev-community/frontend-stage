import React from 'react'
import Sidebar from '../components/Sidebar'
import DataMock from '../components/mockData'
import Header from '../components/Home/header'
import Recomendation from '../components/Home/recomendation'
import Category from '../components/Home/Categoy'
import Library from '../components/Home/libary'
import News from '../components/Home/News'
import { useState } from 'react'

function Home() {
  const [hidden, setHidden] = useState("-translate-x-full")
  return (
    <>
      <Sidebar onClick={() => { setHidden("-translate-x-full")}} userInfo={DataMock} className={[hidden, "h-full w-9/12 bg-gradient-to-t from-black via-[var(--black-transparent)] to-black fixed rounded-r-lg transform transition duration-500 ease-in-out"].join(' ')} />
      <Header onClick={() => { setHidden("translate-y-0") }} />
      <Recomendation />
      <Category />
      <Library />
      <News />
    </>
  )
}

export default Home