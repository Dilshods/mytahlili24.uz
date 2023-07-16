import React from "react";
import "./footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box-1">
            <div className="boxImg">
              <img src="../images/thalilBosh.png" alt="" />
            </div>
            <p>
              Tahririyat manzili: Farg‘ona viloyati, Qo‘shtepa tumani, Kattako‘l
              MFY, Kattako‘l ko‘chasi, 123-uy.
            </p>
            <i className="fa fa-envelope" />
            <span> Elektron manzil: info@tahlil24.uz </span> <br />
            <i className="fa fa-headphones" />
            <Link to="/uz/contact">
              <span>Aloqa</span>
            </Link>
          </div>
          <div className="box-2">
            <h3>Malumot</h3>
            <p>
              Barcha xuquqlar himoyalangan © 2021 Sayt materiallaridan to‘liq
              yoki qisman foydalanilganda veb-sayt manzili ko‘rsatilishi shart.​
              Veb-sayt OAV sifatida 2021 yil 17 iyul kuni O‘zbekiston
              Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va
              ommaviy kommunikatsiyalar agentligida 1436 raqam bilan ro‘yxatga
              olingan. Rasmiy xabarlarda va bloglarda ketgan ma’lumot -
              maqolalarga mualliflar va blogerlarning o‘zlari mas’uldirlar.
            </p>
          </div>
          <div className="box-3">
            <h3>Media</h3>
            <section className="social">
              <div className="socBox">
                <a
                  href="https://www.facebook.com/tahlil24/"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  <i className="fab fa-facebook-f" />
                  <span>12,740 Likes</span>
                </a>
              </div>
              <div className="socBox">
                <a
                  href="https://t.me/tahlil24uz"
                  style={{ color: "#fff" }}
                  target="_blank"
                >
                  <i className="fab fa-telegram" />
                  <span>5,600 Fans</span>
                </a>
              </div>
              <div className="socBox">
                <a
                  href="https://twitter.com/tahlil24?t=za_WYLijk6A-rFmZ0pHZwQ&s=09"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  <i className="fab fa-twitter" />
                  <span>8,700 Followers</span>
                </a>
              </div>
              <div className="socBox">
                <a
                  href="https://www.instagram.com/tahlil24_uz/"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  <i className="fab fa-instagram" />
                  <span>22,700 Followers</span>
                </a>
              </div>
              <div className="socBox">
                <a
                  href="https://www.YouTube.com/tahlil24_uz/"
                  target="_blank"
                  style={{ color: "#fff" }}
                >
                  <i className="fab fa-youtube" />
                  <span>2,700 Subscriber</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>
            made with <i className="fa fa-heart"></i> by gorkhcoder
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
