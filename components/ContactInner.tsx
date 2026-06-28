"use client";

import { useState } from "react";

type FormState = {
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  consent: boolean;
};

export default function ContactInner() {
  const [form, setForm] = useState<FormState>({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("전송 실패");
      setSubmitted(true);
    } catch {
      setError("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16">
        <div className="w-16 h-16 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-leaf"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-forest mb-2">접수되었습니다</h3>
        <p className="text-forest/60 text-sm">
          영업일 기준 1~2일 내 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            회사명·기관명
          </label>
          <input
            type="text"
            value={form.company}
            onChange={set("company")}
            placeholder="주식회사 예시"
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            담당자명 <span className="text-clay">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            required
            placeholder="홍길동"
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            연락처 <span className="text-clay">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            required
            placeholder="010-0000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-forest mb-1.5">
            이메일
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="example@company.com"
            className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-forest mb-1.5">
          문의 유형
        </label>
        <select
          value={form.type}
          onChange={set("type")}
          className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm focus:outline-none focus:border-leaf"
        >
          <option value="">선택해 주세요</option>
          <option value="bulk">대량 구매</option>
          <option value="golf">골프장 도입</option>
          <option value="oem">OEM·ODM</option>
          <option value="export">수출 파트너십</option>
          <option value="home">홈가드닝 소량 구매</option>
          <option value="other">기타</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-forest mb-1.5">
          문의 내용
        </label>
        <textarea
          value={form.message}
          onChange={set("message")}
          rows={4}
          placeholder="구체적인 수량, 일정, 요청 사항 등을 적어 주세요."
          className="w-full px-4 py-2.5 rounded-xl border border-sage/30 bg-white text-forest text-sm placeholder-forest/30 focus:outline-none focus:border-leaf resize-none"
        />
      </div>

      {/* 개인정보 동의 — 필수 */}
      <div className="p-4 rounded-xl bg-sage/10 border border-sage/20">
        <label className="flex gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={set("consent")}
            required
            className="mt-0.5 w-4 h-4 accent-leaf flex-shrink-0"
          />
          <span className="text-xs text-forest/70 leading-relaxed">
            <strong className="text-forest">[필수]</strong> 개인정보 수집·이용에
            동의합니다. 수집 항목: 성명, 연락처, 이메일. 이용 목적: 상담 답변 및
            견적 제공. 보유 기간: 상담 완료 후 1년. 동의를 거부할 권리가 있으나,
            거부 시 상담 서비스가 제한됩니다.
          </span>
        </label>
      </div>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={!form.consent || sending}
        className="w-full py-3.5 rounded-xl bg-forest text-paper font-semibold hover:bg-leaf transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {sending ? "전송 중..." : "상담 신청하기"}
      </button>
    </form>
  );
}
