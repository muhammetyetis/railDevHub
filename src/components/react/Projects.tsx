import { motion } from 'framer-motion';

const projects = [
	{
		title: 'SmartTrack Logistics',
		desc: 'End‑to‑end logistics orchestration with live tracking and analytics.',
		tech: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL'],
	},
	{
		title: 'FactoryLink CMMS',
		desc: 'Computerized maintenance management for factories with IoT integration.',
		tech: ['Node.js', 'NestJS', 'React', 'TimescaleDB'],
	},
	{
		title: 'PayFlex Gateway',
		desc: 'Payment gateway with high availability and PCI‑DSS alignment.',
		tech: ['Go', 'gRPC', 'Redis', 'Kubernetes'],
	},
];

export default function Projects() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				{projects.map((p, idx) => (
					<motion.div
						key={p.title}
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.08 }}
						className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200/60 dark:border-white/10 p-6 shadow-sm"
					>
						<p className="font-semibold text-lg">{p.title}</p>
						<p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{p.tech.map((t) => (
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



