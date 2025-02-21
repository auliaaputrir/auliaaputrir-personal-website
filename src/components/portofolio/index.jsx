import PortofolioCard from "../PortofolioCard";
import {getPortofolioData} from '../../utils/index';



export default function Portofolio() {
    const portofolios = getPortofolioData()
    return (
        <>
            <section id="#portofolio" className="">
                <h2 className="text-center lg:text-5xl text-3xl font-bold mb-8">My Portofolio</h2>
                <div className="grid lg:grid-cols-3  justify-center gap-10">
                    {
                        portofolios.map((portofolio)=>(
                            <PortofolioCard key={portofolios.id} {...portofolio}/>
                        ))
                    }
                </div>
            </section>
        </>
    )
}