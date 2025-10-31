import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

/**
 * Clerk + Supabase 네이티브 통합 클라이언트 (Server Component용)
 *
 * 2025년 4월부터 권장되는 방식:
 * - JWT 템플릿 불필요
 * - Clerk 토큰을 Supabase가 자동 검증
 * - auth().getToken()으로 현재 세션 토큰 사용
 *
 * @example
 * ```tsx
 * // Server Component
 * import { createClerkSupabaseClient } from '@/lib/supabase/server';
 *
 * export default async function MyPage() {
 *   const supabase = createClerkSupabaseClient();
 *   const { data } = await supabase.from('table').select('*');
 *   return <div>...</div>;
 * }
 * ```
 */
export function createClerkSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  // 핵심 로그: 서버에서 Supabase 클라이언트 생성 시 환경 변수 인식 여부를 길이 기준으로 남깁니다(마스킹 처리).
  if (typeof window === "undefined") {
    const urlMasked = supabaseUrl ? "present" : "missing";
    const keyMasked = supabaseKey
      ? `present(len=${String(supabaseKey).length})`
      : "missing";
    // eslint-disable-next-line no-console
    console.log(
      "[Supabase][server] createClient env => url:",
      urlMasked,
      ", anonKey:",
      keyMasked,
    );
  }

  return createClient(supabaseUrl, supabaseKey, {
    async accessToken() {
      const token = await auth().then((a) => a.getToken());
      // 핵심 로그: 서버 액세스 토큰 길이만 기록하여 민감정보 노출 방지
      if (typeof window === "undefined") {
        const tokenMasked = token
          ? `present(len=${String(token).length})`
          : "missing";
        // eslint-disable-next-line no-console
        console.log("[Supabase][server] accessToken =>", tokenMasked);
      }
      return token;
    },
  });
}
