import React, { useState, useEffect } from "react";
import "./hero.css";

import { useParams } from "react-router-dom";

const Hero = () => {
  const { id } = useParams();
  const [items, setIems] = useState([]);
  const [catalogs, setCatalogs] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/newsStatus?page=0&size=10&sort=eventTime&status=IMPORTANT`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setIems(result.object.content))
      .catch((error) => console.log("error", error));
  }, [id]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/maxSee?page=0&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setCatalogs(result.object.content))
      .catch((error) => console.log("error", error));
  }, [id]);

  return (
    <>
      <section className="hero">
        <div className="contaner__hero">
          <div className="two__contener">
            {items.slice(0, 1).map((data) => {
              return (
                <div className="bigcontant" key={data.id}>
                  <a href={`/news/${data.id}`}>
                    <div className="img__content">
                      <img src={data.attachment.link} alt="" />
                    </div>
                  </a>
                  <div className="title__content">
                    <div className="date_event">
                      <span className="event_date">{data.eventTime}</span>
                    </div>
                    <a href={`/news/${data.id}`}>
                      <h1 className="title">{data.titleUz}</h1>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="child__container_card">
            {items.map((data) => (
              <div className="child_other_content" key={data.id}>
                <div className="child_other_images">
                  <a href={`/news/${data.id}`}>
                    <img src={data.attachment.link} alt="" />
                  </a>
                </div>
                <div className="child_other_title">
                  <div className="date">
                    <i class="fas fa-calendar-days" />
                    <label>{data.eventTime}</label>
                  </div>
                  <a href={`/news/${data.id}`}>
                    <h4 className="child_title">{data.titleUz}</h4>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="side__contant">
          <div className="side__more">
            <img
              src="http://www.tahlil24.uz/static/media/log-square.96d93932.svg"
              alt="Tahlil24"
              className="logo__square"
              width="15px"
              height="15px"
            />
            <a href="/uz/mostviewednews">Eng ko'p uqilganlar</a>
          </div>
          {catalogs.map((catalog) => {
            return (
              <>
                <div className="card_title-title" key={catalog.id}>
                  <div className="date">
                    <i className="fas fa-calendar-days" />
                    <label>{catalog.eventTime}</label>
                  </div>
                  <a href={`/news/${catalog.id}`}>
                    <h4>{catalog.titleUz}</h4>
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
