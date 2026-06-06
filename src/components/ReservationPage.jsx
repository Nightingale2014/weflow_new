import React, { useState } from "react";

function ReservationPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    message: "",
  });

  const dates = ["6월 6일", "6월 7일", "6월 8일", "6월 9일", "6월 10일"];
  const times = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

  const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "12px",
    borderRadius: "12px",
    border: "1px solid rgba(34, 211, 238, 0.35)",
    background: "#0f1f3a",
    color: "#fff",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid rgba(34, 211, 238, 0.35)",
    background: "#0f1f3a",
    color: "#fff",
    cursor: "pointer",
  };

  const nextButtonStyle = {
    marginTop: "24px",
    padding: "15px 28px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
    color: "#fff",
    fontWeight: "700",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.business) {
      alert("이름, 연락처, 업종을 입력해주세요.");
      return;
    }

    setStep(4);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#030b1d",
        color: "#fff",
        padding: "90px 20px",
        boxSizing: "border-box",
      }}
    >
      <section style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(34, 211, 238, 0.45)",
            color: "#22d3ee",
            background: "rgba(34, 211, 238, 0.08)",
            marginBottom: "24px",
          }}
        >
          무료 상담 예약 · 24시간 내 연락 · 맞춤 견적 제공
        </div>

        <h1 style={{ fontSize: "52px", marginBottom: "16px" }}>예약</h1>

        <p style={{ color: "#94a3b8", marginBottom: "38px", lineHeight: "1.7" }}>
          날짜 선택 → 시간 선택 → 정보 입력 → 예약 완료
        </p>

        <div
          style={{
            background: "#07152e",
            border: "1px solid rgba(34, 211, 238, 0.25)",
            borderRadius: "24px",
            padding: "32px",
            textAlign: "left",
          }}
        >
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "30px" }}>
            {["1 날짜 선택", "2 시간 선택", "3 정보 입력", "4 예약 완료"].map((item, index) => (
              <span
                key={item}
                style={{
                  color: step >= index + 1 ? "#22d3ee" : "#64748b",
                  fontSize: "14px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {step === 1 && (
            <>
              <h2>날짜 선택</h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    style={{
                      ...buttonStyle,
                      background:
                        selectedDate === date
                          ? "linear-gradient(90deg, #2563eb, #06b6d4)"
                          : "#0f1f3a",
                    }}
                  >
                    {date}
                  </button>
                ))}
              </div>

              <button
                style={{ ...nextButtonStyle, opacity: selectedDate ? 1 : 0.4 }}
                disabled={!selectedDate}
                onClick={() => setStep(2)}
              >
                다음
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2>시간 선택</h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    style={{
                      ...buttonStyle,
                      background:
                        selectedTime === time
                          ? "linear-gradient(90deg, #2563eb, #06b6d4)"
                          : "#0f1f3a",
                    }}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
                <button style={buttonStyle} onClick={() => setStep(1)}>
                  이전
                </button>

                <button
                  style={{ ...nextButtonStyle, marginTop: 0, opacity: selectedTime ? 1 : 0.4 }}
                  disabled={!selectedTime}
                  onClick={() => setStep(3)}
                >
                  다음
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2>정보 입력</h2>

              <input
                style={inputStyle}
                placeholder="이름"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                style={inputStyle}
                placeholder="연락처"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                style={inputStyle}
                placeholder="업종 / 사업명"
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
              />

              <textarea
                style={{ ...inputStyle, height: "110px", resize: "none" }}
                placeholder="문의 내용"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <div style={{ color: "#cbd5e1", marginTop: "12px" }}>
                <p>선택 날짜: {selectedDate}</p>
                <p>선택 시간: {selectedTime}</p>
              </div>

              <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
                <button type="button" style={buttonStyle} onClick={() => setStep(2)}>
                  이전
                </button>

                <button type="submit" style={{ ...nextButtonStyle, marginTop: 0 }}>
                  예약 완료
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div style={{ textAlign: "center" }}>
              <h2>예약이 완료되었습니다</h2>

              <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
                {form.name}님, 상담 예약이 접수되었습니다.
                <br />
                선택하신 시간에 맞춰 연락드리겠습니다.
              </p>

              <div style={{ marginTop: "20px", color: "#cbd5e1" }}>
                <p>날짜: {selectedDate}</p>
                <p>시간: {selectedTime}</p>
                <p>연락처: {form.phone}</p>
                <p>업종: {form.business}</p>
              </div>

              <a
                href="/"
                style={{
                  ...nextButtonStyle,
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                메인으로 돌아가기
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReservationPage;