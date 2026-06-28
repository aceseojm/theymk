import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { company, name, phone, email, type, message } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "필수 항목 누락" }, { status: 400 });
  }

  const typeLabel: Record<string, string> = {
    bulk: "대량 구매",
    golf: "골프장 도입",
    oem: "OEM·ODM",
    export: "수출 파트너십",
    home: "홈가드닝 소량 구매",
    other: "기타",
  };

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#143019">
      <div style="background:#143019;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="color:#8DC63F;margin:0;font-size:20px">YMK 신규 상담 신청</h1>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;width:100px">회사명</td><td style="padding:8px 0;font-weight:600">${company || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">담당자</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">연락처</td><td style="padding:8px 0;font-weight:600">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">이메일</td><td style="padding:8px 0;font-weight:600">${email || "—"}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280">문의 유형</td><td style="padding:8px 0;font-weight:600">${typeLabel[type] || type || "—"}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#f5f6f0;border-radius:8px">
          <p style="margin:0 0 8px;color:#6b7280;font-size:13px">문의 내용</p>
          <p style="margin:0;white-space:pre-wrap">${message || "—"}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#9ca3af">theymk.vercel.app 상담 신청 폼에서 접수됨</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"YMK 웹사이트" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `[YMK 상담] ${name}님 (${typeLabel[type] || type || "문의"})`,
      html,
      replyTo: email || undefined,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("메일 전송 오류:", err);
    return NextResponse.json({ error: "전송 실패" }, { status: 500 });
  }
}
