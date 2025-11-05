import { motion } from 'framer-motion';

export default function Logo({ className = "h-7 w-36" }) {
	return (
		<motion.svg
			whileHover={{ x: 2 }}
			className={className}
			viewBox="0 0 220 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			{/* Locomotive */}
			<defs>
				<linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#3B82F6" />
					<stop offset="100%" stopColor="#6366F1" />
				</linearGradient>
			</defs>
			<rect x="6" y="16" width="50" height="18" rx="4" fill="url(#g1)" />
			<rect x="44" y="10" width="14" height="12" rx="2" className="fill-blue-300" />
			<motion.circle cx="18" cy="36" r="4" className="fill-gray-300 dark:fill-gray-200" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} origin="18 36" />
			<motion.circle cx="40" cy="36" r="4" className="fill-gray-300 dark:fill-gray-200" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }} origin="40 36" />

			{/* Wagons */}
			<rect x="60" y="19" width="44" height="15" rx="4" className="fill-blue-500/90" />
			<circle cx="70" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />
			<circle cx="90" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />
			<rect x="106" y="19" width="44" height="15" rx="4" className="fill-blue-500/80" />
			<circle cx="116" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />
			<circle cx="136" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />
			<rect x="152" y="19" width="44" height="15" rx="4" className="fill-blue-500/70" />
			<circle cx="162" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />
			<circle cx="182" cy="36" r="3.5" className="fill-gray-300 dark:fill-gray-200" />

			{/* Track */}
			<rect x="6" y="39" width="190" height="2" className="fill-gray-300 dark:fill-gray-700" />
			{Array.from({ length: 18 }).map((_, i) => (
				<rect key={i} x={8 + i * 10} y="39" width="4" height="2" className="fill-gray-400 dark:fill-gray-600" />
			))}
		</motion.svg>
	);
}


