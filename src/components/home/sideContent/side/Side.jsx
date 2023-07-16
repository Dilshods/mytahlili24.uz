import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { gallery } from "../../../../dummyData";
import Tpost from "../Tpost/Tpost";
import SocialMedia from "../social/SocialMedia";
import { useEffect, useState } from "react";

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.json())
      .then((result) => setCategorys(result.objectKoinot))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />

      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />

      <section className="catgorys">
        <Heading title="Catgeorys" />
        {/*<div className='items'>{allCat}</div>*/}
        {categorys?.map((val) => {
          return (
            <div className="category category1">
              <span>{val.textUz}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
