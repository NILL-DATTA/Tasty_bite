"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/images/gg.png"
                            alt="Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-black font-medium hover:text-green-700 transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            href="/food_section/foodlist"
                            className="text-black font-medium hover:text-green-700 transition-colors"
                        >
                            Meals
                        </Link>

                        <Link
                            href="/subscription"
                            className="text-black font-medium hover:text-green-700 transition-colors"
                        >
                            Subscription
                        </Link>

                        <Link
                            href="/about"
                            className="text-black font-medium hover:text-green-700 transition-colors"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="text-black font-medium hover:text-green-700 transition-colors"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/auth/signin"
                            className="hidden lg:block px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
                        >
                            Login
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-black"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t bg-white">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-black font-medium hover:text-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>

                            <Link
                                href="/food_section/foodlist"
                                className="text-black font-medium hover:text-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Meals
                            </Link>

                            <Link
                                href="/subscription"
                                className="text-black font-medium hover:text-green-700"
                                href="/food_section/subscription"
                                onClick={() => setIsOpen(false)}
                            >
                                Subscription
                            </Link>

                            <Link
                                href="/about"
                                className="text-black font-medium hover:text-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                className="text-black font-medium hover:text-green-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <Link
                                href="/auth/signin"
                                onClick={() => setIsOpen(false)}
                                className="bg-green-700 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-green-800 transition-colors"
                            >
                                Login
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}