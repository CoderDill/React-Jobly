import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './SignupForm.css'

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
      <Form onSubmit={handleSubmit} className="signupForm">
        <FormGroup className="formGroup">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="text"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <Button>Sign Up</Button>
      </Form>
    </>
  );
};

export default SignupForm;
