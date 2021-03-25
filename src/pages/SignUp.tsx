import { useFormik } from "formik";
import React from "react";
import { Button, Input, Label } from "@windmill/react-ui";
import background from "./SignUp.png";

const SignUp: React.FC = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div
      className="h-screen w-screen flex justify-around content-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="w-1/2 flex content-center">
        {/* <img
          className="w-full"
          alt="left"
          src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-600w-1029171697.jpg"
        /> */}
      </div>
      <div className="w-1/2 m-12 p-12 bg-white border-gray-600 border-8 rounded-md">
        <h1>Sign Up</h1>
        <form className="mt-4" onSubmit={formik.handleSubmit}>
          <Label>
            <span>Email</span>
            <Input
              css=""
              className="mt-1"
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Label>

          <Label>
            <span>Password</span>
            <Input
              css=""
              className="mt-1"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Label>

          <Button className="my-4" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
