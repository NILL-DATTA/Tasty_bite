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
                            src="/images/bitenest.png"
                            alt="Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <Link
                            href="/"
                            className="font-medium text-black hover:text-green-700 transition"
                        >
                            Home
                        </Link>

                        <Link
                            href="/food_section/foodlist"
                            className="font-medium text-black hover:text-green-700 transition"
                        >
                            Meals
                        </Link>

                        <Link
                            href="/subscription"
                            className="font-medium text-black hover:text-green-700 transition"
                        >
                            Subscription
                        </Link>

                        <Link
                            href="/about"
                            className="font-medium text-black hover:text-green-700 transition"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="font-medium text-black hover:text-green-700 transition"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/auth/signin"
                            className="hidden lg:flex items-center justify-center px-6 py-2.5 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                        >
                            Login
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden"
                        >
                            {isOpen ? (
                                <X size={28} className="text-black" />
                            ) : (
                                <Menu size={28} className="text-black" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden border-t bg-white py-4">
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-black hover:text-green-700"
                            >
                                Home
                            </Link>

                            <Link
                                href="/food_section/foodlist"
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-black hover:text-green-700"
                            >
                                Meals
                            </Link>

                            <Link
                                href="/subscription"
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-black hover:text-green-700"
                            >
                                Subscription
                            </Link>

                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-black hover:text-green-700"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="font-medium text-black hover:text-green-700"
                            >
                                Contact
                            </Link>

                            <Link
                                href="/auth/signin"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 bg-green-700 text-white py-3 rounded-xl text-center font-semibold hover:bg-green-800 transition"
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