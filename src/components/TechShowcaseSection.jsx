import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, MessageCircle, Lock, Leaf, Eye, Grid } from 'lucide-react';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.06 }
	}
};

const item = {
	hidden: { opacity: 0, y: 12, scale: 0.98 },
	show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } }
};

const cards = [
	{
		title: 'Smart Track Sensors',
		desc: 'IoT tabanlı sensörlerle mikro çatlak ve sıcaklık anomalilerini erken tespit.',
		badge: 'Prototype',
		tags: ['IoT', 'Predictive ML', 'Edge Computing'],
		to: '/projects',
		Icon: Zap,
		gradient: 'from-blue-600 to-indigo-500'
	},
	{
		title: 'AI Station Assistant',
		desc: 'Yolcu etkileşimlerini kolaylaştıran NLP tabanlı yapay zeka asistanı.',
		badge: 'Beta',
		tags: ['NLP', 'Voice AI', 'LLM'],
		to: '/projects',
		Icon: MessageCircle,
		gradient: 'from-rose-500 to-pink-400'
	},
	{
		title: 'Blockchain Safety Records',
		desc: 'Bakım geçmişlerini şeffaf biçimde kaydeden blockchain güvenlik sistemi.',
		badge: 'Research',
		tags: ['Blockchain', 'Smart Contracts', 'Audit Trail'],
		to: '/about',
		Icon: Lock,
		gradient: 'from-amber-500 to-yellow-400'
	},
	{
		title: 'Carbon-Neutral Routing',
		desc: 'Enerji verimliliği için tren rotalarını optimize eden yapay zeka.',
		badge: 'Pilot',
		tags: ['Optimization', 'Sustainability', 'Green AI'],
		to: '/projects',
		Icon: Leaf,
		gradient: 'from-emerald-500 to-green-400'
	},
	{
		title: 'Computer Vision Safety',
		desc: 'Platform ve trenleri 7/24 izleyen görüntü işleme sistemi.',
		badge: 'Development',
		tags: ['Computer Vision', 'Real-time', 'Safety'],
		to: '/projects',
		Icon: Eye,
		gradient: 'from-purple-500 to-fuchsia-500'
	},
	{
		title: 'Digital Twin Network',
		desc: 'Demiryolu ağının dijital ikizi ile simülasyon ve risk analizi.',
		badge: 'Concept',
		tags: ['Simulation', '3D Modeling', 'Testing'],
		to: '/projects',
		Icon: Grid,
		gradient: 'from-sky-500 to-cyan-400'
	}
];

export default function TechShowcaseSection() {
	const navigate = useNavigate();
	return (
		<section className="mt-20" aria-labelledby="tech-showcase-title">
			<div className="text-center max-w-3xl mx-auto">
				<motion.h2
					id="tech-showcase-title"
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3 }}
					className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
				>
					Yarının Teknolojileriyle Bugünü Kodluyoruz
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.05 }}
					className="mt-3 text-gray-600 dark:text-gray-300"
				>
					RailDevHub ekibi, üretim sistemlerinin ötesinde yeni nesil yazılım çözümlerini araştırıyor ve geliştiriyor.
				</motion.p>
			</div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
			>
				{cards.map(({ title, desc, badge, tags, to, Icon, gradient }) => (
					<motion.button
						key={title}
						variants={item}
						onClick={() => navigate(to)}
						className={`group text-left rounded-2xl p-6 shadow-lg shadow-black/30 border border-gray-800 bg-slate-900/60 hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500/40`}
					>
						<div className={`h-1.5 w-full rounded-full bg-gradient-to-br ${gradient}`} />
						<div className="mt-5 flex items-center gap-3">
							<span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient}`}>
								<Icon className="h-5 w-5 text-white" />
							</span>
							<p className="text-lg font-semibold text-gray-100">{title}</p>
							<span className="ml-auto text-xs rounded-full bg-white/10 text-gray-100 px-2 py-1 border border-white/10">{badge}</span>
						</div>
						<p className="mt-3 text-sm text-gray-300">{desc}</p>
						<div className="mt-4 flex flex-wrap gap-2">
							{tags.map((t) => (
								<span key={t} className="text-xs rounded-full bg-slate-800/80 px-2 py-1 text-gray-200 border border-white/10">
									{t}
								</span>
							))}
						</div>
					</motion.button>
				))}
			</motion.div>
		</section>
	);
}



