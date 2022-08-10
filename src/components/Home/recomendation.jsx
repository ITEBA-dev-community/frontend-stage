import HeaderSect from "./headerSect"
import DataMock from "../mockData"
const Recomendation = () => {
    return (
        <section className="recomendation mt-10 px-5">
            <HeaderSect title="Baru dan Rekomendasi" />

            <section className="bookRecomendation mt-5 flex overflow-x-auto w-full h-42">
                {DataMock.recomendation.map((data) => (
                     <section className="card" key={data.id}>
                     <div className="w-24 h-28 bg-gray-500 rounded-2xl mr-8"></div>
                     <p className="text-sm w-20 mt-3 ml-3">{data.name}</p>
                 </section>
                ))}
            </section>
        </section>
    )
}

export default Recomendation