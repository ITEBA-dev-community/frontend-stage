import HeaderSect from "./headerSect"
import DataMock from "../mockData"
const News = () => {
    return (
        <section className="news-container mt-10 px-5">
            <HeaderSect title="Berita" />

            <section className="mt-5">
            {DataMock.libary.map((data) => (
                <section key={data.id} className="border-2 border-gray-300 rounded-2xl mb-2 px-3 py-3 flex">
                <div className="w-24 h-20 bg-gray-700 rounded-2xl">
                    <img src={data.imgSrc} alt="" className="w-full h-full bg-cover rounded-2xl" />
                </div>
                <div className="ml-5 mt-2">

                    <h1 className="text-lg font-semibold">{data.title}</h1>
                    <h2 className="text-xs mt-2">{data.subtitle}</h2>
                </div>
            </section>
            ))}
            </section>
        </section>
    )
}
export default News