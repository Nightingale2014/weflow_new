import React from "react";
import { Link } from "react-router-dom";

function Review() {
  const reviews = [
    "문의 버튼 위치 바꾸고 상담 문의가 확실히 늘었어요.",
    "처음엔 반신반의했는데 랜딩페이지 만들고 나서 일주일 만에 상담 전화 3건이 왔어요.",
    "디자인이 너무 예뻐서 주변 원장님들한테 소개했어요. 진짜 퀄리티 대박.",
    "3일 만에 완성됐는데 가성비 최고입니다.",
    "광고 연동까지 해주셔서 운영이 편해졌어요.",
    "모바일에서 문의하기 버튼이 잘 보여서 문의가 늘었어요.",
    "상담 문의가 확 늘었어요.",
    "기획부터 같이 잡아줘서 편했습니다.",
    "SEO 부분까지 신경 써줘서 만족합니다.",
  ];

  return (
    <section className="review-section" id="reviews">
      <div className="review-head">
        <h2>고객 후기</h2>
        <a href="/services">후기 더보기 →</a>
      </div>

      <div className="review-track">
        <div className="review-slider">
          {[...reviews, ...reviews].map((text, index) => (
            <article className="review-card" key={index}>
              <div className="review-stars">★★★★★</div>
              
              <p>“{text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;