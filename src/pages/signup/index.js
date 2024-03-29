import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};
    if (formData.fname === "" || formData.fname === null) {
      isvalid = false;
      validationErrors.fname = "First name required";
    }
    if (formData.lname === "" || formData.lname === null) {
      isvalid = false;
      validationErrors.lname = "Last name required";
    }
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
    if (formData.cpassword === "" || formData.cpassword === null) {
      isvalid = false;
      validationErrors.cpassword = "password does not match";
    }
    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successfull");

      axios
        .post("http://localhost:8000/users", formData)
        .then((result) => console.group(result))
        .catch((err) => console.log(err));
      setFormData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
      });
    } else {
      setErrors(validationErrors);
      setValid(isvalid);
    }

    console.log(formData);
  };
  return (
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
                        type="text"
                        name="fname"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        placeholder="Enter Your First Name"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            fname: event.target.value,
                          })
                        }
                      />
                      <label class="form-label" for="form3Example1cg">
                        First Name
                      </label>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        name="lname"
                        id="form3Example1cg"
                        class="form-control form-control-lg"
                        placeholder="Enter Your Last Name"
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            lname: event.target.value,
                          })
                        }
                      />
                      <label class="form-label" for="form3Example1cg">
                        last Name
                      </label>
                    </div>

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

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        class="form-control form-control-lg"
                        placeholder="Confirm Your password "
                        onChange={(event) =>
                          setFormData({
                            ...formData,
                            cpassword: event.target.value,
                          })
                        }
                      />
                      <label class="form-label" for="form3Example4cdg">
                        Confirm your password
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
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <Link to={"/login"} class="fw-bold text-body">
                        <u>Login here</u>
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
  );
};

export default Signup;
