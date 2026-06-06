import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">W</div>

            <p>
              제작부터 관리까지
              <br />
              비즈니스 성장을 함께합니다.
            </p>

            <div className="footer-info">
              <span>대표 : 신서준</span>
              <span>사업자등록번호 : 884-07-03480</span>
              <span>이메일 : contact@weflowlab.kr</span>
              <span>운영시간 : 연중무휴 24시간 상담가능</span>
            </div>

            <div className="footer-links-small">
              <a href="#privacy">개인정보처리방침</a>
              <a href="#terms">이용약관</a>
            </div>

            <div className="footer-copy">© 2026 WEFLOW. All rights reserved.</div>
          </div>

          <div className="footer-col">
            <h4>서비스</h4>
            <a href="#process">홈페이지 제작 과정</a>
            <a href="#landing">랜딩페이지 제작 과정</a>
            <a href="#services">광고 운영 · 관리 안내</a>
          </div>

          <div className="footer-col">
            <h4>WEFLOW 케어플랜</h4>
            <a href="#care">WE 케어</a>
            <a href="#care">FLOW 케어</a>
            <a href="#care">WEFLOW 케어</a>
          </div>

          <div className="footer-col">
            <h4>상담문의</h4>
            <a href="#phone">전화문의 ↗</a>
            <a href="#mail">이메일 문의 ↗</a>
            <a href="#kakao">카카오 채널 문의 ↗</a>
            <a href="#instagram">인스타 문의 ↗</a>
            <a href="#blog">블로그 ↗</a>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-bar">
        <a href="#consult">
          <span>⏰</span>
          24시간 상담 가능
        </a>

        <a href="#kakao">
          <span>💬</span>
          카카오톡상담
        </a>

        <a href="#blog">
          <span>📝</span>
          블로그
        </a>

        <a href="#diagnosis">
          <span>✅</span>
          무료진단 상담
        </a>
      </div>
    </>
  );
}

export default Footer;