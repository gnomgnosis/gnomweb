// app/api/holders/route.ts
import { NextResponse } from 'next/server'

export const runtime = 'edge'  // чтобы работать на Vercel Edge Network

export async function GET() {
  const API_URL = 'https://gnosis.blockscout.com/api/v2/tokens/0x2f4eb11627bd3726003eb7040517dd6a9fd05187/counters';
  
  try {
    const upstream = await fetch(API_URL, {
      headers: { Accept: 'application/json' },
    });

    const body = await upstream.text();

    if (!upstream.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${upstream.statusText}` },
        { status: upstream.status }
      );
    }

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // кэшируем на edge‑нодах 1 час,
        // stale-while-revalidate отдаёт старую версию, пока подтягивает новую
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: 'Internal error' },
      { status: 500 }
    );
  }
}
