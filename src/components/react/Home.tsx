import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
	return (
		<div className="mx-auto max-w-5xl px-4 py-16">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-center space-y-6"
			>
				<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
					railDevHub MYetis
				</h1>
				<p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
					A modern team building robust, high‑performance digital products with clean code,
					strong architecture, and delightful UX.
				</p>
				<motion.a
					href="/projects"
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.98 }}
					className="inline-flex items-center gap-2 bg-railway-primary text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
				>
					Explore Projects
					<ArrowRight className="h-4 w-4" />
				</motion.a>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.15 }}
				className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
			>
				{[
					{ title: 'Clean Code', desc: 'Readable, maintainable, and well-tested.' },
					{ title: 'Architecture', desc: 'Scalable, resilient, cloud-ready designs.' },
					{ title: 'Performance', desc: 'Low latency, high throughput systems.' },
				].map((f) => (
					<motion.div
						key={f.title}
						whileHover={{ y: -4 }}
						className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-white/10 p-6 shadow-sm"
					>
						<h3 className="font-semibold text-lg">{f.title}</h3>
						<p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}



