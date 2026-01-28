"use client";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import StaggeredMenu, { StaggeredMenuHandle } from "./StaggeredMenu";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
	const menuRef = useRef<StaggeredMenuHandle>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [isScrolled, setIsScrolled] = useState(false);

	const menuItems = [
		{ label: "Home", link: "/", ariaLabel: "Home" },
		{ label: "Quote", link: "#quote", ariaLabel: "Quote" },
		{ label: "About", link: "#about", ariaLabel: "About" },
		{ label: "Experience", link: "#experience", ariaLabel: "Experience" },
		{ label: "Projects", link: "#projects", ariaLabel: "Projects" },
	];

	const handleToggle = () => {
		menuRef.current?.toggle();
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setIsScrolled(scrollY > 50);

			// Scroll Spy Logic - include #cta for Contact link
			const sections = [
				...menuItems
					.map((item) => item.link.replace("/", ""))
					.filter((link) => link.startsWith("#")),
				"#cta" // Include CTA section for Contact link
			];

			if (scrollY < 100) {
				setActiveSection("/");
				return;
			}

			for (const sectionId of sections) {
				const element = document.querySelector(sectionId);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 200 && rect.bottom >= 200) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Mobile Header: Standard (NOT scrolled) */}
			<AnimatePresence>
				{!isScrolled && (
					<motion.header 
						className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:hidden"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						<Link href="/">
							<span className="font-sans text-2xl font-semibold tracking-tight text-gray-900">
								sptr
							</span>
						</Link>

						<button
							onClick={handleToggle}
							className="w-12 h-12 bg-gray-100/90 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-1.5 shadow-sm hover:bg-gray-200 transition-colors"
							aria-label="Toggle Menu"
						>
							<div className="w-5 h-[1.5px] bg-gray-900"></div>
							<div className="w-5 h-[1.5px] bg-gray-900"></div>
						</button>
					</motion.header>
				)}
			</AnimatePresence>

			{/* Mobile Header: Floating Pill (Scrolled) */}
			<AnimatePresence>
				{isScrolled && (
					<motion.header 
						className="fixed top-4 left-0 right-0 z-50 flex justify-center md:hidden pointer-events-none"
						initial={{ opacity: 0, y: -20, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -20, scale: 0.9 }}
						transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
					>
						<div className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-gray-200/50 px-4 py-2.5 rounded-full shadow-lg flex items-center gap-4">
							<Link href="/">
								<span className="font-sans text-lg font-semibold tracking-tight text-gray-900">
									sptr
								</span>
							</Link>

							<div className="w-px h-5 bg-gray-300"></div>

							<button
								onClick={handleToggle}
								className="w-9 h-9 bg-gray-100 rounded-full flex flex-col items-center justify-center gap-1 hover:bg-gray-200 transition-colors"
								aria-label="Toggle Menu"
							>
								<div className="w-4 h-[1.5px] bg-gray-900"></div>
								<div className="w-4 h-[1.5px] bg-gray-900"></div>
							</button>
						</div>
					</motion.header>
				)}
			</AnimatePresence>

			{/* Desktop Header 1: Standard (Logo Left, Links Center, Button Right) - Visible when NOT scrolled */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.header
                        className="fixed top-0 left-0 mx-12 right-0 z-40 hidden md:flex items-center justify-between px-12 py-8 bg-transparent"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href="/" className="font-sans text-2xl font-semibold tracking-tight text-gray-900">
                            sptr
                        </Link>

                        <nav className="flex items-center gap-8">
                            {menuItems.map((item) => (
                                <Link 
                                    key={item.label}
                                    href={item.link}
                                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        <Link
                            href="#cta"
                             className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                        >
                            Let&apos;s Talk
                        </Link>
                    </motion.header>
                )}
            </AnimatePresence>

			{/* Desktop Header 2: Floating Pill - Visible when Scrolled */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.header 
                        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="pointer-events-auto bg-gray-100/80 backdrop-blur-xl border border-white/20 p-1.5 rounded-full shadow-sm flex items-center gap-1">
                            {menuItems.map((item) => {
                                const isActive = 
                                    (item.link === "/" && activeSection === "/") ||
                                    (item.link === activeSection);

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.link}
                                        className={cn(
                                            "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                            isActive
                                                ? "bg-white text-black shadow-sm"
                                                : "text-gray-500 hover:text-gray-900"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}

                            <div className="w-px h-4 bg-gray-300 mx-2"></div>

                            <Link
                                href="#cta"
                                className={cn(
                                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                    activeSection === "#cta"
                                        ? "bg-white text-black shadow-sm"
                                        : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                Contact
                            </Link>
                        </nav>
                    </motion.header>
                )}
            </AnimatePresence>

			<StaggeredMenu
				ref={menuRef}
				headless={true}
				items={menuItems}
				socialItems={[
					{ label: "Instagram", link: "https://instagram.com/cerc_undip" },
					{ label: "LinkedIn", link: "https://linkedin.com/company/cerc-undip" },
					{ label: "GitHub", link: "https://github.com/cerc-undip" },
				]}
				isFixed={true}
				displaySocials={true}
				displayItemNumbering={true}
				colors={["#111", "#111", "#111"]}
				accentColor="#fff"
				menuButtonColor="#000"
				onMenuOpen={() => setIsOpen(true)}
				onMenuClose={() => setIsOpen(false)}
				className="font-sans"
			/>
		</>
	);
}
