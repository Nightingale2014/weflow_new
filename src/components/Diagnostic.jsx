import React from "react";

function Diagnostic() {
  const items = [
    {
      title: "문의 구조 진단",
      desc: "잠재 고객의 문의 이탈 최소화 전략 설계",
    },
    {
      title: "콘텐츠 및 레이아웃",
      desc: "브랜드와 서비스를 강조하는 화면 구성 제안",
    },
    {
      title: "SEO 및 속도 개선",
      desc: "네이버/구글 검색 최적화 및 로딩 속도 향상 가이드",
    },
    {
      title: "사용자 경험(UX) 개선",
      desc: "고객이 정보를 얻고 결제까지 원활하게 이어지는 흐름 설계",
    },
  ];

  return (
    <section className="diagnostic-section" id="diagnosis">
      <div className="diagnostic-inner">
        <h2>무료진단 후 나의 개선점 확인해보기</h2>
        <p>지금 바로 무료로 진단받고, 사이트의 숨겨진 잠재력을 발견하세요.</p>

        <div className="diagnostic-card">
          {items.map((item) => (
            <div className="diagnostic-item" key={item.title}>
              <span className="diagnostic-check">✓</span>
              <div>
                <strong>{item.title}</strong>
                <em>{item.desc}</em>
              </div>
            </div>
          ))}

          <a href="#diagnosis" className="diagnostic-btn">
            🔍 무료진단 후 견적 받기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Diagnostic;