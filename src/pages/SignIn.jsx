import { useLocation, useNavigate } from "react-router-dom";
import vector1image from "../images/Vector-1.png"
import vector from "../images/Vector.png"
import vector2 from "../images/Vector-2.png"
const SignIn = () => {
  return (
    <section className="container">
      <FormLeft />
      <FormRight />
    </section>
  );
};

const FormLeft = () => {
  const navigate = useNavigate();

  function submit(e) {
    navigate("/Dashboard");
  }

  return (
    <div className="form__left">
      <div className="vector__1">
        <img src={vector1image} alt="Vector-1" />
      </div>

      <p>
        New Here? <a href="index.html">Create an account</a>
      </p>

      <h1>Welcome again!</h1>

      <form className="form" id="form">
        <label htmlFor="Email">Email</label>
        <div className="pass">
          <input
            type="text"
            className="email"
            id="email"
            placeholder="johndoe@gmail.com"
            required
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
          />
          <i className="uil uil-eye"></i>
        </div>

        <a href="#" className="forgot__pass">
          Forgot your Password?
        </a>

        <a href="#" className="btn form__btn" onClick={submit}>
          Sign In
        </a>
        <a href="#" className="btn form__btn form__btn-2">
          <i className="uil uil-google"></i> Sign in with Google
        </a>
      </form>

      <div className="vector">
        <img src={vector} alt="Vector" />
      </div>
    </div>
  );
};

const FormRight = () => {
  return (
    <div className="form__right">
      <div className="form__right-img">
        <img src={vector2} alt="Vector-3" />
      </div>
    </div>
  );
};

export default SignIn;
