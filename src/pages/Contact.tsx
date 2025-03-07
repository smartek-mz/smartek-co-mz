import React from "react";
import { useTranslation } from "react-i18next";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t("contact")}</h1>;
};

export default Contact;
