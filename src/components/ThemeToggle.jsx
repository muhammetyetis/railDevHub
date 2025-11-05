import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme === 'dark' || theme === undefined;
	return (
		<button
			aria-label="Toggle Theme"
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-transparent text-gray-300 hover:text-white"
		>
			{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
		</button>
	);
}



