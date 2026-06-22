"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 3H22l-5.6 6.4L23 21h-6.4l-5-6.6-5.7 6.6H3l6-6.9L2.6 3H9l4.5 6 6.1-6Zm-2.2 16.2h1.3L7.6 4.7H6.2L17.4 19.2Z" />
    </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33Z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-white text-gray-800 border-t border-gray-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Logo + Description */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/bitenest.png"
                                alt="TastyBite Logo"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>

                        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            Fresh, healthy meals made simple. We believe eating well
                            should be easy, delicious, and good for your everyday life.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-700 hover:text-white transition"
                            >
                                <FacebookIcon size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-700 hover:text-white transition"
                            >
                                <InstagramIcon size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-700 hover:text-white transition"
                            >
                                <TwitterIcon size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-green-700 hover:text-white transition"
                            >
                                <YoutubeIcon size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/meals"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    Meals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/subscription"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    Subscription
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={18}
                                    className="text-green-700 mt-0.5 shrink-0"
                                />
                                <span className="text-gray-600">
                                    123 Green Street, Salt Lake,
                                    <br />
                                    Kolkata, West Bengal, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-green-700 shrink-0" />
                                <a
                                    href="tel:+910000000000"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    +91 00000 00000
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-green-700 shrink-0" />
                                <a
                                    href="mailto:hello@tastybite.com"
                                    className="text-gray-600 hover:text-green-700 transition"
                                >
                                    hello@tastybite.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-900 font-semibold text-lg mb-4">
                            Stay Updated
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Subscribe to get healthy recipes, meal plans, and offers
                            straight to your inbox.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center gap-2"
                        >
                            <input
                                type="email"
                                required
                                placeholder="Your email"
                                className="
                  w-full
                  px-4
                  py-2.5
                  rounded-lg
                  bg-gray-50
                  border
                  border-gray-200
                  text-sm
                  text-black
                  placeholder-gray-500
                  focus:bg-white
                  focus:border-green-600
                  focus:ring-4
                  focus:ring-green-100
                  outline-none
                  transition
                "
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="
                  shrink-0
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-green-700
                  hover:bg-green-800
                  text-white
                  transition
                "
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} TastyBite. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <Link href="/privacy" className="hover:text-green-700 transition">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-green-700 transition">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}