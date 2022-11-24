import React from "react";
import CustomerSupportButton from "../CustomerSupportButton/CustomerSupportButton";
import css from "./MainContent.module.scss";

function MainContent() {
  return (
    <div className={css.main}>
      <CustomerSupportButton />
    </div>
  );
}

export default MainContent;
