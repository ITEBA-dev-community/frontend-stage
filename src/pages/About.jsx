import React from 'react'

export default function About() {
  return (
    <>
    <div className='relative w-full overflow-x-scroll h-screen bg-center bg-no-repeat bg-cover
                    bg-[url("https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80")]'>

        <div className='ml-4 w-fit flex gap-4 items-center'>

            <div className='w-100vw flex gap-6 h-screen items-center justify-around'>
                <h1 className='text-4xl text-white font-bold'>Apa saja yang ada di perpustakaan ?</h1>
                <img src='assets/images/arrow-animate.svg' className='bouncex w-20 opacity-50' />
            </div>

            <div className='ml-4 w-100vw flex flex-col gap-4 text-white text-lg px-8'>

                <div className='flex gap-4 items-start'>
                    <img src="assets/images/Vector.svg" alt="" className='w-8 h-auto mt-2' />
                    <div>
                        <h3 className='text-2xl font-semibold'>Ruang Baca</h3>
                        <p>Ruangan membaca dari ITEBA perpustakaan dilengkapi dengan meja dan kursi.</p>
                    </div>
                </div>

                <div className='flex gap-4 items-start'>
                    <img src="assets/images/Vector-1.svg" alt="" className='w-8 h-auto mt-2' />
                    <div>
                        <h3 className='text-2xl font-semibold'>Ruang Koleksi</h3>
                        <p>Ruang Koleksi ITEBA memiliki koleksi berupa: Koleksi Buku-buku. Koleksi ini termasuk buku tentang rekayasa, manajemen, matematika, komputer, dan teknik industri, juga dengan buku-buku pendukung lainnya. Koleksi ini dapat dibaca di tempat atau dipinjam sesuai dengan aturan.</p>
                    </div>
                </div>

                <div className='flex gap-4 items-start'>
                    <img src="assets/images/Vector-2.svg" alt="" className='w-8 h-auto mt-2' />
                    <div>
                        <h3 className='text-2xl font-semibold'>Fasilitas Internet</h3>
                        <p>Perpustakaan menyediakan fasilitas internet gratis untuk semua anggota perpustakaan, yang dapat diakses di jam kerja perpustakaan.</p>
                    </div>
                </div>

            </div>

        </div>
        
        <img src='assets/images/down-arrow-animate.svg' className='w-20 h-auto animate-bounce absolute bottom-10 inset-x-1/2 text-white' />
    
    </div>

    <div className="p-4 bg-white w-full">
        <div className='p-4 border-l-4 border-l-[#0D43B9B3]'>
            <p className='text-[#989898] text-lg'>Perpustakaan Institut Teknologi Batam telah dilengkapi dengan e-library dengan tujuan untuk menjadi sumber informasi pengetahuan dan ilmu pengetahuan, untuk membantu proses belajar dengan kemudahan dalam mengeksplorasi pengetahuan dengan teknologi informasi.</p>
        </div>
    </div>
    <section className='p-4 w-full bg-[#E7E7E7] text-[#0000009E] flex flex-col gap-4 text-lg'>
        <h2 className='text-3xl font-semibold text-center my-4'>Tata tertib & Aturan</h2>

        <article>
            <p className='font-semibold text-xl mb-2'>Peraturan perpustakaan</p>
            <p>Sebelum ke ruang koleksi atau ruang membaca, pelanggan harus mengisi buku tamu yang disediakan. Perpustakaan adalah tempat untuk membaca dan belajar. Pelanggan harus menjaga ketenangan dan ketertiban di perpustakaan. Pelanggan tidak diperkenankan untuk makan, minum, atau merokok di perpustakaan. Pelanggan harus menjaga keutuhan dan keamanan peralatan perpustakaan</p>
        </article>
       
       <article>
            <p className='font-semibold text-xl mb-2'>Prosedur meminjam dan mengembalikan buku</p>
            <ul className=' px-4 list-disc list-outside'>
                <li>Member harus menunjukkan Kartu Mahasiswa</li>
                <li>Peminjam memegang tanggung jawab dalam literatur yang dipinjam dan dilarang meminjamkan Kartu Mahasiswa ke orang lain.</li>
                <li>Maximal buku yang dipinjam dua buku untuk mahasiswa, tiga buku untuk dosen, dua buku untuk staf.</li>
                <li>Jangka waktu peminjaman buku adalah 1 (satu) minggu dan dapat diperpanjang jika buku tersebut tidak ada dalam daftar tunggu.</li>
                <li>Koleksi referensi (kamus, ensiklopedia, makalah penelitian, buku tahun, atlas, indeks, abstrak) tidak dapat dipinjam, hanya bisa dibaca di ruang baca.</li>
                <li>Tesis hanya bisa dibaca di ruang baca.</li>
                <li>Tamu dari luar ITEBA hanya dapat meminjam buku untuk dibaca di ITEBA.</li>
                <li>Bagi mahasiswa yang akan lulus harus meminta surat bebas peminjaman buku dari perpustakaan di ITEBA.</li>
                <li>Pengembalian buku harus dilakukan sesuai waktu yang ditentukan.</li>
            </ul>
       </article>
    </section>
    </>
  )
}