import type { ClassValue } from 'clsx';
import { clsx } from 'clsx/lite';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
