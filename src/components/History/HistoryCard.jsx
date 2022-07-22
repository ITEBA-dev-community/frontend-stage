import React from 'react'
import { Link } from 'react-router-dom'

function HistoryCard({thumbnail, title, author, history, reviewUrl}) {
  return (
    <div className='box-border mt-4 border border-slate-300 px-3 py-4 w-11/12 m-auto rounded-lg flex items-center justify-around gap-4 font-poppins'>
        <img src={thumbnail} className='rounded-lg w-28 h-50 shadow-lg shadow-slate-400' />
        <div className='flex flex-col gap-1 justify-start w-fit h-40 break-words'>
            <h3 className='uppercase font-medium text-xl'>{title}</h3>
            <p className='text-sm text-[#B1ADAD]'>{author}</p>
            <p className='mt-5 text-sm text-[#B1ADAD]'>{`peminjaman ${history}`}</p>
        </div>
        <Link to={reviewUrl} className='border border-[#035C95] px-4 py-1 rounded-md text-[#035C95]'>
            <button>Ulasan</button>
        </Link>
    </div>
  )
}

export default HistoryCard