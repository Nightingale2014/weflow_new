import React from "react";

function Services() {
  const services = [
    { id: "01", icon: "▢", title: "weflow 케어플랜", desc: "제작+운영+광고+관리 원터치" },
    { id: "02", icon: "🚀", title: "빠른 제작", desc: "3~7일 로켓배송" },
    { id: "03", icon: "◎", title: "합리적인 가성비", desc: "퀄리티는 높게 비용은 합리적으로" },
    { id: "04", icon: "📞", title: "24시간 상담대기", desc: "빠른 상담 및 피드백" },
    { id: "05", icon: "↗", title: "운영 · 광고 지원", desc: "사후관리서비스" },
    { id: "06", icon: "◎", title: "문의 구조 설계", desc: "업종별 맞춤 문의 동선 구성" },
  ];

  return (
    <section className="care-section" id="services">
      <h2>WEFLOW만의 케어 플랜 혜택</h2>

      <div className="care-row">
        {services.map((item) => (
          <div className="care-card" key={item.id}>
            <div className="care-icon">{item.icon}</div>

            <div className="care-text">
              <span>{item.id}</span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;