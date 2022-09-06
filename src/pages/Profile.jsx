import PageHeader from '../components/PageHeader'
const Profile = () => {
    return (
        <section className='user-profile h-screen w-full bg-[#EFEFEF]'>
            <PageHeader previousUrl={"/account"} label={"Profil"} />
            <img className='mx-auto w-48 mt-8' src="/assets/images/logoUserProfile.svg" alt="" />

            <div className='w-11/12 m-auto mt-8 flex flex-col gap-4'>
                <div className={`'relative flex gap-4 items-center w-full h-fit py-3 px-4 rounded-2xl bg-white shadow shadow-slate-300 mix-blend-normal'`}>
                    <p className='text-gray-400 text-base font-bold'>Kriswando Sinaga</p>
                    <p className='pl-24 text-gray-400'>2021018</p>
                </div>
                <div className={`'relative flex gap-4 items-center w-full h-fit py-3 px-4 rounded-2xl bg-white shadow shadow-slate-300 mix-blend-normal'`}>
                    <p className='text-[#444444] text-base'>Jenis Kelamin(opsional)</p>
                    <p className='pl-12 text-gray-400'>Laki-laki</p>
                </div>
                <div className={`'relative flex gap-4 items-center w-full h-fit py-3 px-4 rounded-2xl bg-white shadow shadow-slate-300 mix-blend-normal'`}>
                    <p className='text-[#444444] text-base'>Tanggal Lahir (opsional)</p>
                    <p className='pl-14 text-gray-400'>2002-01-19</p>
                </div>
                <p className='ml-5 text-base'>Kata Sandi</p>
                <div className={`'relative flex gap-4 items-center w-full h-fit py-3 px-4 rounded-2xl bg-white shadow shadow-slate-300 mix-blend-normal'`}>
                    <p className='text-[#444444] text-base'>Ganti Kata Sandi</p>
                    <img src='/assets/images/single-back-arrow-icon.svg' className='rotate-180 absolute right-12 text-[#444444]' />
                </div>

                <button className=''>
                    <img className='w-28' src="/assets/images/buttonExit.svg" alt="" />
                </button>
            </div>
        </section>
    )
}
export default Profile