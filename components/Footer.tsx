import Image from "next/image";
import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="relative w-12 h-12 flex-shrink-0 mt-0.5">
              <Image
                src="/images/ymk-logo1.png"
                alt="YMK 로고"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-paper text-lg font-semibold mb-0.5">YMK</p>
              <p className="text-leaf text-[10px] font-medium uppercase tracking-widest mb-2">We Care</p>
              <p className="text-sage text-sm leading-relaxed">
                {company.name} · 대표이사 {company.ceo}
                <br />
                사업자등록번호 {company.bizNumber}
                <br />
                {company.address}
              </p>
            </div>
          </div>
          <div className="text-sage text-xs text-left md:text-right self-end md:self-auto">
            <p>© {new Date().getFullYear()} 주식회사 와이엠케이. All rights reserved.</p>
            <p className="mt-1 text-sage/50">
              통신판매업 신고번호 기재 예정
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
