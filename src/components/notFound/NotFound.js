import React from "react";
import "./NotFoundStyle.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  const textLang = {
    uz: `Ma'lumot topilmadi`,
  };
  const textLangHome = {
    uz: "Asosiy sahifaga qaytish",
  };
  return (
    <div className="error_content">
      <h1 className="not__title">{textLang.uz}</h1>
      <div className="link__to__home">
        <Link className="not__link" to={"/"}>
          {textLangHome.uz}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
