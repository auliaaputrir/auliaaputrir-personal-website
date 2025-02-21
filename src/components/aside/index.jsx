import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { FaInstagram } from "react-icons/fa";

export default function Aside() {
    return (
        <aside className="right-0">
            <div className="h-full flex">
                <ul>
                    <li><a href="https://github.com/auliaaputrir"><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/auliaaputrir/"><FaLinkedinIn /></a></li>
                    <li><a href="mailto:auliaputrirachmadani@gmail.com>"><HiOutlineMail /></a></li>
                    <li><a href="https://www.instagram.com/auliaaputrir/"><FaInstagram /></a></li>
                </ul>
            </div>
        </aside>
    )
}