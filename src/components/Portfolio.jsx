import React from "react";
import weflowPt from "../assets/weflow_pt.webp";
import weflowPilates from "../assets/weflow_pilates.webp";
import weflowHealth from "../assets/weflow_health.webp";
import weflowMoney from "../assets/weflow_money.webp";

function Portfolio() {
 const portfolioItems = [
  {
    title: "PT샵",
    category: "피트니스",
    image: weflowPt,
  },
  {
    title: "필라테스",
    category: "피트니스",
    image: weflowPilates,
  },
  {
    title: "헬스장",
    category: "피트니스",
    image: weflowHealth,
  },
  {
    title: "보험 설계",
    category: "금융",
    image: weflowMoney,
  },
];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-inner">
        <div className="portfolio-text">
          <h2>
            다양한 업종이
            <br />
            성공 사례를 확
            <br />
            인하세요.
          </h2>

          <p>
            어디서도 볼 수 없는 업종별 전환
            <br />
            최적화 사례를 직접 확인하세요.
          </p>

          <a href="#portfolio" className="portfolio-btn">
            살펴보기 →
          </a>
        </div>

        <div className="portfolio-cards">
          {portfolioItems.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="portfolio-card-body">
              <strong>{item.title}</strong>
              <span>{item.category}</span>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;