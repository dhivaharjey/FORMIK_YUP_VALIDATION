import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(); ////Used for data deletion updation/re-render
  const navigate = useNavigate(); /////hook Using for navigation between components
  useEffect(() => {
    fetchData();
  }, [del]); //////to re-render the component after delete [del] --to remove the data
  const { id } = useParams(); ////Used for get particular user data
  const fetchData = async () => {
    await axios
      .get(`https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/book/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  /////////-------To Delete  the user from the DB----///////
  const handleDelete = async () => {
    const confirmation = window.confirm(
      `Do you want to "DELETE" this information..??? `
    ); /// Confirmation msg before delete
    if (confirmation) {
      await axios ////delete call using axios
        .delete(
          `https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/book/${id}`
        )
        .then((res) => setDel(res.data))
        .catch((err) => console.log(err));

      navigate("/"); //navigate to home page
    }
  };
  const handleEdit = () => {
    const confirmation = window.confirm(
      `Do you want to "EDIT" this information..??? `
    );
    if (confirmation) {
      navigate(`/update/${id}`);
    }
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center  vh-100  bg-dark-subtle shadow">
        <div className="card p-5  bg-transparent shadow ">
          <div className=" card-body d-flex ">
            <div className="  fs-4 fw-semibold">
              <div className="mb-1">Book Title </div>
              <div className="mb-1">Author Name </div>
              <div className="mb-1">ISBN Number </div>
              <div className="mb-1">Publication Date </div>
              <div className="mb-1">Author Name </div>
              <div className="mb-1">Author Birth Date </div>
              <div className="mb-1">Author Short Bio </div>
            </div>
            <div className=" text-dark fw-bolder mx-2 fs-4 ">
              <div className="mb-1 ">: {data.bookTitle}</div>
              <div className="mb-1 ">: {data.authorName}</div>
              <div className="mb-1 ">: {data.ISBN_Number}</div>
              <div className="mb-1 ">: {data.publicationDate}</div>
              <div className="mb-1 ">: {data.authorName}</div>
              <div className="mb-1 ">: {data.authorBirthDate}</div>
              <div className="mb-1 ">: {data.shortBio}</div>
            </div>
          </div>
          <div className=" form-group">
            <button
              className="btn btn-outline-success mx-2 px-5"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="btn  btn-outline-danger px-5 mx-2"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="btn btn-outline-dark fw-bolder px-5 mx-2"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
