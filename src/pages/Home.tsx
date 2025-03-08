import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/style.css";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="home-container">
      <h1 className="title">{t("home", "Smartek")}</h1>
      <p className="subtitle">{t("subtitle", "Algo incrível será construído aqui ...")}</p>
      <img src="assets/img/build-website.jpg" alt={t("imageAlt", "Construção do site")} className="build-image" />
      <p className="segit-text">
        {t("segitText", "Você já conhece o ")} <strong>SEGIT</strong>? {t("segitDescription", "Um sistema de gestão escolar poderoso?")}
      </p>
      <Link to="/segit" className="segit-link">{t("learnMore", "Saiba mais")}</Link>
    </div>
  );
};

export default Home;