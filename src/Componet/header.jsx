const Header = () => {
    return (
        <header className="h-56 w-full flex flex-col justify-between p-5 bg-cover bg-center" style={{ backgroundImage: "url('../Asset/Group 428.png')" }}>
            <section className="icon flex justify-between">
                <button className="humbergerMenu">
                    <img src="../Asset/grid.svg" alt="" />
                </button>

                <div className="iconRight flex items-center">
                    <button className="searchIcon mr-3 text-xl text-white flex items-center">
                        <ion-icon name="search"></ion-icon>
                    </button>

                    <button className="text-xl text-white flex items-center">
                        <ion-icon name="notifications"></ion-icon>
                    </button>
                </div>
            </section>

            <section className="content mb-4 flex">
                <section className="greatingUser">
                    <p className="text-2xl text-white font-bold mb-1">Hi, Herdo</p>
                    <p className="text-gray-50 font-semibold leading-5 text-sm w-48">Temukan sebuah topik yang <br /> ingin kamu baca</p>
                </section>

                <section className="humanImage">

                </section>
            </section>
        </header>
    )
}

export default Header