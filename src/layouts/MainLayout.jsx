import { Outlet } from "react-router"
import Header from '../components/header'


export default function MainLayout() {
    return (
        <>
            <div className="min-h-screen w-full subpixel-antialiased bg-white">
                <Header />
                <main className="relative lg:pb-5 lg:pb-20 py-10 lg:mx-24 mx-10 flex items-center">
                    <Outlet />
                </main>
            </div>
        </>
    )
}