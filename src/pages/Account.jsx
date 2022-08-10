import React from 'react'
import NavigationalLink from '../components/Account/NavigationalLink'
import PageHeader from '../components/PageHeader'

function Account (){
    return (
        <>
        <div className='h-screen w-full bg-[#EFEFEF]'>
            <PageHeader previousUrl={"/"} label={"Akun"} />
            <div className='w-11/12 m-auto mt-16 flex flex-col gap-4'>
                <NavigationalLink src={"/"} icon={"/assets/images/user-icon.svg"} label={"Profil"} rounded={"2xl"} />
                <NavigationalLink src={"/borrowed"} icon={"/assets/images/borrowed-icon.svg"} label={"Sedang Dipinjam"} rounded={"2xl"} />
                <NavigationalLink src={"/loanhistory"} icon={"/assets/images/history-icon.svg"} label={"Riwayat Pinjaman"} rounded={"2xl"} />
            </div>
            <div className='mt-20'>
                <NavigationalLink src={"/about"} label={"Tentang"} rounded={"none"} />
            </div>
        </div>
        </>
    )
}

export default Account