
export default function TechStackItem({logo, children}) {
    return (
        <div className='flex lg:gap-2 items-center justify-center border border-sky-600 lg:px-4 px-2 py-2 rounded-3xl'>
            <img src={logo} className='lg:w-6 lg:h-6 w-4 h-4' alt="" />
            <p className='lg:text-lg text-sm'>{children}</p>
        </div>
    )
}