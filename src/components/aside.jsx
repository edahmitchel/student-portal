import { useNavigate } from "react-router-dom";

export const Aside = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/admin")
        // setUser(null);
    };
    return (
        <aside className="aside">
            <nav className="navbar">
                <ul className="nav__items">
                    <li>
                        <a href="#">
                            <i className="uil uil-estate"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">na-item</a>
                    </li>
                    <li>
                        <a href="#">na-item</a>
                    </li>
                    <li>
                        <a href="#">na-item</a>
                    </li>
                    <li>
                        <button onClick={logout} href="#">
                            <i className="uil uil-signout"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

