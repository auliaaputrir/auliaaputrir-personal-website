import { NavLink } from "react-router";

export default function LinkMenu ({to, children}) {
    return (
        <NavLink to={to} className={({ isActive }) =>
            isActive ? "text-sky-600 font-semibold" : "text-black hover:text-sky-600 font-semibold hover:duration-300"
        }>{children}</NavLink>
    )
}