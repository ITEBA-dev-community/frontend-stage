import React from 'react'

function BorrowedCard({thumbnail, title, deadline}) {
  return (
    <div className="flex gap-6 w-11/12 m-auto my-4">
        <img src={thumbnail}  className='w-40 h-50 rounded-lg'/>
        <div className="flex flex-col justify-between borrowed-card-detail-width">
            <div>
                <h3 className="text-xl uppercase font-poppins font-bold">{title}</h3>
                <p className='font-poppins text-[#B1ADAD]'>Berlaku sampai</p>
                <p className='font-poppins text-[#B1ADAD]'>{deadline}</p>
            </div>
            <div className="flex flex-col gap-2">
                <button className="w-full border border-[#035C95] text-[#035C95] rounded-md py-2 font-poppins">Baca</button>
                <button className="w-full border border-[#DC0606] text-[#DC0606] rounded-md py-2 font-poppins">Kembalikan</button>
            </div>
        </div>
    </div>
  )
}

export default BorrowedCard