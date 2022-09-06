import './scroll.css'
const HeaderSect = (props) => {
    return (
        <section className="header flex justify-between items-center">
            <h1 className="font-bold text-xl">{props.title}</h1>
            <a href="" className="text-blue-400 flex items-center">Lihat Lainnya
                <ion-icon name="chevron-forward"></ion-icon>
            </a>
        </section>
    )
}
export default HeaderSect