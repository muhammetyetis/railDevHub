import { motion } from 'framer-motion';

const areas = [
	{ title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'Go', 'GraphQL'] },
	{ title: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion'] },
	{ title: 'DevOps', items: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Grafana'] },
	{ title: 'Integration', items: ['Kafka', 'gRPC', 'REST', 'WebSockets', 'OpenAPI'] },
];

export default function Expertise() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl md:text-4xl font-bold">Expertise</h1>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				{areas.map((a, idx) => (
					<motion.div
						key={a.title}
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.06 }}
						className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-white/10 p-6 shadow-sm"
					>
						<p className="font-semibold text-lg">{a.title}</p>
						<div className="mt-3 flex flex-wrap gap-2">
							{a.items.map((t) => (
								<span key={t} className="text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1">
									{t}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}



