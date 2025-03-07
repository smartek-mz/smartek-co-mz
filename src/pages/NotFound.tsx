import React from "react";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("notFound")}</h1>;
};

export default NotFound;
