export default function Avatar({ name, className = '' }) {
	const initials = name
		.split(' ')
		.map((n) => n[0])
		.join('')
		.slice(0, 2)
		.toUpperCase();

	return (
		<div
			className={`relative inline-flex select-none items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white ${className}`}
			aria-label={name}
			title={name}
		>
			<span className="font-semibold">{initials}</span>
			<span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
		</div>
	);
}



