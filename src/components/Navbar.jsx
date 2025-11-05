import { NavLink } from 'react-router-dom';
import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';

const linkClasses = ({ isActive }) =>
	`px-3 py-2 rounded-lg transition-colors ${
		isActive
			? 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
			: 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
	}`;

export default function Navbar() {
	return (
		<header className="sticky top-0 z-40 w-full backdrop-blur border-b border-gray-200/60 bg-white/70 dark:border-white/10 dark:bg-gray-950/60">
			<div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
				<NavLink to="/" className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 hover:opacity-80 transition-opacity">
					<Logo className="h-6 w-28" />
					<span>RailDevHub</span>
				</NavLink>
				<nav className="hidden md:flex items-center gap-2 text-sm">
					<NavLink to="/" className={linkClasses} end>
						Home
					</NavLink>
					<NavLink to="/about" className={linkClasses}>
						About
					</NavLink>
					<NavLink to="/projects" className={linkClasses}>
						Projects
					</NavLink>
					<NavLink to="/contact" className={linkClasses}>
						Contact
					</NavLink>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}


