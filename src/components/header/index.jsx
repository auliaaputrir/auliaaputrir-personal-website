import LinkMenu from "../LinkMenu"
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header>
                <nav className="border-b border-gray-400">
                    <div className="flex justify-around align-center py-6 ">
                        <div className="font-bold">
                            <p className="text-xl"> <span className="text-sky-600">auliaa</span>putrir</p>
                        </div>
                        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <TfiAlignJustify />
                        </button>
                        <ul className="md:flex justify-evenly gap-8 hidden">
                            <li>
                                <LinkMenu to='/'>About</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu to='/experience'>Experience & Education</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu to='/portofolio'>Portofolio</LinkMenu>
                            </li>
                        </ul>
                    </div>
                    {isOpen && (
                        <div className="md:hidden p-4">
                            <ul className="space-y-2 text-center">
                                <li>
                                    <LinkMenu to='/'>About</LinkMenu>
                                </li>
                                <li>
                                    <LinkMenu to='/experience'>Experience & Education</LinkMenu>
                                </li>
                                <li>
                                    <LinkMenu to='/portofolio'>Portofolio</LinkMenu>
                                </li>
                            </ul>

                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}