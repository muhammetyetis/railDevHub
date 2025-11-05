import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Users, Briefcase, Lightbulb, Shield, Lock, Zap, Layout, CheckCircle, Target, Compass, Database, Monitor, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Avatar from '@/components/Avatar';

const coreValues = [
	{ Icon: Lock, title: 'Güvenlik', desc: 'Veri güvenliği ve gizliliği önceliğimizdir.' },
	{ Icon: Zap, title: 'Performans', desc: 'Gerçek zamanlı, yüksek ölçekli sistemler.' },
	{ Icon: Layout, title: 'Modern Tasarım', desc: 'Kullanıcı dostu, modern arayüzler.' },
	{ Icon: CheckCircle, title: 'Kalite', desc: 'Test, kalite ve üretim hazır çözümler.' },
];

const members = [
	{ 
		name: 'Muhammet Yetis', 
		role: 'Backend Architect',
		desc: 'Veri odaklı çözümlerle sistemleri daha hızlı hale getiriyor.',
		Icon: Database
	},
	{ 
		name: 'Elif Duran', 
		role: 'Frontend Developer',
		desc: 'Modern arayüzlerle kullanıcı deneyimini mükemmelleştiriyor.',
		Icon: Monitor
	},
	{ 
		name: 'Ahmet Kaya', 
		role: 'DevOps Engineer',
		desc: 'Sürekli teslimat ve bulut süreçlerinde uzman.',
		Icon: Cloud
	},
	{ 
		name: 'Selin Koç', 
		role: 'QA Lead',
		desc: 'Kaliteyi güvence altına alan test stratejilerini tasarlıyor.',
		Icon: CheckCircle
	},
];

