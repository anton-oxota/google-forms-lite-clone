import css from "./Header.module.css";
import { NavLink } from "react-router";

function Header() {
    return (
        <header className={css.header}>
            <div className="container">
                <nav className={css.nav}>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/forms/new"}>Create new Form</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
