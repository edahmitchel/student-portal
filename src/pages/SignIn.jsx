import { useLocation, useNavigate } from "react-router-dom";
import vector1image from "../images/Vector-1.png"
import vector from "../images/Vector.png"
import vector2 from "../images/Vector-2.png"
import { useState } from "react";
import SigninFormLeft from "../components/signinFormLeft";
import SigninFormRight from "../components/signinFormRight.jsx";
// import { FormLeft } from "../components/signinFormLeft";
// import { FormRight } from "../components/signinFormRight.jsX";
const SignIn = () => {
  return (
    <section className="container">
      <SigninFormLeft />
      <SigninFormRight />
      {/* <FormLeft /> */}
      {/* <FormRight /> */}
    </section>
  );
};



export default SignIn;