export default function About() {
	return (
		<div className="relative min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
			<div className="mx-auto max-w-7xl px-4 py-16 space-y-24">
				
				{/* Section 1 - Hero */}
				<section className="text-center space-y-6">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4 }}
						className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto shadow-lg shadow-blue-500/50"
					>
						<Rocket className="h-8 w-8 text-white" />
					</motion.div>
					<motion.h1
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.1 }}
						className="text-3xl md:text-5xl font-extrabold"
					>
						Teknolojiyi sadece kullanmıyoruz, şekillendiriyoruz.
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35, delay: 0.15 }}
						className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
					>
						Temiz kod, sağlam mimari, yüksek performans.<br />
						Yazılımı sadece üretmiyoruz — geleceği inşa ediyoruz.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, scaleX: 0 }}
						animate={{ opacity: 1, scaleX: 1 }}
						transition={{ duration: 0.5, delay: 0.25 }}
						className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full shadow-lg shadow-cyan-400/50"
					/>
				</section>

				{/* Section 2 - Biz Kimiz */}
				<section className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="text-center space-y-4"
					>
						<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-violet-500/50">
							<Users className="h-6 w-6 text-white" />
						</div>
						<h2 className="text-2xl md:text-3xl font-bold">Biz Kimiz</h2>
						<p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
							RailDevHub, 2023 yılında yazılımı daha ölçülebilir, sürdürülebilir ve performans odaklı hale getirmek için kuruldu.<br />
							Amacımız: karmaşık problemleri sade ve güçlü çözümlere dönüştürmek.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{[
							{ Icon: Briefcase, title: 'Deneyim', desc: 'Yılların getirdiği bilgi ve uzmanlık.' },
							{ Icon: Lightbulb, title: 'İnovasyon', desc: 'Sürekli yenilik ve yaratıcılık.' },
							{ Icon: Shield, title: 'Güvenilirlik', desc: 'Güvenli, sağlam ve istikrarlı çözümler.' },
						].map((item, idx) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.08, duration: 0.3 }}
								className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 hover:border-cyan-400/50 transition-all"
							>
								<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-3">
									<item.Icon className="h-5 w-5 text-white" />
								</div>
								<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-gray-400">{item.desc}</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Section 3 - Core Values */}
				<section className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center space-y-3"
					>
						<h2 className="text-2xl md:text-3xl font-bold">Temel Değerlerimiz</h2>
						<p className="text-gray-400">Yaptığımız her şey bu ilkeler üzerine kuruludur.</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{coreValues.map((value, idx) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.08, duration: 0.3 }}
								whileHover={{ scale: 1.03 }}
								className="relative rounded-2xl border border-blue-500/20 bg-slate-900 p-6 shadow-lg hover:shadow-blue-500/30 transition-all overflow-hidden"
							>
								<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
								<value.Icon className="h-8 w-8 text-blue-400 mb-3" />
								<h3 className="text-lg font-semibold mb-2">{value.title}</h3>
								<p className="text-sm text-gray-400">{value.desc}</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Section 4 - Vizyon & Misyon */}
				<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8 shadow-xl hover:shadow-violet-500/30 transition-shadow"
					>
						<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 mb-4 shadow-lg">
							<Target className="h-6 w-6 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-3">Vizyonumuz</h3>
						<p className="text-gray-300 leading-relaxed">
							Teknolojiyle sınırları kaldırarak işletmelere akıllı çözümler sunmak.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 shadow-xl hover:shadow-blue-500/30 transition-shadow"
					>
						<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg">
							<Compass className="h-6 w-6 text-white" />
						</div>
						<h3 className="text-xl font-bold mb-3">Misyonumuz</h3>
						<p className="text-gray-300 leading-relaxed">
							Her kod satırında kalite, güvenlik ve hız. Müşterilerimizin başarısını hızlandırmak için çalışıyoruz.
						</p>
					</motion.div>
				</section>

				{/* Section 5 - Geleceğe Yolculuk */}
				<section className="space-y-8">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center space-y-3"
					>
						<h2 className="text-2xl md:text-3xl font-bold">İnşa Ettiğimiz Gelecek</h2>
						<p className="text-gray-400">Yol haritamız sadece iddialı değil — devrim niteliğinde.</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="rounded-2xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30 p-8 text-center"
					>
						<p className="text-lg md:text-xl font-semibold">
							2030'a kadar Türkiye'nin en akıllı yazılım platformlarından biri olmayı hedefliyoruz.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="relative rounded-2xl bg-slate-900 border border-blue-500/20 p-8 overflow-hidden"
					>
						<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-violet-500" />
						<h3 className="text-xl font-bold mb-4">2025 – Kuruluş Yılımız</h3>
						<ul className="space-y-2 text-gray-300">
							<li className="flex items-center gap-2">
								<CheckCircle className="h-5 w-5 text-green-400" />
								Platform devreye alındı
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle className="h-5 w-5 text-green-400" />
								Gerçek zamanlı veri akışı
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle className="h-5 w-5 text-green-400" />
								10.000+ aktif kullanıcı
							</li>
							<li className="flex items-center gap-2">
								<CheckCircle className="h-5 w-5 text-green-400" />
								100+ rapor & dashboard
							</li>
						</ul>
					</motion.div>
				</section>

				{/* Section 6 - Ekibimiz */}
				<section className="space-y-8">
					<motion.h2
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-2xl md:text-3xl font-bold text-center"
					>
						Ekibimiz
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{members.map((m, idx) => (
							<motion.div
								key={m.name}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.08, duration: 0.3 }}
								whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 211, 238, 0.4)' }}
								className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-slate-900 to-slate-800 p-6 text-center shadow-lg transition-all"
							>
								<div className="flex justify-center mb-4">
									<div className="relative">
										<Avatar name={m.name} className="h-20 w-20 text-xl" />
										<div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
											<m.Icon className="h-4 w-4 text-white" />
										</div>
									</div>
								</div>
								<p className="font-semibold text-lg">{m.name}</p>
								<p className="text-sm text-cyan-400 font-medium mb-3">{m.role}</p>
								<p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Section 7 - Kapanış */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="text-center py-12"
				>
					<p className="text-3xl md:text-4xl italic font-light bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
						"Birlikte geliştiriyor, birlikte büyüyoruz."
					</p>
				</motion.div>

			</div>
		</div>
	);
}
