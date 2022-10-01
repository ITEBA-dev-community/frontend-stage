import HeaderSect from "./headerSect"
import './scroll.css'
import DataMock from "../mockData"
const Library = () => {
    return (
        <section className="libary mt-10 px-5">
            <HeaderSect title="Perpustakaan" />

            <section className="mt-5">
                {DataMock.libary.map((data) => (
                    <section key={data.id} className="border-2 border-gray-300 rounded-2xl mb-2 px-3 py-3 flex">
                        <div className="w-24 h-20 bg-gray-700 rounded-2xl">
                            <img src={data.imgSrc} alt="" className="w-full h-full bg-cover rounded-2xl" />
                        </div>
                        <div className="ml-5 mt-2">

                            <h1 className="text-lg font-semibold">{data.title}</h1>
                            <p className="text-xs">{data.subtitle}</p>

                            <div className="mt-5">
                                <button className="px-2 h-[35px] primary-color rounded-2xl text-white">Pinjam Buku</button>
                                <button className="ml-3" style={{ color: "#035C95" }}>Detail</button>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default Library