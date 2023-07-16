import React from "react";
import "./NewsContent.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import NotStayed from "../notStayed/notStayed";
import NotFound from "../notFound/NotFound";

const NewsContent = () => {
  const [newsContent, setNewsContent] = useState([]);
  const [moreCard, setMoreCard] = useState(1);
  const [newsMoreContent, setNewsMoreContent] = useState([]);
  const [vital, setVital] = useState([]);
  const [vitalPage, setVitalPage] = useState(1);
  const [vitalMorePage, setVitalMorePage] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `
      http://165.232.85.45:1988/koinot/news/newsStatus?page=0&size=10&sort=id&status=IMPORTANT`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setNewsContent(result.object.content);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  const handleMoreCard = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `
      http://165.232.85.45:1988/koinot/news/newsStatus?page=${moreCard}&size=10&sort=id&status=IMPORTANT`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMoreCard(moreCard + 1);
        setNewsContent([...newsContent, ...result.object.content]);
        setNewsMoreContent(result.object.content.length !== 0);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `
      http://165.232.85.45:1988/koinot/news/maxSee?page=0&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVital(result.object.content);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleinformations = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/maxSee?page=${vitalPage}&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVitalPage(vitalPage + 1);
        setVital([...vital, ...result.object.content]);
        setVitalMorePage(result.object.content.length !== 0);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="container">
        <div className="nav_map">
          <span className="">Bosh sahifa</span>
          <span className="arrow_icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
            </svg>
          </span>
          <span className="this_page">Dolzarb xabarlar</span>
        </div>
      </div>
      <main>
        <div className="container_news_main">
          {newsContent.length > 0 ? (
            <section className="mainContent_tag">
              {newsContent.slice(0, 1).map((cat) => {
                return (
                  <div className="top_big-card_content" key={cat.id}>
                    <div
                      key={cat.id}
                      id="big_card-news"
                      className="bag_tag_image"
                      style={{
                        background: `url(${cat.attachment.link}) center center /cover no-repeat`,
                        border: "1px solid",
                      }}
                    >
                      <a href={`/news/${cat.id}`}>
                        <div className="big__card__bytag">
                          <div className="post_inners-bytag">
                            <div className="post_info">
                              <a href={`/news/${cat.id}`}>
                                <h6 className="post_category">
                                  {cat.category.textUz}
                                </h6>
                              </a>
                              <div className="post-date-items">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 24 24"
                                  className="time__icon"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                  <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                                </svg>
                                <span className="post-date">
                                  {cat.eventTime}
                                </span>
                              </div>
                            </div>
                            <a href={`/news/${cat.id}`}>
                              <p className="post_title">{cat.titleUz}</p>
                            </a>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
              <div className="grid-container">
                {newsContent.slice(1).map((cat) => (
                  <div className="card_normal_wrap ">
                    <a href={`/news/${cat.id}`} style={{ width: "100%" }}>
                      <img
                        src={cat.attachment.link}
                        className="card_img"
                        width="277"
                        alt=""
                      />
                    </a>
                    <div className="card_info">
                      <a href={`/news/${cat.id}`}>
                        <h4 className="category_news">{cat.category.textUz}</h4>
                      </a>
                      <span className="date_item">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          className="card_date time_icon"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                          <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                        </svg>
                      </span>
                      <span className="date_hours_event"> {cat.eventTime}</span>
                    </div>
                    <a href={`/news/${cat.id}`}>
                      <h4 className="card_title"> {cat.titleUz}</h4>
                    </a>
                  </div>
                ))}
              </div>
              <div className="more__news_btn">
                {newsMoreContent ? (
                  <button
                    onClick={handleMoreCard}
                    type="button"
                    className="ant-btn ant-btn-primary more__news_btn_center"
                  >
                    <span>Ko‘proq yuklash</span>
                  </button>
                ) : (
                  <div>
                    <NotStayed />
                  </div>
                )}
              </div>
            </section>
          ) : (
            <div className="notNewsPage">
              <NotFound />
            </div>
          )}

          <section className="sideContent">
            <div className="top__sider-title">
              <img
                src="http://www.tahlil24.uz/static/media/log-square.96d93932.svg"
                alt="Tahlil24"
                className="logo__square"
                width="15px"
                height="15px"
              />
              <a href={`/uz/mostviewednews`}>
                <h3 className="top__sider-title-text">Eng ko'p o'qilgan</h3>
              </a>
            </div>
            {vital.map((vit) => {
              return (
                <div className="top__sider-items">
                  <div className="top__sider-news">
                    <div className="sc-hKgJUU bUdCrb">
                      <div className="card__sider-inners">
                        <div className="sider__info">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="sider__date time__icon"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                            <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                          </svg>
                          <div className="sider__date date" key={vit.id}>
                            <span className="date__item">{vit.eventTime}</span>
                          </div>
                          <div className="sider__date views">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 1024 1024"
                              className="views__icon"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                            </svg>
                            <p className="views__text">{vit.see}</p>
                          </div>
                        </div>
                        <a href={`/news/${vit.id}`}>
                          <h4 className="sider__title">{vit.titleUz}</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="more__news">
              {vitalMorePage ? (
                <button
                  onClick={handleinformations}
                  type="button"
                  className="ant-btn ant-btn-primary more__news-btn sider"
                >
                  <span>Ko‘proq yuklash</span>
                </button>
              ) : (
                <div>
                  <NotStayed />
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default NewsContent;
