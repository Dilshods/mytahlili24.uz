import React from "react";
import { useState, useEffect } from "react";
import { tpost } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";
import "./tpost.css";

const Tpost = () => {
  const [seeCard, setSeeCard] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/maxSee?page=0&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setSeeCard(result.object.content))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section className="tpost">
        <Heading title="Tiktok post" />
        {seeCard.map((val) => {
          return (
            <div className="box flexSB">
              <div className="img">
                <img src={val.attachment.link} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.titleUz.slice(0, 35)}...</h1>
                <span>{val.eventTime}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
