import { useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Hero() {
	const [ctaClicked, setCtaClicked] = useState(false);

	return (
		<section className="mx-auto max-w-7xl px-4 py-16">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
				<div className="space-y-6 animate-fade-in">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Building Turkey's Smartest Railway Network
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						AI, IoT, Big Data, and modern software engineering to make journeys safer,
						faster, and smarter.
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<button
							onClick={() => setCtaClicked(true)}
							className="inline-flex items-center gap-2 bg-railway-primary hover:brightness-110 text-white px-5 py-2.5 rounded-md transition"
						>
							<Rocket className="h-4 w-4" />
							Get Started
						</button>
						<a href="#features" className="text-railway-accent font-medium">Explore Features</a>
					</div>
					{ctaClicked && (
						<p className="text-sm text-green-600 dark:text-green-400">Thanks! We'll guide you through the platform.</p>
					)}
				</div>
				<div className="bg-gradient-to-br from-railway-primary/10 to-railway-secondary/10 rounded-xl border border-gray-200/60 dark:border-white/10 p-8">
					<div className="grid grid-cols-2 gap-4 text-center">
						<div className="p-4 rounded-lg bg-white dark:bg-gray-900/60">
							<p className="text-3xl font-bold">24/7</p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Monitoring</p>
						</div>
						<div className="p-4 rounded-lg bg-white dark:bg-gray-900/60">
							<p className="text-3xl font-bold">99.99%</p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Uptime Target</p>
						</div>
						<div className="p-4 rounded-lg bg-white dark:bg-gray-900/60">
							<p className="text-3xl font-bold">100+</p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Reports</p>
						</div>
						<div className="p-4 rounded-lg bg-white dark:bg-gray-900/60">
							<p className="text-3xl font-bold">Real-time</p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Analytics</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}



