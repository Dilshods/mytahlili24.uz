import React from "react";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Music = () => {
  const [cover, setCover] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };

  useEffect((id) => {
    console.log("id", id);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/maxSee?page=0&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCover(result.object.content))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section className="photo">
        <Heading title="PhotoNews" />
        <div className="content">
          <Slider {...settings}>
            {cover.map((vat) => {
              return (
                <div className="items" key={vat.id}>
                  <div className="box shadow flexSB">
                    <div className="images">
                      <div className="img">
                        <Link to={`/news/${vat.id}`}>
                          <img src={vat.attachment.link} alt="" />
                        </Link>
                      </div>
                      <div class="category category1">
                        <span>{vat.category.textUz}</span>
                      </div>
                    </div>
                    <div className="text">
                      <Link to={`/news/${vat.id}`}>
                        <h1 className="title">{vat.titleUz.slice(0, 50)}...</h1>
                      </Link>
                      <div className="date">
                        <i className="fas fa-calendar-days" />
                        <label>{vat.eventTime}</label>
                      </div>
                      <div className="comment">
                        <i className="fas fa-share" />
                        <label>Share / </label>
                        <i class="fas fa-comments" />
                        <label>{vat.see}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
