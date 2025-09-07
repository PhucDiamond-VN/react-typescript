import React from "react";
import styles from "./Header.module.css"; // import CSS module
import logo from "./assets/logo_ltt.svg"; // logo của bạn

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
        <span>Cao đẳng Lý Tự Trọng</span>
      </div>
      <nav className={styles.nav}>
        <a href="https://lttc.edu.vn/">Trang chủ</a>
        <a href="https://sv.lttc.edu.vn/dashboard.html">Sinh viên đăng nhập</a>
      </nav>
    </header>
  );
}

export default Header;
