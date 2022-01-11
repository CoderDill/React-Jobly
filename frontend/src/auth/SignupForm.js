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
      <h1>Sign Up</h1>
      <Form onSubmit={handleSubmit} className="signupForm">
        <FormGroup className="formGroup">
          <Label htmlFor="username"></Label>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Label htmlFor="password"></Label>
          <Input
            name="password"
            type="text"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Label htmlFor="firstName"></Label>
          <Input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Label htmlFor="lastName"></Label>
          <Input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="formGroup">
          <Label htmlFor="email"></Label>
          <Input
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
