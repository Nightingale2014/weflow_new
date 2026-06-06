import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="nav">
        <a href="/" className="logo">
          <span className="logo-mark">W</span>
          <span className="logo-text">
            WEF<span>LOW</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="/">홈</a>
          <a href="/services">서비스</a>
          <a href="/#plans">제작플랜&가격안내</a>
          <a href="/#portfolio">성공사례</a>
          <a href="/#diagnosis">예약</a>
          <a href="/#diagnosis" className="nav-cta">
            무료진단받기
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;