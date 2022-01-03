import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="SignupForm">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="newBox">Password</label>
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="newBox">First Name</label>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="newBox">Last Name</label>
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="newBox">Email</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Sign Up</button>
      </form>
    </>
  );
};

export default SignupForm;
