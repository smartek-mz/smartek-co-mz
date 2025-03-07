import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("home")}</h1>;
};

export default Home;