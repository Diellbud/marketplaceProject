import { useState } from "react";
import { Link } from "react-router";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    const formInfo = new FormData(e.target);
    const formDataObject = Object.fromEntries(formInfo.entries());
    setFormData(formDataObject);
    if (
      formData.name !== "" ||
      formData.email !== "" ||
      formData.password !== ""
    ) {
      console.log(formData);
    }
  }
  return (
    <div className="pageContainer">
      <header className="pageHeader">Create Your Account</header>
      <main>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="name"
            id="name"
            placeholder="Name"
            className="nameInput"
            type="text"
          />
          <input
            name="email"
            id="email"
            placeholder="Email"
            className="emailInput"
            type="email"
          />
          <input
            name="password"
            id="password"
            placeholder="Password"
            className="passwordInput"
            type="password"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/signIn">Already Signed in? Sign In!</Link>
      </main>
    </div>
  );
}

export default SignUp;
