import React from 'react'
import { Link } from 'react-router-dom'

function NavigationalLink ({src, icon, label, rounded}) {
    return(
        <Link to={src}>
            <div className={`'relative flex gap-4 items-center w-full h-fit py-3 px-6 rounded-${rounded} bg-white shadow shadow-slate-300 mix-blend-normal'`}>
                <img src={icon} alt="" className='text-[#7E7E7E] w-4' />
                <p className='text-[#444444] text-base'>{label}</p>
                <img src='/assets/images/single-back-arrow-icon.svg' className='rotate-180 absolute right-12 text-[#444444]' />
            </div>
        </Link>
    )
}

export default NavigationalLink