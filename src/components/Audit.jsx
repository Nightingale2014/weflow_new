import React from 'react';

function Audit() {
  return (
    <section style={{ 
      padding: '80px 10vw', 
      backgroundColor: '#020617', 
      textAlign: 'center',
      color: '#fff' 
    }}>
      <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>무료진단 후 나의 개선점 확인해보기</h2>
      <p style={{ color: '#94a3b8', marginBottom: '40px' }}>지금 바로 무료로 진단받고, 사이트의 숨겨진 잠재력을 발견하세요.</p>
      
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        backgroundColor: '#0f172a', 
        padding: '30px', 
        borderRadius: '12px',
        border: '1px solid #1e293b'
      }}>
        {['문의 구조 진단', '콘텐츠 및 레이아웃', 'SEO 및 속도 개선', '사용자 경험(UX) 개선'].map((item, i) => (
          <div key={i} style={{ textAlign: 'left', marginBottom: '15px', padding: '10px 0', borderBottom: '1px solid #1e293b' }}>
            ✓ {item}
          </div>
        ))}
        <button style={{ 
          marginTop: '20px', 
          width: '100%', 
          padding: '15px', 
          backgroundColor: '#0284c7', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '8px', 
          cursor: 'pointer' 
        }}>무료진단 후 견적 받기</button>
      </div>
    </section>
  );
}

export default Audit;