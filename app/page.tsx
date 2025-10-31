import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RiSupabaseFill } from "react-icons/ri";
import { HeroBanner, HeroBannerSlide } from "@/components/hero/hero-banner";

export default function Home() {
  // 샘플 히어로 배너 데이터 (Unsplash 이미지 사용)
  const heroSlides: HeroBannerSlide[] = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop&crop=center&auto=format&q=80",
      imageAlt: "세련된 패션 아이템과 액세서리 모음",
      title: "최신 트렌드 패션",
      subtitle: "지금 바로 확인하세요",
      ctaText: "쇼핑하기",
      ctaLink: "/products",
      priority: true,
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&h=600&fit=crop&crop=center&auto=format&q=80",
      imageAlt: "고급스러운 신상품 패션 컬렉션",
      title: "새로운 컬렉션 출시",
      subtitle: "한정 수량으로 만나보세요",
      ctaText: "자세히 보기",
      ctaLink: "/products/new",
    },
  ];

  console.group("Home Page");
  console.log("히어로 배너 슬라이드 데이터", heroSlides);
  console.groupEnd();

  return (
    <>
      {/* 히어로 배너 섹션 */}
      <HeroBanner slides={heroSlides} />

      <main className="min-h-[calc(100vh-80px)] flex items-center px-8 py-16 lg:py-24">
        <section className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start lg:items-center">
          {/* 좌측: 환영 메시지 */}
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              SaaS 앱 템플릿에 오신 것을 환영합니다
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Next.js, Shadcn, Clerk, Supabase, TailwindCSS로 구동되는 완전한
              기능의 템플릿으로 다음 프로젝트를 시작하세요.
            </p>
          </div>

          {/* 우측: 버튼 두 개 세로 정렬 */}
          <div className="flex flex-col gap-6">
            <Link href="/storage-test" className="w-full">
              <Button className="w-full h-28 flex items-center justify-center gap-4 text-xl shadow-lg hover:shadow-xl transition-shadow">
                <RiSupabaseFill className="w-8 h-8" />
                <span>Storage 파일 업로드 테스트</span>
              </Button>
            </Link>
            <Link href="/auth-test" className="w-full">
              <Button
                className="w-full h-28 flex items-center justify-center gap-4 text-xl shadow-lg hover:shadow-xl transition-shadow"
                variant="outline"
              >
                <RiSupabaseFill className="w-8 h-8" />
                <span>Clerk + Supabase 인증 연동</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
