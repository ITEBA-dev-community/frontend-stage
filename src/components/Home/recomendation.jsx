const Recomendation = () => {
    return (
        <section className="recomendation mt-4 p-5">

            <section className="header flex justify-between items-center">
                <h1 className="font-bold text-xl">Baru dan Rekomendasi</h1>
                <a href="" className="text-blue-400 flex items-center">Lihat Lainnya
                    <ion-icon name="chevron-forward"></ion-icon>
                </a>
            </section>

            <section className="bookRecomendation mt-5 flex overflow-x-auto w-full h-52">
                <section className="card">
                    <div className="w-24 h-28 bg-gray-500 rounded-2xl mr-8"></div>
                    <p className="text-sm w-20 mt-3 ml-3">The Martian Andy Weir</p>
                </section>

                <section className="card">
                    <div className="w-24 h-28 bg-gray-500 rounded-2xl mr-8"></div>
                    <p className="text-sm w-20 mt-3 ml-3">The Martian Andy Weir</p>
                </section>

                <section className="card">
                    <div className="w-24 h-28 bg-gray-500 rounded-2xl mr-8"></div>
                    <p className="text-sm w-20 mt-3 ml-3">The Martian Andy Weir</p>
                </section>

                <section className="card">
                    <div className="w-24 h-28 bg-gray-500 rounded-2xl mr-8"></div>
                    <p className="text-sm w-20 mt-3 ml-3">The Martian Andy Weir</p>
                </section>
            </section>
        </section>
    )
}

export default Recomendation