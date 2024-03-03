import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);

  ///////-------Fetching the data ---//////////
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios ///Get call using axios
      .get("https://65d75bbd27d9a3bc1d7ad5d0.mockapi.io/user_data/book") ///to get user details axios 'get' api call
      .then((res) => setData(res.data)) /// updating response data using state
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className=" container  container px-4 px-lg-5 mt-5">
        <div className="row   g-4 gx-4  row-cols-md-2  ">
          {data.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
