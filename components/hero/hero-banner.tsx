"use client";

/**
 * @file hero-banner.tsx
 * @description 메인 히어로 배너 컴포넌트 - 쇼핑몰의 첫인상을 결정하는 핵심 섹션
 *
 * 주요 기능:
 * 1. 반응형 히어로 배너 디자인 (모바일/데스크톱 최적화)
 * 2. Next.js Image 컴포넌트로 성능 최적화된 이미지 로딩
 * 3. CTA 버튼 및 텍스트 오버레이 구현
 * 4. 선택적 슬라이더 기능 (여러 이미지 순환)
 * 5. SEO를 위한 alt 텍스트 및 구조화된 데이터
 *
 * @dependencies
 * - Next.js Image 컴포넌트 (성능 최적화)
 * - Tailwind CSS v4 (반응형 디자인)
 * - Lucide React (아이콘)
 */

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export interface HeroBannerSlide {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  priority?: boolean; // Next.js Image priority
}

export interface HeroBannerProps {
  slides: HeroBannerSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showIndicators?: boolean;
  height?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const heightClasses = {
  sm: "h-64 md:h-80",
  md: "h-80 md:h-96",
  lg: "h-96 md:h-[500px]",
  xl: "h-[500px] md:h-[600px]",
};

export function HeroBanner({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showNavigation = true,
  showIndicators = true,
  height = "lg",
  className = "",
}: HeroBannerProps) {
  console.group("HeroBanner");
  console.log("컴포넌트 렌더링 시작", {
    slidesCount: slides.length,
    autoPlay,
    autoPlayInterval,
    height,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // 자동 재생 로직
  useEffect(() => {
    if (!isAutoPlaying || slides.length <= 1) return;

    console.log("자동 재생 타이머 설정", { autoPlayInterval });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length;
        console.log("슬라이드 자동 전환", { from: prev, to: next });
        return next;
      });
    }, autoPlayInterval);

    return () => {
      console.log("자동 재생 타이머 정리");
      clearInterval(timer);
    };
  }, [isAutoPlaying, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    console.log("수동 슬라이드 이동", { from: currentSlide, to: index });
    setCurrentSlide(index);
    setIsAutoPlaying(false); // 수동 조작 시 자동 재생 중지
  };

  const goToPrevSlide = () => {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prev);
  };

  const goToNextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
  };

  if (slides.length === 0) {
    console.warn("슬라이드가 없음");
    return null;
  }

  const currentSlideData = slides[currentSlide];

  console.log("현재 슬라이드 데이터", currentSlideData);
  console.groupEnd();

  return (
    <section
      className={`relative overflow-hidden ${heightClasses[height]} ${className}`}
      aria-label="메인 배너"
    >
      {/* 메인 이미지 */}
      <div className="relative w-full h-full">
        <Image
          src={currentSlideData.imageUrl}
          alt={currentSlideData.imageAlt}
          fill
          className="object-cover"
          priority={currentSlideData.priority || currentSlide === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* 컨텐츠 오버레이 */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              {currentSlideData.title}
            </h1>
            {currentSlideData.subtitle && (
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200">
                {currentSlideData.subtitle}
              </p>
            )}
            {currentSlideData.ctaText && currentSlideData.ctaLink && (
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3"
                asChild
              >
                <a href={currentSlideData.ctaLink}>
                  {currentSlideData.ctaText}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 네비게이션 화살표 */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-200"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* 인디케이터 */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
