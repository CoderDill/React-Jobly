import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./LoginForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
      password: ""
    });
  };
  return (
    <>
      <h1>Log in</h1>
      <Form onSubmit={handleSubmit} className="loginForm">
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
        <Button>Log in</Button>
      </Form>
    </>
  );
};

export default LoginForm;
