import React from 'react'
import { Link } from 'react-router-dom'

const sidebarLink = [
  {
    name : 'FAQ',
    icon: '/assets/images/faq-icon.svg',
    target: '/faq'
  },
  {
    name: 'Hubungi Admin',
    icon: '/assets/images/admin-contact.svg',
    target: '/admin-contact'
  },
  {
    name: 'About',
    icon: '/assets/images/about-icon.svg',
    target: '/about'
  }
]

function Sidebar({userInfo}) {
  return (
    <aside className="h-full w-9/12 bg-gradient-to-t from-black via-[var(--black-transparent)] to-black fixed rounded-r-lg">
      <div className="h-full w-10/12 flex flex-col m-auto justify-start gap-y-20 relative">

        <div className="flex justify-between items-center mt-4">
          <button>
            <img src="/assets/images/back-arrow-icon.svg" className="w-8" />
          </button>
          <Link to="/">
            <img src="/assets/images/logo.svg" className="w-36" />
          </Link>
        </div>

        <div className="flex justify-start gap-x-6 items-center">
          <img src={userInfo.profileImage} className="w-14 h-14 rounded-full aspect-square bg-center border-2 border-slate-300" />
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-poppins">{userInfo.name}</h3>
            <p className='text-white text-sm text-[#898989] font-poppins'>{userInfo.nim}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
        {sidebarLink.map((link, index) => {
          return(
            <div key={index} className='flex justify-start items-center gap-6'>
              <img src={link.icon} className="w-8" />
              <Link to={link.target} className="text-white font-poppins" >{link.name}</Link>
            </div>
          )
        })}
        </div>

        <button className="absolute bottom-10 p-2 border  rounded-lg border-slate-300 text-white flex justify-center items-center w-full">
          <p className='font-poppins'>Logout</p>
          <img src='/assets/images/logout-icon.svg' className='absolute right-7' />
        </button>
        
      </div>
    </aside>
  )
}

export default Sidebar