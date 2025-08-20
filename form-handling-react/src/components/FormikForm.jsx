import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Registration Form (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block font-semibold">
              Username:
            </label>
            <Field
              type="text"
              id="username"
              name="username"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-semibold">
              Email:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block font-semibold">
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="w-full border rounded px-3 py-2"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
