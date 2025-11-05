import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		// Reset form
		setFormData({ name: '', email: '', message: '' });
		// Hide success message after 5 seconds
		setTimeout(() => setSubmitted(false), 5000);
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<div className="relative min-h-screen bg-white text-gray-900 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:text-white">
			<div className="mx-auto max-w-3xl px-4 py-16">
				<motion.h1
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-3xl md:text-4xl font-bold text-center mb-4"
				>
					Bir fikrin mi var? Gel, onu birlikte rayına oturtalım 🚄
				</motion.h1>

				{/* Success Message */}
				<AnimatePresence>
					{submitted && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 flex items-center gap-3"
						>
							<CheckCircle className="h-5 w-5 text-green-400" />
							<p className="text-green-300 font-medium">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</p>
						</motion.div>
					)}
				</AnimatePresence>

				<form onSubmit={handleSubmit} className="mt-8 space-y-4">
					<input
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
						placeholder="İsim"
						required
					/>
					<input
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
						placeholder="Email"
						type="email"
						required
					/>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-gray-500 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
						placeholder="Mesajınız"
						rows={5}
						required
					/>
					<Button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
						Mesaj Gönder
					</Button>
				</form>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
					>
						<p className="text-3xl mb-2">📧</p>
						<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
						<p className="text-gray-900 dark:text-gray-200">info@raildevhub.com</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
					>
						<p className="text-3xl mb-2">🌍</p>
						<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Website</p>
						<p className="text-gray-900 dark:text-gray-200">www.raildevhub.com</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
					>
						<p className="text-3xl mb-2">📍</p>
						<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lokasyon</p>
						<p className="text-gray-900 dark:text-gray-200">İstanbul / Türkiye</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="mt-8 h-40 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10"
				/>
			</div>
		</div>
	);
}
