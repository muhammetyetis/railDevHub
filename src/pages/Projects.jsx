import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, MapPin, Factory, CreditCard, BarChart, Cpu, Cloud, ArrowRight, X } from 'lucide-react';

const projects = [
	{
		title: 'SmartTrack Logistics',
		Icon: MapPin,
		desc: 'AI destekli rota optimizasyon sistemi. Teslimat süreçlerini %30 hızlandırır.',
		tech: ['Spring Boot', 'PostgreSQL', 'React', 'Docker'],
		color: 'blue',
		gradient: 'from-blue-500 to-blue-600',
		fullDesc: 'SmartTrack Logistics, yapay zeka destekli rota optimizasyon sistemidir. Teslimat süreçlerini %30 oranında hızlandırır ve yakıt maliyetlerini optimize eder. Gerçek zamanlı trafik verileri ve makine öğrenmesi algoritmaları kullanarak en verimli rotaları belirler.'
	},
	{
		title: 'FactoryLink CMMS',
		Icon: Factory,
		desc: 'Bakım ve arıza yönetimi platformu. Fabrika süreçlerinde tam görünürlük sağlar.',
		tech: ['Java 17', 'Kafka', 'React', 'Keycloak'],
		color: 'violet',
		gradient: 'from-violet-500 to-violet-600',
		fullDesc: 'FactoryLink CMMS, fabrika bakım ve arıza yönetimi için kapsamlı bir platformdur. IoT sensörlerle entegre çalışarak makine sağlığını izler, bakım planlarını optimize eder ve arıza öncesi uyarılar sağlar. Fabrika süreçlerinde tam görünürlük ve kontrol sunar.'
	},
	{
		title: 'PayFlex Gateway',
		Icon: CreditCard,
		desc: 'PCI-DSS uyumlu güvenli ödeme yönlendirme servisi.',
		tech: ['Spring Boot', 'Redis', 'Oracle', 'OpenShift'],
		color: 'cyan',
		gradient: 'from-cyan-500 to-cyan-600',
		fullDesc: 'PayFlex Gateway, PCI-DSS standartlarına tam uyumlu, güvenli ödeme yönlendirme servisidir. Çoklu ödeme sağlayıcı desteği, gerçek zamanlı fraud tespiti ve yüksek kullanılabilirlik özellikleri ile kurumsal ödeme işlemlerini güvenle yönetir.'
	},
	{
		title: 'InsightX Analytics',
		Icon: BarChart,
		desc: 'Gerçek zamanlı veri analitiği ve görselleştirme platformu.',
		tech: ['Kotlin', 'MongoDB', 'React', 'Grafana'],
		color: 'amber',
		gradient: 'from-amber-500 to-amber-600',
		fullDesc: 'InsightX Analytics, gerçek zamanlı veri analitiği ve görselleştirme platformudur. Büyük veri setlerini hızlıca işler, anlamlı içgörüler sunar ve interaktif dashboard\'lar ile karar vericilere güç verir. Özelleştirilebilir raporlama ve alarm sistemi içerir.'
	},
	{
		title: 'PulseSync IoT',
		Icon: Cpu,
		desc: 'Cihazlar arası veri iletişimi sağlayan düşük gecikmeli IoT platformu.',
		tech: ['Node.js', 'MQTT', 'InfluxDB', 'React'],
		color: 'green',
		gradient: 'from-green-500 to-green-600',
		fullDesc: 'PulseSync IoT, endüstriyel IoT cihazları arası veri iletişimi sağlayan düşük gecikmeli platformdur. MQTT protokolü ile milyonlarca cihazı destekler, zaman serisi verileri yönetir ve edge computing yetenekleri ile gerçek zamanlı işlem gücü sunar.'
	},
	{
		title: 'VeloCloud Orchestrator',
		Icon: Cloud,
		desc: 'Bulut tabanlı ağ yönetimi ve yük dengeleme sistemi.',
		tech: ['Java', 'Spring Cloud', 'Docker', 'Kubernetes'],
		color: 'pink',
		gradient: 'from-pink-500 to-pink-600',
		fullDesc: 'VeloCloud Orchestrator, bulut tabanlı ağ yönetimi ve yük dengeleme sistemidir. Mikroservis mimarisi ile ölçeklenebilir, Kubernetes üzerinde otomatik yük dengeleme yapar ve multi-cloud ortamlarda kesintisiz hizmet sağlar.'
	}
];

