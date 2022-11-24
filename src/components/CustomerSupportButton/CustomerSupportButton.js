import React from "react";
import css from "./CustomerSupportButton.module.scss";

function CustomerSupportButton() {
  return (
    <a
      href="https://www.mever.me/sub5.html"
      className={css.customer_support_button}
    >
      고객지원
    </a>
  );
}

export default CustomerSupportButton;
