import React, { useState, useEffect } from "react";
import Head from "./Head";
import "./header.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://165.232.85.45:1988/koinot/category", requestOptions)
      .then((response) => response.json())
      .then((result) => setCategory(result.objectKoinot))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <div className="logonew">
            <Link to="/">
              <span className="news24">TAHLIL</span>
              <span className="newslogo">24</span>
            </Link>
          </div>
          {category.map((item) => (
            <ul
              key={item.id}
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                {/* /${item.textUz} */}
                <Link to={`/category/${item.id}`}>{item.textUz}</Link>
              </li>
            </ul>
          ))}
          <div class="mob__search">
            <input
              class="mob__search-input"
              type="text"
              placeholder="Qidirish..."
            />
          </div>
          <button className="barIcon" onClick={() => setNavbar(!navbar)}>
            {navbar ? (
              <i className="fa fa-times" />
            ) : (
              <i className="fa fa-bars" />
            )}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
