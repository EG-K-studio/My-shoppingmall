- [ ] phase 0. 기본 인프라

  - [x] 환경변수 설정 (`.env`)
  - [x] Tailwind CSS v4 설정 (`app/globals.css`)
  - [x] shadcn/ui 기본 설치 (`components/ui/*`)
  - [x] ClerkProvider + 한국어 로케일 설정 (`app/layout.tsx`)
  - [x] SyncUserProvider 통합 (`app/layout.tsx`)
  - [x] 헤더/네비게이션 (`components/Navbar.tsx`)
  - [x] Supabase 클라이언트 구성 (`lib/supabase/*`)

- [ ] phase 1. 인증 및 사용자 관리

  - [x] Clerk 인증 설정
  - [ ] 사용자 프로필 페이지 (`/profile`)
  - [ ] 사용자 프로필 수정 기능
  - [ ] 로그인/회원가입 페이지 스타일링

- [ ] phase 2. 상품 관리

  - [ ] 홈페이지 (`/`)
    - [ ] 메인 히어로 배너 섹션 (슬라이더/단일 이미지)
      - [ ] 반응형 히어로 컴포넌트 디자인 (모바일/데스크톱 최적화)
      - [ ] Next.js Image 컴포넌트로 성능 최적화된 이미지 로딩
      - [ ] CTA 버튼 및 텍스트 오버레이 구현
      - [ ] 선택적 슬라이더 기능 (여러 이미지 순환)
      - [ ] SEO를 위한 alt 텍스트 및 구조화된 데이터
    - [ ] 카테고리 네비게이션 섹션 (주요 카테고리 링크)
    - [ ] 인기 상품 섹션 (판매량 기준 상위 상품, 최대 8개)
    - [ ] 신상품 섹션 (최신 등록 상품, 최대 8개)
    - [ ] 추천 상품 섹션 (랜덤 또는 알고리즘 기반)
    - [ ] 프로모션/이벤트 배너 섹션
  - [ ] 상품 목록 페이지 (`/products`)
    - [ ] 상품 그리드 레이아웃
    - [ ] 카테고리별 필터링
    - [ ] 검색 기능
    - [ ] 정렬 기능 (가격, 최신순 등)
    - [ ] 페이지네이션
  - [ ] 상품 상세 페이지 (`/products/[id]`)
    - [ ] 상품 정보 표시
    - [ ] 재고 수량 표시
    - [ ] 장바구니 추가 버튼
    - [ ] 수량 선택 기능
    - [ ] 상품 이미지 슬라이더/갤러리
  - [ ] 상품 카테고리 페이지 (`/categories/[category]`)
  - [ ] Server Actions: 상품 조회 (목록, 상세, 필터링)

- [ ] phase 3. 장바구니 기능

  - [ ] 장바구니 페이지 (`/cart`)
    - [ ] 장바구니 아이템 목록 표시
    - [ ] 수량 수정 기능
    - [ ] 아이템 삭제 기능
    - [ ] 총 금액 계산 및 표시
    - [ ] 장바구니 비어있을 때 안내 메시지
  - [ ] 장바구니 아이콘 (헤더)
    - [ ] 아이템 개수 배지 표시
    - [ ] 장바구니 미리보기 드롭다운
  - [ ] Server Actions
    - [ ] 장바구니 아이템 추가 (`addToCart`)
    - [ ] 장바구니 아이템 수정 (`updateCartItem`)
    - [ ] 장바구니 아이템 삭제 (`removeFromCart`)
    - [ ] 장바구니 조회 (`getCartItems`)
  - [ ] 장바구니 상태 관리 (React Query 또는 Context)

- [ ] phase 4. 주문 및 결제

  - [ ] 주문하기 페이지 (`/checkout`)
    - [ ] 배송지 정보 입력 폼
    - [ ] 주문 요약 (상품 목록, 총 금액)
    - [ ] 주문 메모 입력
    - [ ] 주문 확인 및 제출
  - [ ] 주문 완료 페이지 (`/orders/[id]`)
    - [ ] 주문 번호 표시
    - [ ] 주문 상세 정보
    - [ ] 배송 추적 정보 (향후)
  - [ ] Server Actions
    - [ ] 주문 생성 (`createOrder`)
    - [ ] 주문 상태 업데이트 (`updateOrderStatus`)
    - [ ] 재고 차감 로직

- [ ] phase 5. 주문 내역

  - [ ] 주문 내역 페이지 (`/orders`)
    - [ ] 주문 목록 표시
    - [ ] 주문 상태별 필터링
    - [ ] 주문 상세 보기
    - [ ] 주문 취소 기능
  - [ ] Server Actions
    - [ ] 주문 내역 조회 (`getOrders`)
    - [ ] 주문 상세 조회 (`getOrderById`)

- [ ] phase 6. 관리자 기능 (선택사항)

  - [ ] 관리자 대시보드 (`/admin`)
  - [ ] 상품 관리 (`/admin/products`)
    - [ ] 상품 추가/수정/삭제
    - [ ] 상품 이미지 업로드
    - [ ] 재고 관리
  - [ ] 주문 관리 (`/admin/orders`)
    - [ ] 주문 목록 조회
    - [ ] 주문 상태 변경
  - [ ] 권한 관리 (Clerk 역할 기반)

- [ ] phase 7. UI 컴포넌트

  - [ ] 공통 컴포넌트
    - [ ] 상품 카드 컴포넌트
    - [ ] 가격 표시 컴포넌트
    - [ ] 수량 선택 컴포넌트
    - [ ] 로딩 스피너
    - [ ] 에러 메시지 컴포넌트
    - [ ] 빈 상태 컴포넌트
  - [ ] 레이아웃
    - [x] 헤더/네비게이션
    - [ ] 푸터
    - [ ] 사이드바 (카테고리 네비게이션)

- [ ] phase 8. 데이터베이스 및 타입

  - [x] Supabase 클라이언트 설정
  - [ ] TypeScript 타입 정의
    - [ ] Product 타입
    - [ ] CartItem 타입
    - [ ] Order 타입
    - [ ] OrderItem 타입
  - [ ] Supabase TypeScript 타입 생성 (`mcp_supabase_generate_typescript_types`)

- [ ] phase 9. 에러 처리 및 검증

  - [ ] 폼 유효성 검사 (Zod 스키마)
    - [ ] 주문 폼 검증
    - [ ] 장바구니 수량 검증
  - [ ] 에러 바운더리 설정
  - [ ] 사용자 친화적 에러 메시지

- [ ] phase 10. 성능 최적화

  - [ ] 이미지 최적화 (Next.js Image 컴포넌트)
  - [ ] 데이터 페칭 최적화 (React Query 캐싱)
  - [ ] 코드 스플리팅
  - [ ] 로딩 상태 관리 (Suspense, loading.tsx)

- [ ] phase 11. 테스트

  - [ ] Playwright E2E 테스트
    - [ ] 상품 조회 플로우
    - [ ] 장바구니 추가/수정/삭제
    - [ ] 주문 생성 플로우
  - [ ] 단위 테스트 (Server Actions)
  - [ ] 컴포넌트 테스트

- [ ] phase 12. 문서화
  - [ ] README.md 업데이트
  - [ ] API 문서 (Server Actions)
  - [ ] 배포 가이드
