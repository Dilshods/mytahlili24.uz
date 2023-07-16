import React from "react";
import { lifestyle } from "../../../../dummyData";
import Heading from "../../../common/heading/Heading";

import "../Ppost/ppost.css";
//copy ppost code
const Life = () => {
  return (
    <>
      <section className="popularPost life">
        <Heading title="" />
        <div className="content">
          {lifestyle.map((val) => {
            return (
              <div className="items">
                <div className="box shadow">
                  <div className="images">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div class="category category1">
                      <span>{val.catgeory}</span>
                    </div>
                  </div>
                  <div className="text">
                    <h1 className="title">{val.title.slice(0, 40)}...</h1>
                    <div className="date">
                      <i class="fas fa-calendar-days"></i>
                      <label>{val.date}</label>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Life;
