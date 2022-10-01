import './scroll.css'
const Category = () => {
    return (
        <section className="category-section px-5 mt-8">
            <h1 className="text-xl font-bold">Pilih Kategori</h1>
            <section className="category-container bookRecomendation mt-5 overflow-x-auto grid grid-cols-3 gap-y-5">
                <button className="category-SistemInformasi w-[135px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2">Sistem Informasi</button>
                <button className="category-TeknikKomputer w-[135px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2 ml-6">Teknik Komputer</button>
                <button className="category-DesainKomunikasiVisual w-[200px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2 ml-12">Desain Komunikasi Visual</button>
                <button className="category-TeknikIndustri w-[125px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2">Teknik Industri</button>
                <button className="category-RekayasaPerangkatLunak w-[200px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2 ml-3">Rekayasa Perangkat Lunak</button>
                <button className="category-TeknikIndustri w-[100px] h-[40px] bg-gray-200 rounded-2xl px-1 py-2 ml-[6.2rem]">Matematika</button>
            </section>
        </section>
    )
}

export default Category 