import { useLocation, useNavigate } from "react-router-dom";
import vector1image from "../images/Vector-1.png"
import vector from "../images/Vector.png"
import vector2 from "../images/Vector-2.png"
import { useState } from "react";
const SigninFormRight = () => {


    return (
        <div className="form__right">
            <div className="form__right-img">
                <img src={vector2} alt="Vector-3" />
            </div>
        </div>
    );
}

export default SigninFormRight
