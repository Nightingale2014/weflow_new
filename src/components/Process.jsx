import React from "react";

function ProcessIcon({ type }) {
  if (type === "user") {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }

  if (type === "tag") {
    return (
      <svg viewBox="0 0 24 24">
        <path d="M20.5 13.5 13.5 20.5a2 2 0 0 1-2.8 0L3 12.8V3h9.8l7.7 7.7a2 2 0 0 1 0 2.8Z" />
        <circle cx="7.5" cy="7.5" r="1.5" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24">
      <path d="M3 17 9 11l4 4 7-7" />
      <path d="M14 8h6v6" />
    </svg>
  );
}

function Process() {
  const leftSteps = [
    ["01", "상담·기획"],
    ["02", "기획·설계"],
    ["03", "디자인"],
    ["04", "개발·제작"],
    ["05", "SEO 최적화"],
    ["06", "광고운영·사후관리"],
  ];

  const rightSteps = [
    ["user", "고객 상담"],
    ["tag", "협의 후 제작"],
    ["check", "3~7일 완료"],
    ["chart", "광고 및 운영 사후 관리"],
  ];

  return (
    <section className="process-section">
      <div className="process-column">
        <h2>6단계 제작 프로세스</h2>
        <p>기존에 입각한 완성 후 배포, WEFLOW만의 체계적인 프로세스</p>

        <div className="process-list">
          {leftSteps.map(([num, text]) => (
            <div className="process-item" key={num}>
              <div className="process-number">{num}</div>
              <div className="process-content">{text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="process-column">
        <h2>제작진행과정</h2>
        <p>배포 전 제작부터 모든 과정을 WEFLOW가 함께해 드립니다.</p>

        <div className="process-list right">
          {rightSteps.map(([icon, text]) => (
            <div className="process-item" key={text}>
              <div className="process-number icon">
                <ProcessIcon type={icon} />
              </div>
              <div className="process-content">{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;