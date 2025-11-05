import { motion } from 'framer-motion';

export default function About() {
	return (
		<div className="mx-auto max-w-5xl px-4 py-16 space-y-10">
			<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
				<h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
				<p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl">
					Founded in 2022, we are a multidisciplinary team focused on clean code,
					strong architecture, and high performance. We deliver production‑ready
					solutions with meticulous attention to detail.
				</p>
			</motion.div>

			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{[
					{ name: 'Muhammet Yetis', role: 'Lead Engineer' },
					{ name: 'A. Kaya', role: 'Backend Specialist' },
					{ name: 'E. Demir', role: 'Frontend Engineer' },
				].map((m) => (
					<div key={m.name} className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-white/10 p-6 shadow-sm">
						<p className="font-semibold">{m.name}</p>
						<p className="text-sm text-gray-600 dark:text-gray-300">{m.role}</p>
					</div>
				))}
			</motion.div>
		</div>
	);
}



