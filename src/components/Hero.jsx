import React from "react";
import logo from "../assets/weflow_logo.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1>
            문의로 이어지는
            <br />
            홈페이지를
            <br />
            만듭니다
          </h1>

          <p>
            홈페이지 제작부터 광고 연동·운영 관리까지
            <br />
            단순 제작이 아닌 문의 구조까지 설계합니다.
          </p>

          <div className="hero-buttons">
            <a href="#diagnosis" className="primary-btn">
              무료 진단 신청
            </a>

            <a href="#portfolio" className="secondary-btn">
              성공 사례 보기
            </a>

            <a href="#landing" className="secondary-btn small-btn">
              랜딩페이지
            </a>
          </div>

          <div className="hero-tags">
            <div className="hero-tag">
              <strong>케어 플랜</strong>
              <span>제작·광고·운영</span>
            </div>

            <div className="hero-tag">
              <strong>빠른제작</strong>
              <span>3일~7일</span>
            </div>

            <div className="hero-tag">
              <strong>합리적 비용</strong>
              <span>가성비+퀄리티</span>
            </div>

            <div className="hero-tag">
              <strong>24시간 상담</strong>
              <span>신속한 피드백</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-badge badge-top">
            <strong>3~7일</strong>
            <span>빠른 납품</span>
          </div>

          <div className="floating-badge badge-left">
            <strong>24시간</strong>
            <span>상담 가능</span>
          </div>

          <div className="floating-badge badge-bottom">
            <span className="green-dot"></span>
            실시간 상담중
          </div>

          <div className="hero-logo-wrap">
          <div className="hero-logo-ring ring-one"></div>
          <div className="hero-logo-ring ring-two"></div>
          <div className="hero-logo-ring ring-three"></div>

          <div className="hero-logo-placeholder">
          <img src={logo} alt="WEFLOW" />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;