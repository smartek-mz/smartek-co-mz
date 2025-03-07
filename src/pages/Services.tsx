import React from "react";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("services")}</h1>;
};

export default Services;
