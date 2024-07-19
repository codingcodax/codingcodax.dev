import { technologies } from '~/config/technologies';

export const TechStack = () => {
  return (
    <article className='px-4 py-8'>
      <h4 className='px-4 font-serif text-lg text-grey-text'>Tech stack</h4>

      {/* TODO: Create marquee ui component */}
      <div className='w-full'>
        <div className='mx-auto w-full'>
          <div
            className='group relative mt-6 flex gap-6 overflow-hidden'
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className='duration-[1400] flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 group-hover:[animation-play-state:paused]'
                >
                  {technologies.slice(0, 9).map(({ name, icon: Icon }) => (
                    <Icon key={name} className='size-6' />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='mx-auto w-full'>
          <div
            className='group relative mt-6 flex gap-6 overflow-hidden p-2'
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className='duration-[1200] flex shrink-0 animate-logo-cloud-reverse flex-row justify-around gap-6 group-hover:[animation-play-state:paused]'
                >
                  {technologies
                    .slice(10, technologies.length)
                    .map(({ name, icon: Icon }) => (
                      <Icon key={name} className='size-6' />
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};
