import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formValidation } from "./FormValidation";
import { useFormik } from "formik";

const Create = () => {
  const navigate = useNavigate();

  const initialValues = {
    bookTitle: "",
    authorName: "",
    ISBN_Number: "",
    publicationDate: "",
    bookImage: "",
    authorBirthDate: "",
    shortBio: "",
  };

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: formValidation,
    onSubmit: async (values) => {
      const confirmation = window.confirm(
        `Do you want to " ADD this INFORMATION"....???? `
      );
      if (confirmation) {
        await axios
          .post(
            `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/book`,
            values
          )
          .catch((err) => console.log(err));
        navigate("/");
      }
    },
  });

  return (
    <div className="container">
      <div className="d-flex  my-5 justify-content-between  ">
        <button
          className="btn btn-outline-danger fw-bolder"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h1 className="mx-auto fw-bolder">Add Information</h1>
      </div>

      <div className="col-sm-12">
        <div className="card border-primary   p-sm-4 m-sm-0  p-lg-5 m-lg-5   row-cols-sm-1">
          <form onSubmit={handleSubmit}>
            <div className="text-center m-3 fw-bolder text-dark fs-3">
              Book Details
            </div>
            <div className="form-group flex-grow-1   flex-fill mb-2">
              <label className=" form-label mt-2 text-dark" htmlFor="bookTitle">
                Book Title
              </label>
              <input
                type="text"
                className=" form-control "
                name="bookTitle"
                value={values.bookTitle}
                onChange={handleChange}
                id="bookTitle"
                placeholder="Enter Book Title"
              />
            </div>
            {errors.bookTitle && (
              <div className="text-danger">{errors.bookTitle}</div>
            )}
            <div className="form-group mb-2">
              <label
                className=" form-label mt-2 text-dark"
                htmlFor="authorName"
              >
                Author Name
              </label>
              <input
                type="text"
                className=" form-control"
                id="authorName"
                placeholder="Author Name"
                name="authorName"
                value={values.authorName}
                onChange={handleChange}
              />
            </div>
            {errors.authorName && (
              <div className="text-danger">{errors.authorName}</div>
            )}
            <div className="form-group mb-2">
              <label
                className=" form-label mt-2 text-dark"
                htmlFor="isbnNumber"
              >
                ISBN Number
              </label>
              <input
                type="text"
                className=" form-control"
                id="isbnNumber"
                placeholder="ISBN Number"
                name="ISBN_Number"
                value={values.ISBN_Number}
                onChange={handleChange}
              />
            </div>
            {errors.ISBN_Number && (
              <div className="text-danger">{errors.ISBN_Number}</div>
            )}
            <div className="form-group ">
              <label className=" form-label mt-2 text-dark" htmlFor="pbDate">
                Publication Date
              </label>
              <input
                type="date"
                className=" form-control"
                id="pbDate"
                placeholder="Publication Date"
                name="publicationDate"
                value={values.publicationDate}
                onChange={handleChange}
              />
            </div>
            {errors.publicationDate && (
              <div className="text-danger">{errors.publicationDate}</div>
            )}
            <div className="form-group ">
              <label className=" form-label mt-2 text-dark" htmlFor="bookImage">
                Book Image URL
              </label>
              <input
                type="url"
                className=" form-control"
                id="bookImage"
                placeholder="Book Image URL"
                name="bookImage"
                value={values.bookImage}
                onChange={handleChange}
              />
            </div>
            {errors.bookImage && (
              <div className="text-danger">{errors.bookImage}</div>
            )}
            <div className="text-center m-3 fw-bolder text-dark fs-3">
              Author Details
            </div>
            <div className="form-group mb-2 ">
              <label
                className=" form-label mt-2 text-dark"
                htmlFor="authorName"
              >
                Author Name
              </label>
              <input
                type="text"
                className=" form-control "
                id="authorName"
                placeholder="Author Name"
                name="authorName"
                value={values.authorName}
                onChange={handleChange}
              />
            </div>
            {errors.authorName && (
              <div className="text-danger">{errors.authorName}</div>
            )}
            <div className="form-group mb-2">
              <label className=" form-label mt-2 text-dark" htmlFor="birthDate">
                Author Birth Date
              </label>
              <input
                type="date"
                className=" form-control"
                id="birthDate"
                placeholder=" Author Birth Date"
                name="authorBirthDate"
                value={values.authorBirthDate}
                onChange={handleChange}
              />
            </div>
            {errors.authorBirthDate && (
              <div className="text-danger">{errors.authorBirthDate}</div>
            )}
            <div className="form-group">
              <label className=" form-label mt-2 text-dark" htmlFor="bio">
                Short Bio
              </label>
              <input
                type="text"
                className=" form-control"
                id="bio"
                placeholder="Short Bio"
                name="shortBio"
                value={values.shortBio}
                onChange={handleChange}
              />
            </div>
            {errors.shortBio && (
              <div className="text-danger">{errors.shortBio}</div>
            )}
            <div className="g-grid gap-2 mt-4 text-center">
              <button type="submit" className="btn btn-outline-info">
                Add Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
