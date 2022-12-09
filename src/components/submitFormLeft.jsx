import vector1image from "../images/Vector-1.png";
import vector from "../images/Vector.png";
import axios from "axios";
import { useState } from "react";
export const SubmitFormLeft = () => {

  async function apiCall(params) {
    // Submit form data to the endpoint
    try {
      const response = await axios.post('https://gleaming-tuna-fashion.cyclic.app//student/upload', params, {
        header: {
          'Content-Type': 'multipart/form-data', // Specify that the request body is a multipart form
        }
      });
      const { data } = await response
      console.log("here")
      console.log(data?.student)
    } catch (error) {
      // Handle error\
      throw (error)
    }
  };



  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [topic, setTopic] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare form data to be submitted
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("topic", topic);
    formData.append("registrationNumber", registrationNumber);
    formData.append("email", email);
    formData.append("project", project);

    // Submit form data to the endpoint
    apiCall(formData)
    // axios.post("http://localhost:3500/student/upload", formData);
  };

  return (
    <div className="form__left">
      <div className="vector__1">
        <img src={vector1image} alt="Vector-1" />
      </div>

      <h1>Welcome!</h1>
      <form className="form" id="form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="first__name">First Name</label>
        <div className="pass">
          <input
            type="text"
            className="first__name"
            id="first-name"
            placeholder="Enter your Name"
            required
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
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
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
        </div>

        <label htmlFor="last__name">Registration Number</label>
        <div className="pass">
          <input
            type="text"
            className="reg___number"
            id="reg-number"
            placeholder="18/ev/sc/1022"
            onChange={(event) => setRegistrationNumber(event.target.value)}
            required
          />
        </div>

        <label htmlFor="file">Upload File</label>
        <div className="pass">
          <input
            type="file"
            onChange={(event) => setProject(event.target.files[0])}
            className="file"
            id="file"
            required
          />
        </div>

        <button type="submit" className="btn form__btn">
          Submit
        </button>
      </form>

      <div className="vector">
        <img src={vector} alt="Vector" />
      </div>
    </div>
  );
};
