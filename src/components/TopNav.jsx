import React from 'react'

function TopNav({label}) {
  return (
    <div className="flex flex-col gap-5 bg-topnav bg-center bg-no-repeat bg-cover w-full h-fit">
        <div className="w-10/12 flex justify-between mt-10 m-auto">
            <img src="/assets/images/HamburgerMenu.svg" />
            <h2 className="text-white font-poppins text-2xl font-medium">{label}</h2>
            <img src='/assets/images/NotificationActive.svg' />
        </div>
        <div className="relative w-10/12 m-auto mb-5">
            <img src='/assets/images/SearchIcon.svg' className='absolute w-10 bottom-2 right-5 bg-white pl-4' />
            <input type="text" placeholder="Titles, author, and topics" className="w-full p-2 pr-5 rounded-full indent-4 font-poppins placeholder:font-poppins placeholder:text-[#AEAEAE]" />
        </div>
    </div>
  )
}

export default TopNav