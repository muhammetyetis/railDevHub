import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t border-gray-200/60 bg-white/70 dark:border-white/10 dark:bg-gray-950/60">
			<div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-sm text-gray-600 dark:text-gray-400">Geleceği birlikte kodlayalım.</p>
				<div className="flex items-center gap-4 text-gray-500 dark:text-gray-300">
					<a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
					<a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
					<a href="mailto:info@raildevhub.com" aria-label="Email" className="hover:text-white"><Mail className="h-5 w-5" /></a>
				</div>
				<p className="text-xs text-gray-500">© 2025 RailDevHub</p>
			</div>
		</footer>
	);
}


