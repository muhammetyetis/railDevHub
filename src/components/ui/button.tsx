import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: 'bg-railway-primary text-white shadow-sm hover:brightness-110',
				outline: 'border bg-transparent hover:bg-black/5 text-gray-900 border-gray-300 dark:text-white dark:border-white/10 dark:hover:bg-white/10',
				ghost: 'bg-transparent hover:bg-black/5 text-gray-900 dark:hover:bg-white/10 dark:text-white',
			},
			size: {
				sm: 'h-9 px-4 py-2',
				md: 'h-10 px-5 py-2.5',
				lg: 'h-12 px-6 py-3',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
		);
	}
);
Button.displayName = 'Button';
