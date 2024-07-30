import type { VariantProps } from 'tailwind-variants';
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

import { cn } from '@acme/ui';

export const buttonStyles = tv({
  base: cn(
    'flex h-fit w-fit items-center justify-center font-semibold outline-none transition-colors duration-200',
    'focus-visible:ring-2',
    'disabled:cursor-not-allowed',
  ),
  variants: {
    intent: {
      default: '',
      danger: '',
    },
    variant: {
      solid: '',
      soft: '',
      outline: '',
      ghost: '',
    },
    size: {
      small: cn(
        'h-8 gap-x-1.5 px-2.5 text-xs leading-4',
        '[&_svg]:h-3.5 [&_svg]:w-3.5',
      ),
      medium: cn(
        'h-9 gap-x-2 px-3 text-sm',
        '[&_svg]:h-[18px] [&_svg]:w-[18px]',
      ),
      large: cn('text-md h-10 gap-x-2.5 px-4', '[&_svg]:h-5 [&_svg]:w-5'),
    },
    icon: {
      true: '',
    },
  },
  compoundVariants: [
    {
      intent: 'default',
      variant: 'solid',
      class: cn(
        'bg-grey-text-contrast text-grey-base',
        'hover:bg-grey-text-contrast/90',
        'focus-visible:ring-grey-text-contrast',
        'disabled:bg-grey-text-contrast',
      ),
    },
    {
      intent: 'default',
      variant: 'soft',
      class: cn(
        'border-primary-border bg-primary-bg text-primary-solid border',
        'hover:border-primary-border-hover hover:bg-primary-bg-hover',
        'active:bg-primary-bg-active',
        'focus-visible:ring-primary-focus-ring',
        'disabled:border-primary-line disabled:bg-primary-bg-subtle disabled:text-primary-line',
      ),
    },
    {
      intent: 'default',
      variant: 'outline',
      class: cn(
        'border border-grey-border bg-grey-base text-grey-text-contrast',
        'hover:border-grey-border-hover hover:bg-grey-bg-subtle',
        'active:bg-grey-bg',
        'focus-visible:ring-grey-text-contrast',
        'disabled:border-grey-line disabled:bg-grey-base disabled:text-grey-solid',
      ),
    },
    {
      intent: 'default',
      variant: 'ghost',
      class: cn(
        'text-grey-text-contrast',
        'hover:bg-grey-bg-hover',
        'active:bg-grey-bg-active',
        'focus-visible:ring-grey-text-contrast',
        'disabled:bg-transparent disabled:text-grey-solid',
      ),
    },
    {
      intent: 'danger',
      variant: 'solid',
      class: cn(
        'bg-danger-solid text-white',
        'hover:bg-danger-solid-hover',
        'focus-visible:ring-danger-focus-ring',
        'disabled:bg-danger-border',
      ),
    },
    {
      intent: 'danger',
      variant: 'soft',
      class: cn(
        'border-danger-border bg-danger-bg text-danger-solid border',
        'hover:border-danger-border-hover hover:bg-danger-bg-hover',
        'active:bg-danger-bg-active',
        'focus-visible:ring-danger-focus-ring',
        'disabled:border-danger-line disabled:bg-danger-bg-subtle disabled:text-danger-line',
      ),
    },
    {
      intent: 'danger',
      variant: 'outline',
      class: cn(
        'border-danger-border bg-danger-base text-danger-solid border',
        'hover:border-danger-border-hover hover:bg-danger-bg-subtle',
        'active:bg-dangerBg',
        'focus-visible:ring-danger-focus-ring',
        'disabled:border-danger-line disabled:bg-danger-base disabled:text-danger-line',
      ),
    },
    {
      intent: 'danger',
      variant: 'ghost',
      class: cn(
        'text-danger-solid',
        'hover:bg-danger-bg',
        'active:bg-danger-bg-hover',
        'focus-visible:ring-danger-focus-ring',
        'disabled:text-danger-line disabled:bg-transparent',
      ),
    },
    {
      size: 'small',
      icon: true,
      class: 'w-8 px-0',
    },
    {
      size: 'medium',
      icon: true,
      class: 'w-9 px-0',
    },
    {
      size: 'large',
      icon: true,
      class: 'w-10 px-0',
    },
  ],
  defaultVariants: {
    intent: 'default',
    variant: 'solid',
    size: 'medium',
  },
});

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ButtonVariants = VariantProps<typeof buttonStyles>;
export type Props = {
  /** Change the variant of the Button */
  variant?: ButtonVariants['variant'];
  /** Change the intent of the Button */
  intent?: ButtonVariants['intent'];
  /** Change the size of the Button */
  size?: ButtonVariants['size'];
  /** Change the size if is only an icon */
  icon?: ButtonVariants['icon'];
  /** Use the component as a child */
  asChild?: boolean;
} & ButtonProps;

/**
 * Displays a button or a component that looks like a button.
 * @param {string} [intent='default'] - Change the variant of the Button.
 * @param {string} [variant='solid'] - Change the intent of the Button.
 * @param {string} [size='medium'] - Change the size of the BUtton.
 * @param {boolean} [icon=false] - Change the size if is only an icon.
 * @param {boolean} [asChild=false] - Use the component as a child.
 */
export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant, intent, size, icon, asChild = false, className, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={buttonStyles({
          variant,
          intent,
          size,
          icon,
          class: className,
        })}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
