import React from "react";
import Heading from "../../common/heading/Heading";
import { useState, useEffect } from "react";
import "./style.css";

const Discover = () => {
  const [discover, setDisCover] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/byTagId/1?page=0&size=10&sort=id`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setDisCover(result.object.content))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <section className="discover">
        <div className="container">
          <Heading title="Tagcover" />
          <div className="content">
            {discover.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.attachment.link} alt="" />
                  </div>
                  <h1 className="title">{val.category.textUz}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
