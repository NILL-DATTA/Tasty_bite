"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-28 md:h-22">

                    {/* Left Side - Logo */}
                    <div className="flex items-center h-full">
                        <Link href="/" className="flex items-center h-full">
                            <img
                                src="/images/gg.png"
                                alt="Logo"
                                className="max-h-20 md:max-h-14 w-auto object-contain block"
                            />
                        </Link>
                    </div>

                    {/* Center Menu */}
                    <nav className="hidden lg:flex items-center h-full gap-8">
                        <Link
                            href="/"
                            className="text-gray-800 hover:text-green-700 transition font-medium"
                        >
                            Home
                        </Link>

                        <Link
                            href="/food_section/foodlist"
                            className="text-gray-800 hover:text-green-700 transition font-medium"
                        >
                            Meals
                        </Link>

                        <Link
                            href="/subscription"
                            className="text-gray-800 hover:text-green-700 transition font-medium"
                        >
                            Subscription
                        </Link>

                        <Link
                            href="/about"
                            className="text-gray-800 hover:text-green-700 transition font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            className="text-gray-800 hover:text-green-700 transition font-medium"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Right Side - Login */}
                    <div className="flex items-center h-full">
                        <Link
                            href="/auth/signin"
                            className="px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
                        >
                            Login
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}