const colorMap = {
	blue: 'shadow-blue-500/30 hover:shadow-blue-500/50',
	violet: 'shadow-violet-500/30 hover:shadow-violet-500/50',
	cyan: 'shadow-cyan-500/30 hover:shadow-cyan-500/50',
	amber: 'shadow-amber-500/30 hover:shadow-amber-500/50',
	green: 'shadow-green-500/30 hover:shadow-green-500/50',
	pink: 'shadow-pink-500/30 hover:shadow-pink-500/50'
};

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	return (
		<div className="relative min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:text-white">
			<div className="mx-auto max-w-7xl px-4 py-16 space-y-12">
				
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					className="text-center space-y-4"
				>
					<div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-lg shadow-blue-500/50 mx-auto">
						<Code2 className="h-7 w-7 text-white" />
					</div>
					<h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
						Kodlarımız gerçek iş problemlerini çözüyor.
					</h1>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Ürettiğimiz her proje, ölçeklenebilirlik ve yüksek performans ilkeleriyle inşa edildi.
					</p>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="h-1 w-48 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"
					/>
				</motion.div>

				{/* Project Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: idx * 0.1 }}
							whileHover={{ scale: 1.03 }}
							className={`group relative rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur p-6 shadow-xl transition-all ${colorMap[project.color]}`}
						>
							{/* Gradient top border */}
							<div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.gradient}`} />

							{/* Icon */}
							<div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg mb-4`}>
								<project.Icon className="h-6 w-6 text-white" />
							</div>

							{/* Title */}
							<h3 className="text-xl font-bold mb-3">{project.title}</h3>

							{/* Description */}
							<p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
								{project.desc}
							</p>

							{/* Tech Stack */}
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tech.map((t) => (
									<span
										key={t}
										className="text-xs rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-gray-300"
									>
										{t}
									</span>
								))}
							</div>

							{/* Learn More Button */}
							<motion.button
								onClick={() => setSelectedProject(project)}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								className={`w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${project.gradient} px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg`}
							>
								Learn More
								<ArrowRight className="h-4 w-4" />
							</motion.button>
						</motion.div>
					))}
				</div>

			</div>

			{/* Modal/Popup */}
			<AnimatePresence>
				{selectedProject && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedProject(null)}
							className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
						/>
						
						{/* Modal Content */}
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
							className="fixed inset-0 z-50 flex items-center justify-center p-4"
							onClick={() => setSelectedProject(null)}
						>
							<div
								onClick={(e) => e.stopPropagation()}
								className={`relative max-w-2xl w-full rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl ${colorMap[selectedProject.color]} overflow-hidden`}
							>
								{/* Gradient top border */}
								<div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedProject.gradient}`} />

								{/* Close button */}
								<button
									onClick={() => setSelectedProject(null)}
									className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
								>
									<X className="h-5 w-5 text-gray-300" />
								</button>

								{/* Content */}
								<div className="p-8 space-y-6">
									{/* Icon & Title */}
									<div className="flex items-center gap-4">
										<div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${selectedProject.gradient} shadow-lg`}>
											<selectedProject.Icon className="h-7 w-7 text-white" />
										</div>
										<h2 className="text-2xl font-bold">{selectedProject.title}</h2>
									</div>

									{/* Full Description */}
									<p className="text-gray-300 leading-relaxed">
										{selectedProject.fullDesc}
									</p>

									{/* Tech Stack */}
									<div>
										<p className="text-sm font-semibold text-gray-400 mb-3">Teknoloji Stack:</p>
										<div className="flex flex-wrap gap-2">
											{selectedProject.tech.map((t) => (
												<span
													key={t}
													className="text-sm rounded-full bg-slate-800 border border-slate-700 px-4 py-2 text-gray-300"
												>
													{t}
												</span>
											))}
										</div>
									</div>

									{/* Action Button */}
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										onClick={() => setSelectedProject(null)}
										className={`w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r ${selectedProject.gradient} px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg`}
									>
										Kapat
									</motion.button>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}
