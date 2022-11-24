import React from "react";
import css from "./Header.module.scss";

function Header() {
  return (
    <header className={css.header}>
      <img src="https://www.mever.me/img/logo_w4.png" alt="메버 로고 이미지" />
    </header>
  );
}

export default Header;
