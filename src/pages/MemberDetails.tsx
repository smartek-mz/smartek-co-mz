import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const MemberDetails: React.FC = () => {
  const { t } = useTranslation();
  const { uid } = useParams();

  return (
    <div>
      <h1>{t("memberDetails")}</h1>
      <p>ID: {uid}</p>
    </div>
  );
};

export default MemberDetails;