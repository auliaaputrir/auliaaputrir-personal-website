import { GoArrowUpRight } from "react-icons/go";
import TechStackItem from '../components/TechStackItem'
import html_logo from '../assets/html-5.png'


export default function PortofolioCard({ title, description, projectDate, imageURL, link }) {
    return (
        <div className="w-80 min-h-70 border border-sky-600 rounded-lg hover:rounded-3xl transition-all 
        duration-700 hover:scale-110 ease-in-out cursor-pointer overflow-hidden group" >
            <a href={link} target='_blank'>
                <div className="max-h-1/2 min-h-1/2 w-full overflow-hidden">
                    <img src={imageURL} className='object-cover rounded-t-lg' alt="" />
                </div>
                <div className='mt-2 mx-5 '>
                    <div className='flex items-center'>
                        <div className='bg-sky-600 mt-1 w-6 h-1 rounded-lg'></div>
                        <p className='ml-2'>{projectDate}</p>
                    </div>
                    <div className='flex items-center group-hover:text-sky-500 '>
                        <p className='text-lg mr-1  font-bold'>{title}</p>
                        <GoArrowUpRight />
                    </div>
                    <p className='text-sm pb-2'>{description}</p>
                </div>
            </a>
        </div>
    )
}