import { env } from '../../env';
import { publicProcedure } from '../../trpc';

export const getTime = publicProcedure.query(async () => {
  const res = await fetch(
    'https://wakatime.com/api/v1/users/current/all_time_since_today',
    {
      headers: {
        Authorization: `Basic ${Buffer.from(env.WAKATIME_API_KEY).toString('base64')}`,
      },
    },
  );

  const {
    data: { total_seconds },
  } = (await res.json()) as { data: { total_seconds: number } };

  const roundedSeconds = Math.round(total_seconds);
  const hours = Math.floor(roundedSeconds / 3600).toLocaleString();
  const remainingSeconds = roundedSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  return { hours, minutes };
});
