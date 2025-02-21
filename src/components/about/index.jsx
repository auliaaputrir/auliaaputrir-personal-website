import TechStackItem from '../TechStackItem'
import Profile from '../../assets/profile.jpg'
import html_logo from '../../assets/html-5.png'
import css_logo from '../../assets/css-3.png'
import js_logo from '../../assets/js.png'
import react_logo from '../../assets/react.png'
import tailwind_logo from '../../assets/tailwind.svg'

export default function () {
    return (
        <>
            <section id="about" >
                <div className="lg:grid lg:grid-cols-[1fr_30%] lg:pt-16 flex flex-col-reverse">
                    <div className='flex justify-center items-center lg:ml-10 '>
                        <div className='mt-4'>
                            <h1 className='lg:text-5xl text-3xl font-bold text-center lg:text-justify'>Hello, I'm Aulia Putri👋</h1>
                            <p className='lg:text-2xl text-xl mt-4 text-center lg:text-left '>A <span className='text-sky-500 font-semibold '>Front-End Developer</span> passionate about crafting intuitive and responsive web interfaces while continuously learning and improving my skills.</p>
                            <div className='flex justify-center lg:justify-start pt-5 lg:gap-2 gap-1'>
                                <TechStackItem logo={html_logo}>HTML</TechStackItem>
                                <TechStackItem logo={css_logo}>CSS</TechStackItem>
                                <TechStackItem logo={tailwind_logo}>Tailwind CSS</TechStackItem>
                                <TechStackItem logo={js_logo}>JavaScript</TechStackItem>
                                <TechStackItem logo={react_logo}>React JS</TechStackItem>
                            </div>
                            <div className='flex justify-center lg:justify-start'>
                                <button className='px-4 py-2 bg-sky-500 flex font-semibold text-white mt-4 rounded-3xl hover:bg-sky-600'>
                                    ⬇️Check out my CV
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex lg:justify-end justify-center items-center">
                            <img src={Profile} className='lg:w-full w-1/3 rounded-full' alt="profile-picture" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}