import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pathname]);
	return null;
}

function PageContainer({ children }) {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<motion.main
				key={location.pathname}
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -12 }}
				transition={{ duration: 0.2 }}
				className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
			>
				{children}
			</motion.main>
		</AnimatePresence>
	);
}

export default function App() {
	return (
		<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
			<BrowserRouter>
				<ScrollToTop />
				<Navbar />
				<PageContainer>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</PageContainer>
				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}


