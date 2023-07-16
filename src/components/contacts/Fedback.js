import React from "react";
import { useState } from "react";
import "./Fedback.css";
function Fedback() {
  const [feedFullName, setFeedFullName] = useState("");
  const [feedEmail, setFeedEmail] = useState("");
  const [feedNumber, setFeedNumber] = useState("");
  const [feedTitle, setFeedTitle] = useState("");

  const handleFeedbackClick = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      active: true,
      description: feedTitle,
      email: feedEmail,
      fullName: feedFullName,
      phoneNumber: feedNumber,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://165.232.85.45:1988/koinot/feedback", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.length != 0) {
          window.alert("Xabaringiz muvaffaqqiyatli jo'natildi");
        }
        if (
          feedFullName.length < 3 ||
          feedNumber.length < 9 ||
          feedTitle.length < 15
        ) {
          window.alert("Илтимос, маълумотларни тугри киритинг");
        }
      });
  };

  return (
    <>
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
        <span className="this_page">Aloqa</span>
      </div>
      <div className="feedback_send_contaner">
        <div className="informs">
          <h2 className="assimit">Aloqa</h2>
          <p className="title">
            Sayt faoliyati yuzasidan taklif yoki tanqidlaringiz bormi?
            «Tahlil24.uz»ga maqola yoki xabar yubormoqchimisiz? Yoki o‘zingiz
            guvoh bo‘lgan qandaydir hodisa haqida ma’lum qilmoqchimisiz?
            Hamkorlikka tayyormiz, biz bilan bog‘laning.
          </p>
        </div>
        <form className="form_container">
          <h2 className="contact-tatile">Xabar jo'natish</h2>
          <div className="infomation_content">
            <div className="input__box">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="input__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ismingiz "
                value={feedFullName}
                onChange={(e) => setFeedFullName(e.target.value)}
              />
            </div>
            <div className="input__box">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="input__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="El.pochta"
                value={feedEmail}
                onChange={(e) => setFeedEmail(e.target.value)}
              />
            </div>
            <div className="input__box">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="input__icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Tel  +998998588585"
                value={feedNumber}
                onChange={(e) => setFeedNumber(e.target.value)}
              />
            </div>
          </div>
          <h2 className="contact-tatile">Xabar jo'natilsh</h2>
          <textarea
            text="text"
            value={feedTitle}
            name="news"
            id="message"
            cols="30"
            rows="10"
            onChange={(e) => setFeedTitle(e.target.value)}
          />
          <button
            onClick={handleFeedbackClick}
            type="button"
            className="ant-btn ant-btn-primary more__news-btn sider"
          >
            <span>Jo‘natish</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default Fedback;
