import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Cpu, Gauge, Cloud, Server, Monitor, Lock, Rocket, Users, Globe2, Clock, ArrowRight, ChevronUp, Boxes, Database, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TechShowcaseSection from '@/components/TechShowcaseSection';

function Counter({ end = 0, duration = 1200, suffix = '' }) {
	const [value, setValue] = useState(0);
	const startRef = useRef(0);
	const rafRef = useRef();
	useEffect(() => {
		const startTime = performance.now();
		const step = (now) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			const next = Math.round(startRef.current + (end - startRef.current) * eased);
			setValue(next);
			if (progress < 1) rafRef.current = requestAnimationFrame(step);
		};
		rafRef.current = requestAnimationFrame(step);
		return () => cancelAnimationFrame(rafRef.current);
	}, [end, duration]);
	return <span>{value}{suffix}</span>;
}

export default function Home() {
	return (
		<div className="relative">
			{/* Subtle background gradient (pushed further back) */}
			<div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />

			<div className="mx-auto max-w-7xl px-4 py-16 space-y-20">
				{/* 1) HERO */}
				<section className="relative overflow-hidden text-center rounded-2xl min-h-[560px] md:min-h-[640px] py-20 md:py-28">
					{/* Hero background image with theme-aware overlay */}
					<div className="absolute inset-0 z-0 pointer-events-none">
						<img
							src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70"
							alt="Technology abstract background"
							loading="eager"
							fetchpriority="high"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] dark:bg-black/55" />
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
					</div>
					<div className="relative z-10">
						<motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
						Yenilik, hız ve güven. Modern yazılım çözümlerini rayına oturtuyoruz.
						</motion.h1>
						<motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.1 }} className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						RailDevHub, ölçeklenebilir ve performanslı ürünler geliştiren profesyonel bir ekip.
						</motion.p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Link to="/contact">
							<Button className="px-6 py-3 inline-flex items-center gap-2">
								Projeni birlikte geliştirelim
								<ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
						</div>
					</div>
				</section>

				{/* 2) SERVICES */}
				<section>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						{[
							{ icon: Cpu, title: 'Custom Software' },
							{ icon: Cloud, title: 'Cloud Systems' },
							{ icon: Gauge, title: 'Performance' },
							{ icon: Shield, title: 'Security' },
						].map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.06 }}
								className="rounded-2xl border p-8 text-center shadow-sm hover:shadow-xl hover:shadow-blue-900/30 bg-gradient-to-b from-blue-500/5 to-transparent border-gray-200/60 dark:border-white/10 dark:from-blue-500/10"
							>
								<item.icon className="mx-auto h-8 w-8 text-blue-500 dark:text-blue-400" />
								<p className="mt-3 font-medium text-gray-900 dark:text-gray-100">{item.title}</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* 3) ABOUT / MISSION */}
				<section>
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">Her satır kod bir çözüm taşır.</h2>
						<p className="mt-3 text-gray-600 dark:text-gray-300">RailDevHub ekibi, iş süreçlerini dijitalleştirmek, ölçeklenebilir platformlar kurmak ve modern teknolojileri iş dünyasına entegre etmek için çalışır.</p>
					</div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{ icon: Server, title: 'Yüksek Performanslı Sistemler', desc: 'Düşük gecikme, yüksek kullanılabilirlik.' },
							{ icon: Monitor, title: 'Modern UI & UX', desc: 'Kullanıcı odaklı arayüz ve deneyim.' },
							{ icon: Lock, title: 'Güvenli Altyapılar', desc: 'Güncel güvenlik standartlarıyla uyumlu.' },
						].map((c, idx) => (
							<motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="rounded-2xl border p-6 shadow-sm bg-white/80 border-gray-200/60 dark:bg-gray-900/60 dark:border-white/10">
								<div className="flex items-center gap-3">
									<c.icon className="h-6 w-6 text-blue-500" />
									<p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{c.title}</p>
								</div>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* 4) STATS */}
				<TechShowcaseSection />
				<section className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 p-6 md:p-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
						<div className="rounded-xl border border-blue-500/20 p-4 shadow-xl shadow-blue-900/20">
							<Rocket className="mx-auto h-5 w-5 text-blue-400" />
							<p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100"><Counter end={40} suffix="+" /></p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Completed Projects</p>
						</div>
						<div className="rounded-xl border border-blue-500/20 p-4 shadow-xl shadow-blue-900/20">
							<Users className="mx-auto h-5 w-5 text-blue-400" />
							<p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100"><Counter end={15} /></p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Active Clients</p>
						</div>
						<div className="rounded-xl border border-blue-500/20 p-4 shadow-xl shadow-blue-900/20">
							<Globe2 className="mx-auto h-5 w-5 text-blue-400" />
							<p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100"><Counter end={6} /></p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Countries Reached</p>
						</div>
						<div className="rounded-xl border border-blue-500/20 p-4 shadow-xl shadow-blue-900/20">
							<Clock className="mx-auto h-5 w-5 text-blue-400" />
							<p className="mt-2 text-2xl font-extrabold text-gray-900 dark:text-gray-100">99.9%</p>
							<p className="text-xs text-gray-600 dark:text-gray-300">Uptime Delivered</p>
						</div>
					</div>
				</section>

				{/* 5) PROJECT PREVIEW removed as requested */}

				{/* 6) TESTIMONIALS */}
				<section>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{[
							{ quote: 'RailDevHub sayesinde teslimat süremiz %30 azaldı.', by: 'Logistics Partner' },
							{ quote: 'Harika bir ekip, profesyonel yaklaşım.', by: 'Tech Startup CEO' },
						].map((t, idx) => (
							<motion.blockquote key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="rounded-2xl border p-6 bg-white/80 border-gray-200/60 dark:bg-gray-900/60 dark:border-white/10 shadow-sm">
								<p className="text-gray-700 dark:text-gray-200">“{t.quote}”</p>
								<footer className="mt-3 text-sm text-gray-600 dark:text-gray-400">— {t.by}</footer>
							</motion.blockquote>
						))}
					</div>
				</section>

				{/* 7) TECHNOLOGY / STACK */}
				<section className="rounded-2xl border border-gray-200/60 dark:border-white/10 p-6 bg-white/70 dark:bg-gray-900/60">
					<h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Kullandığımız Teknolojiler</h2>
						<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-sm">
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Boxes className="h-4 w-4 text-blue-400" /> Java</div>
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Layers className="h-4 w-4 text-blue-400" /> Spring Boot</div>
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Monitor className="h-4 w-4 text-blue-400" /> React</div>
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Boxes className="h-4 w-4 text-blue-400" /> Docker</div>
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Database className="h-4 w-4 text-blue-400" /> PostgreSQL</div>
							<div className="flex items-center gap-2 text-gray-700 dark:text-gray-200"><Cloud className="h-4 w-4 text-blue-400" /> Kubernetes</div>
					</div>
				</section>

				{/* 8) BOTTOM CTA */}
				<section className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-white/10 bg-gradient-to-r from-blue-600/20 to-indigo-700/20">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="p-8 md:col-span-2">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Projenizi rayına oturtmaya hazır mısınız?</h3>
							<p className="mt-2 text-gray-700 dark:text-gray-200">İhtiyaçlarınızı konuşalım, birlikte en doğru çözümü tasarlayalım.</p>
							<Link to="/contact" className="inline-block mt-6">
								<Button className="px-6 py-3">Bizimle iletişime geç</Button>
							</Link>
						</div>
						<div className="relative h-52 md:h-auto">
						<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=70" alt="Team working" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
						</div>
					</div>
				</section>

			</div>

			{/* ScrollToTop Button */}
			<a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/60 bg-white/80 text-gray-800 shadow-md hover:shadow-lg dark:border-white/10 dark:bg-gray-900/80 dark:text-gray-100" aria-label="Scroll to top">
				<ChevronUp className="h-5 w-5" />
			</a>
		</div>
	);
}


