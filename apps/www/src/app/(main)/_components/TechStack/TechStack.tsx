import { clsx } from 'clsx/lite';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@acme/ui/Tooltip';

import { fadeUp } from '~/config/animations';
import { technologies } from '~/config/technologies';

export const TechStack = () => {
  return (
    <TooltipProvider>
      <article className={clsx('px-4 py-8', fadeUp)}>
        <h4 className='px-4 font-serif text-lg text-grey-text'>Tech stack</h4>
        {/* TODO: Create marquee ui component */}
        <div className='w-full'>
          <div className='mx-auto w-full'>
            <div
              className='group flex gap-6 overflow-hidden px-2 pt-6'
              style={{
                maskImage:
                  'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
              }}
            >
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className='duration-[1400ms] flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 group-hover:[animation-play-state:paused]'
                  >
                    {technologies.slice(0, 9).map(({ name, icon: Icon }) => (
                      <Tooltip key={name} delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Icon className='size-6 fill-grey-text-contrast' />
                        </TooltipTrigger>

                        <TooltipContent side='top'>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='mx-auto w-full'>
            <div
              className='group flex gap-6 overflow-x-hidden px-2 pt-10'
              style={{
                maskImage:
                  'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
              }}
            >
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className='duration-[1200ms] flex shrink-0 animate-logo-cloud-reverse flex-row justify-around gap-6 group-hover:[animation-play-state:paused]'
                  >
                    {technologies
                      .slice(10, technologies.length)
                      .map(({ name, icon: Icon }) => (
                        <Tooltip key={name} delayDuration={0}>
                          <TooltipTrigger asChild>
                            <Icon className='size-6 fill-grey-text-contrast' />
                          </TooltipTrigger>

                          <TooltipContent side='top'>
                            <p>{name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </article>
    </TooltipProvider>
  );
};
