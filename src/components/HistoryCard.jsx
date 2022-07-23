import React from 'react'
import { Link } from 'react-router-dom'

function HistoryCard({thumbnail, title, author, history, reviewUrl}) {
  return (
    <div className='box-border mt-4 border border-slate-300 px-3 py-4 w-11/12 m-auto rounded-lg flex items-center justify-start gap-5 h-fit'>
        <img src={thumbnail} className='rounded-lg w-28 h-50 shadow-lg shadow-slate-400' />
        <div className='flex flex-col gap-1 justify-around w-2/5 break-word'>
            <h3 className='font-poppins uppercase font-medium text-xl'>{title}</h3>
            <p className='font-poppins text-sm text-[#B1ADAD]'>{author}</p>
            <p className='font-poppins mt-1 text-sm text-[#B1ADAD]'>{`peminjaman ${history}`}</p>
        </div>
        <Link to={reviewUrl} className='border border-[#035C95] px-4 py-2 rounded-md text-[#035C95] justify-self-end text-sm'>
            <button className='font-poppins'>Ulasan</button>
        </Link>
    </div>
  )
}

export default HistoryCard