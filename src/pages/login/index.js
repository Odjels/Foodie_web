import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formData.email === "" || formData.email === null) {
      isvalid = false;
      validationErrors.email = "email required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid = false;
      validationErrors.email = "Email is not valid";
    }

    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "Password required";
    }

    axios
      .get("http://localhost:8000/users")
      .then((result) => {
        let isUserFound = false;
        result.data.forEach((user) => {
          if (user.email === formData.email) {
            isUserFound = true;
            if (user.password === formData.password) {
              alert("Login Successfully");
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password";
            }
          }
        });
        if (!isUserFound) {
          isvalid = false;
          validationErrors.email = "Wrong Email";
        }
        setErrors(validationErrors);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));

    console.log(formData);
  };
  return (
    <>
      <div className="header">
        <div className="header-contents">
          <h2>Get your favourite food recipe here</h2>
          <p>
            Your nurishment is our concern! Choose from our diverse meals,
            featuring a delectable array of dishes and their recipes
          </p>
        </div>
      </div>
      <div>
        <section className="bg-image">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card">
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>
                      {valid ? (
                        <></>
                      ) : (
                        <span className="text-danger">
                          {errors.fname}; {errors.lname}; {errors.email};
                          {errors.password}; {errors.cpassword}
                        </span>
                      )}
                      <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form3Example3cg"
                            class="form-control form-control-lg"
                            placeholder="Enter Your email"
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                email: event.target.value,
                              })
                            }
                          />
                          <label class="form-label" for="form3Example3cg">
                            Your Email
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form3Example4cg"
                            class="form-control form-control-lg"
                            placeholder="Enter Your password "
                            onChange={(event) =>
                              setFormData({
                                ...formData,
                                password: event.target.value,
                              })
                            }
                          />
                          <label class="form-label" for="form3Example4cg">
                            Password
                          </label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3cg"
                          />
                          <label class="form-check-label" for="form2Example3g">
                            I agree all statements in
                            <a href="#!" class="text-body">
                              <u>Terms of service</u>
                            </a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center">
                          <button
                            type="submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          >
                            <Link to="/home" className="fw-bold text-body">
                              <u>Login Now</u>
                            </Link>
                          </button>
                        </div>

                        <p class="text-center text-muted mt-5 mb-0">
                          Don't have an account?
                          <Link to={"/signup"} class="fw-bold text-body">
                            <u>Sign Up</u>
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
