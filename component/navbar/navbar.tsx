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
                        <Link href="/">Home</Link>
                        <Link href="/food_section/foodlist">Meals</Link>
                        <Link href="/subscription">Subscription</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        <Link
                            href="/auth/signin"
                            className="hidden lg:block px-6 py-3 rounded-xl bg-green-700 text-white font-semibold"
                        >
                            Login
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>

                            <Link
                                href="/food_section/foodlist"
                                onClick={() => setIsOpen(false)}
                            >
                                Meals
                            </Link>

                            <Link
                                href="/subscription"
                                onClick={() => setIsOpen(false)}
                            >
                                Subscription
                            </Link>

                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>

                            <Link
                                href="/auth/signin"
                                onClick={() => setIsOpen(false)}
                                className="bg-green-700 text-white px-4 py-2 rounded-lg text-center"
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