import LinkMenu from "../LinkMenu"
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
                                <LinkMenu to='/experience'>Experience</LinkMenu>
                            </li>
                            <li>
                                <LinkMenu to='/portofolio'>Portofolio</LinkMenu>
                            </li>
                            <ul className="flex gap-4 text-lg text-center mt-1">
                                <li><a href="https://github.com/auliaaputrir" className="hover:text-sky-600"><FaGithub /></a></li>
                                <li><a href="https://www.linkedin.com/in/auliaaputrir/" className="hover:text-sky-600"><FaLinkedinIn /></a></li>
                                <li><a href="mailto:auliaputrirachmadani@gmail.com>" className="hover:text-sky-600"><HiOutlineMail /></a></li>
                            </ul>
                        </ul>
                    </div>
                    {isOpen && (
                        <div className="md:hidden p-4">
                            <ul className="space-y-2 text-center">
                                <li>
                                    <LinkMenu to='/'>About</LinkMenu>
                                </li>
                                <li>
                                    <LinkMenu to='/experience'>Experience</LinkMenu>
                                </li>
                                <li>
                                    <LinkMenu to='/portofolio'>Portofolio</LinkMenu>
                                </li>
                                <ul className="flex gap-4 text-lg mt-1 justify-center">
                                    <li><a href="https://github.com/auliaaputrir" className="hover:text-sky-600"><FaGithub /></a></li>
                                    <li><a href="https://www.linkedin.com/in/auliaaputrir/" className="hover:text-sky-600"><FaLinkedinIn /></a></li>
                                    <li><a href="mailto:auliaputrirachmadani@gmail.com>" className="hover:text-sky-600"><HiOutlineMail /></a></li>
                                </ul>
                            </ul>

                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}