import { ingredients } from "@/lib/data";

export default function CompositionSignature() {
  return (
    <section className="bg-forest py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <p className="text-leaf text-sm font-medium uppercase tracking-widest mb-3">
            투명성 선언
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-paper mb-4">
            57% 탈지대두 기반 유기질 비료
          </h2>
          <p className="text-sage max-w-xl mx-auto">
            좋은 비료는 <strong className="text-paper font-semibold">결과보다 과정</strong>이 중요합니다.<br />
            강원대학교 산학협력단 유기농업자재 공시에 등록된 <strong className="text-paper font-semibold">원료 구성 비율을 투명하게 공개</strong>합니다.
          </p>
        </div>

        {/* 배합 바 */}
        <div className="max-w-3xl mx-auto">
          {/* 가로 비율 바 */}
          <div className="flex rounded-2xl overflow-hidden h-16 mb-8 shadow-xl">
            {ingredients.map((ing) => (
              <div
                key={ing.name}
                style={{ width: `${ing.ratio}%`, backgroundColor: ing.color }}
                className="flex items-center justify-center transition-all duration-500"
                title={`${ing.name} ${ing.ratio}%`}
              >
                {ing.ratio >= 15 && (
                  <span className="text-white text-sm font-bold drop-shadow">
                    {ing.ratio}%
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* 범례 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ingredients.map((ing) => (
              <div key={ing.name} className="flex items-center gap-3">
                <span
                  className="w-4 h-4 rounded flex-shrink-0"
                  style={{ backgroundColor: ing.color }}
                />
                <div>
                  <p className="text-paper text-sm font-semibold">{ing.name}</p>
                  <p className="text-sage text-xs">{ing.ratio}% 투입</p>
                </div>
              </div>
            ))}
          </div>

          {/* 공시 정보 */}
          <div className="mt-10 p-5 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-sage text-sm">
              본 원료 배합 비율은 <strong className="text-paper font-semibold">강원대학교 산학협력단 유기농업자재 공시자료</strong>를 기준으로 작성되었습니다.
            </p>
            <p className="text-sage/60 text-xs mt-1">
              공시번호 : <strong className="text-sage font-medium">제 공시-2-3-974호</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
