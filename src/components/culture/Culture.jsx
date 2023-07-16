import React from "react";
import "./culture.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotStayed from "../notStayed/notStayed";

const Culture = () => {
  const [newsget, setNewsget] = useState([]);
  const [newset, setNewset] = useState([]);
  const [send, setSend] = useState([]);
  const [moreNews, setMoreNews] = useState(1);
  const [notNews, setNotNews] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/newsById/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setNewsget(result.object.newsDto);
      })

      .catch((error) => console.log("error", error));
  }, []);

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
      .then((result) => {
        setNewset(result.object.content);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handlemore = () => {
    console.log("more", moreNews);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `http://165.232.85.45:1988/koinot/news/maxSee?page=${moreNews}&size=10&sort=see`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setMoreNews(moreNews + 1);
        setNewset([...newset, ...result.object.content]);
        setNotNews(result.object.content.length !== 0);
      })
      .catch((error) => console.log("error", error));
  };
  // console.log("malumot", notNews, moreNews);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://165.232.85.45:1988/koinot/news/byTagId/${1}?page=0&size=8&sort=id`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setSend(result.object.content);
        // console.log(result.object, "result");
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section className="culture">
        <div className="container paddingTB">
          <div className="wropper">
            <div className="item1">
              <div
                className="single-layout__left"
                id="last-newsl"
                data='{"url":"\/uz\/news\/list?f=latest&amp;l=5","title":"So\u2018nggi yangiliklar","mb":true}'
              >
                <a href="/uz/news" className="block-title-more">
                  <span>So‘nggi yangiliklar</span>
                </a>
                <div className="mb-25">
                  <a
                    className="news-lenta"
                    href="/uz/news/2023/06/13/aqsh-bmtni-isloh-qilish-boyicha-maslahatni-boshladi"
                  >
                    <div className="news-meta">
                      <span>00:04</span>
                    </div>
                    <span className="news-lenta__title">
                      {" "}
                      AQSh BMTni isloh qilish bo‘yicha maslahatni boshladi&nbsp;
                    </span>
                  </a>
                </div>
                <div className="mr-25">
                  <a className="main-btn w-100" href="uz/news">
                    Ko`proq yangiliklar
                  </a>
                </div>
              </div>
            </div>
            <div className="item2">
              <div className="single-layout__center slc">
                <div className="single-header">
                  <div className="single-header__meta">
                    <div className="date">{newsget.eventTime}</div>
                    <div className="view">{newsget.see}</div>
                    <div className="share-news">
                      <div className="share-news-label">Ulashing</div>
                      <div className="share-news-dropdown">
                        <div className="list">
                          <a
                            href={"https://www.facebook.com/tahlil24/"}
                            target="blank"
                            className="share-link s_facebook"
                          >
                            Facebook
                          </a>
                          <a
                            href={
                              "https://twitter.com/tahlil24?t=za_WYLijk6A-rFmZ0pHZwQ&s=09"
                            }
                            target="blank"
                            className="share-link s_twitter"
                          >
                            Twitter
                          </a>
                          <a
                            href={"https://t.me/tahlil24uz"}
                            target="blank"
                            className="share-link s_telegram"
                          >
                            Telegram
                          </a>
                          <a
                            href={"https://www.instagram.com/tahlil24_uz/"}
                            target="blank"
                            className="share-link s_telegram"
                          >
                            Instagram
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1
                    className="single-header__title"
                    style={{ marginbottom: "-0.1em" }}
                  >
                    {newsget.titleUz}
                  </h1>
                </div>
                <div className="single-content">
                  <div className="main-img">
                    <img src={newsget?.attachment?.link} />
                    <div className="main-img__caption">Rasmiy foto</div>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: newsget.textUz }} />
                </div>
                <div className="pl-20 pr-20">
                  <ul className="tags-ui reset-list">
                    <li className="tags-ui__items">
                      {newsget?.tag?.map((item) => (
                        <div className="tags-ui__item">
                          <a
                            key={item.id}
                            href={`/newsbytag/${item.id}`}
                            className="tags-ui__link"
                            style={{ margin: "5px" }}
                          >
                            <h3 className="tag-category-news">
                              #{item.textUz}
                            </h3>
                          </a>
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="item3">
              <div className="single-layout__right">
                <div>
                  <div className="block-title-more">
                    <img
                      src="http://www.tahlil24.uz/static/media/log-square.96d93932.svg"
                      alt="Tahlil24"
                      className="logo__square"
                      width="15px"
                      height="15px"
                    />
                    <a href={`/uz/mostviewednews`}>
                      <span>Eng ko‘p o‘qilganlar</span>
                    </a>
                  </div>
                  {newset.map((tag) => (
                    <a
                      className="news-recommended"
                      href={`/news/${tag.id}`}
                      key={tag.id}
                    >
                      <div className="pl-18">
                        <div className="news-meta">
                          <span>{tag.eventTime}</span>
                        </div>
                      </div>
                      <span className="news-recommended__title">
                        {tag.titleUz}
                      </span>
                    </a>
                  ))}
                </div>
                <div className="more__news">
                  {notNews ? (
                    <button
                      onClick={handlemore}
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
              </div>
            </div>
          </div>
          <section className="vintalar-card">
            <div className="news-vitaller">
              <a
                target="_blank"
                className="link_to_telegram"
                href="https://t.me/tahlil24uz"
              >
                Бизни телеграмда кузатиб боринг
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="menu_social-icons"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
                </svg>
              </a>
              <div className="other_news-inners">
                <div className="sc-gsTEea iZynXG">
                  <div className="great_news-header">
                    <div className="great_news-header-items">
                      <img
                        src="http://www.tahlil24.uz/static/media/log-square.96d93932.svg"
                        alt="Tahlil24"
                        className="logo__square"
                        width="15px"
                        height="15px"
                      />
                      <h3 className="great_news-header-title">Mavzuga doir</h3>
                    </div>
                    <div>
                      <a className="great_news-all-link" href="/">
                        <span className="great_news-all-link-text">
                          Barcha yangiliklar
                        </span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 16 16"
                          className="arrow_right-icon"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container-news">
                {send.map((val) => (
                  <div className="card_normal_wrap-news " key={val.id}>
                    <a href={`/news/${val.id}`} style={{ width: "100%" }}>
                      <img
                        src={val.attachment.link}
                        className="card_img-news"
                        width="277"
                        alt=""
                      />
                    </a>
                    <div className="card_info-news">
                      <a href={`/news/${val.id}`}>
                        <h4 className="category_news-news">
                          {val.category.textUz}
                        </h4>
                      </a>
                      <span className="date_item-news">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          className="card_date time_icon-news"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                          <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                        </svg>
                      </span>
                      <span className="date_hours_event-news">
                        {val.eventTime}
                      </span>
                    </div>
                    <a href={`/news/${val.id}`}>
                      <h4 className="card_title-news"> {val.titleUz}</h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Culture;
