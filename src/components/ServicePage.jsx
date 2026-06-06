import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function ServicePage() {
  const steps = [
    {
      number: "01",
      icon: "▣",
      title: "상담·진단",
      desc: "업종 특성과 현재 온라인 상황을 분석하고 제작 방향을 제안합니다.",
    },
    {
      number: "02",
      icon: "▤",
      title: "기획·설계",
      desc: "문의가 이어지는 구조를 기준으로 페이지 구성과 콘텐츠 흐름을 기획합니다.",
    },
    {
      number: "03",
      icon: "◈",
      title: "디자인",
      desc: "업종에 맞는 브랜드 감성과 신뢰감을 주는 UI/UX 디자인을 완성합니다.",
    },
    {
      number: "04",
      icon: "⌘",
      title: "개발·테스트",
      desc: "모바일·PC 반응형으로 개발하고 문의 버튼 등 동작을 검수합니다.",
    },
    {
      number: "05",
      icon: "↗",
      title: "SEO 상담녹득",
      desc: "네이버·구글 검색 노출을 위한 SEO 기본 최적화 작업을 진행합니다.",
    },
    {
      number: "06",
      icon: "↗",
      title: "광고·운영·사후관리",
      desc: "오픈 이후 광고 운영, 콘텐츠 업로드, 업데이트까지 지속적으로 관리합니다.",
    },
  ];

  return (
    <>
      <Header />

      <main className="service-page">
        <section className="service-process-section">
          <div className="service-page-head">
            <span className="page-badge">PROCESS</span>
            <h1>6단계 제작 프로세스</h1>
            <p>체계적인 프로세스로 완성도 높은 결과를 만들어 드립니다</p>
          </div>

          <div className="service-page-grid">
            {steps.map((item) => (
              <article className="service-process-card" key={item.number}>
                <div className="service-icon">{item.icon}</div>
                <span className="service-small-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <strong>{item.number}</strong>
              </article>
            ))}
          </div>

        </section>

        <section className="ad-system-section">
          <div className="service-page-head">
            <span className="page-badge orange">DETAIL</span>
            <h2>광고 운영 · 사후관리 시스템</h2>
            <p>트래픽 확보부터 매출 전환, 방문 유지까지 모든 것을 책임집니다</p>
          </div>

          <div className="ad-system-grid">
            <article className="ad-system-card orange-line">
              <h3>📣 콘텐츠 마케팅</h3>
              <ul>
                <li>블로그 업로드</li>
                <li>포스팅 방향 및 브랜드 자산 관리</li>
                <li>인스타 업로드</li>
                <li>콘텐츠 기획 및 노출 흐름 관리</li>
                <li>스마트 업로드</li>
                <li>실시간 키워드 기반 바이럴 확산</li>
              </ul>
            </article>

            <article className="ad-system-card blue-line">
              <h3>🎯 로컬 & 키워드 타겟팅</h3>
              <ul>
                <li>네이버 키워드</li>
                <li>검색 고객을 기준으로 광고 키워드 세팅</li>
                <li>당근클래스</li>
                <li>지역 기반 타겟 노출 및 동네 주민 유입 광고</li>
              </ul>
            </article>

            <article className="ad-system-card green-line">
              <h3>🚀 전환 SEO 최적화</h3>
              <ul>
                <li>네이버 서치어드바이저</li>
                <li>네이버 검색 로봇 최적화 및 상위 노출</li>
                <li>구글 콘솔</li>
                <li>구글 검색 엔진 최적화 및 색인 생성</li>
                <li>사이트맵 등록</li>
                <li>검색 노출 누락 방지 및 안정적 노출 관리</li>
              </ul>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicePage;