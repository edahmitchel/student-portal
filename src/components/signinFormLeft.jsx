import { useLocation, useNavigate } from "react-router-dom";
import vector1image from "../images/Vector-1.png"
import vector from "../images/Vector.png"
import vector2 from "../images/Vector-2.png"
import { useState } from "react";
const SigninFormLeft = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const login = () => {
        // This is where you would typically make a request to your server to
        // authenticate the user and get a JWT token, which you would then
        // save in local storage.
        if (username === "admin" && password === "pass1234") {
            const user = { username };
            localStorage.setItem("user", JSON.stringify(user));
            console.log(username, password)
            // setUser(user);
            navigate("/dashboard");
        }
    };


    return (
        <div className="form__left">
            <div className="vector__1">
                <img src={vector1image} alt="Vector-1" />
            </div>


            <h1>Welcome again!</h1>

            <form className="form" id="form">
                <label htmlFor="Email">username</label>
                <div className="pass">
                    <input
                        type="text"
                        className="email"
                        id="email"
                        placeholder="mitchel"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <label htmlFor="password">Password</label>
                <div className="pass">
                    <input
                        type="password"
                        className="password"
                        id="password"
                        placeholder="enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="uil uil-eye"></i>
                </div>



                <button href="#" className="btn form__btn" onClick={login}>
                    Sign In
                </button>

            </form>

            <div className="vector">
                <img src={vector} alt="Vector" />
            </div>
        </div>
    );
};

export default SigninFormLeft