import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Card.css";
const Card = ({ item, index }) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-5  d-flex align-items-stretch ">
      <div className="card w-100 ">
        <img src={item.bookImage} alt="book image" />
        <p className=" text-center fst-italic mt-3">Book Titile</p>
        <h2 className=" fw-bolder text-dark text-center text-uppercase p-2">
          {item.bookTitle}
        </h2>
        <div className="card-body  d-flex flex-column ">
          <p className="card-text text-center fst-italic">Author Name</p>
          <p className="card-text text-center text-dark fw-bold">
            {item.authorName}
          </p>
        </div>
        <div className="card-footer text-center mb-3">
          <button
            className="btn btn-outline-info"
            onClick={() => navigate(`/read/${item.id}`)}
          >
            Read Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
