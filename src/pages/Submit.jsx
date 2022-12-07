const Submit = () => {
  return (
    <section className="container">
      <FormLeft />
      <FormRight />
    </section>
  );
};

const FormLeft = () => {
  return (
    <div className="form__left">
      <div className="vector__1">
        <img src="./images/Vector-1.png" alt="Vector-1" />
      </div>

      <h1>Welcome!</h1>

      <form className="form" id="form">
        <label htmlFor="first__name">First Name</label>
        <div className="pass">
          <input
            type="text"
            className="first__name"
            id="first-name"
            placeholder="Enter your Name"
            required
          />
        </div>

        <label htmlFor="last__name">Last Name</label>
        <div className="pass">
          <input
            type="text"
            className="last__name"
            id="last-name"
            placeholder="Enter your Name"
            required
          />
        </div>

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

        <label htmlFor="topic">Project Topic</label>
        <div className="pass">
          <input
            type="text"
            className="topic"
            id="topic"
            placeholder="Enter your project topic"
            required
          />
        </div>

        <label htmlFor="last__name">Registration Number</label>
        <div className="pass">
          <input
            type="text"
            className="reg___number"
            id="reg-number"
            placeholder="18/ev/sc/1022"
            required
          />
        </div>

        <label htmlFor="file">Upload File</label>
        <div className="pass">
          <input type="file" className="file" id="file" required />
        </div>

        <a href="#" className="btn form__btn">
          Submit
        </a>
      </form>

      <div className="vector">
        <img src="./images/Vector.png" alt="Vector" />
      </div>
    </div>
  );
};

const FormRight = () => {
  return (
    <div className="form__right">
      <div className="form__right-img">
        <img src="./images/Vector-2.png" alt="Vector-3" />
      </div>
    </div>
  );
};
export default Submit;
