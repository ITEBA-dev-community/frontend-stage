import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({previousUrl, label}) {
  return (
    <div className='flex justify-center items-center w-full h-fit pt-5 pb-7 shadow shadow-slate-300 relative mix-blend-normal bg-white'>
        <Link to={previousUrl}>
            <img src='/assets/images/single-back-arrow-icon.svg' className='absolute left-8 bottom-8' />
        </Link>
        <h2 className='text-xl font-poppins font-medium align-middle'>{label}</h2>
    </div>
  )
}

export default PageHeader