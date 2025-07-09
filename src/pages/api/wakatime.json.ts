import { Buffer } from 'buffer';
import type { APIContext } from 'astro';

import { env } from '~/env';

export async function GET({ request }: APIContext) {
  const apiKey = env.WAKATIME_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'WAKATIME_API_KEY not set' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const auth = Buffer.from(apiKey).toString('base64');

  const res = await fetch(
    'https://wakatime.com/api/v1/users/current/all_time_since_today',
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    },
  );

  if (!res.ok) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch from WakaTime' }),
      { status: res.status, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const {
    data: { total_seconds },
  } = await res.json();

  const roundedSeconds = Math.round(total_seconds);
  const hours = Math.floor(roundedSeconds / 3600).toLocaleString();
  const remainingSeconds = roundedSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  return new Response(JSON.stringify({ hours, minutes }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
