import { env } from '~/env';

export const CodingHours = async () => {
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

  return (
    <div className='space-y-4 p-8'>
      <h4 className='font-serif text-lg text-grey-text'>Coding hours</h4>
      <p className='text-3xl font-medium'>
        {hours} hrs {minutes} mins
      </p>
    </div>
  );
};
