"use client";

import { useState, type CSSProperties } from "react";

/**
 * TastyBite — Choose Your Plan
 *
 * Drop this component into any Next.js (App Router or Pages Router) project
 * that has Tailwind CSS configured. No external image dependencies — all
 * artwork is inline SVG so it renders instantly with zero network calls.
 *
 * Usage:
 *   import TastyBitePlans from "@/components/TastyBitePlans";
 *   export default function Page() { return <TastyBitePlans />; }
 */

type BillingCycle = "weekly" | "monthly";

interface Plan {
    id: string;
    name: string;
    meals: string;
    price: number;
    perMeal: number;
    features: string[];
    featured?: boolean;
}

const PLANS: Plan[] = [
    {
        id: "weekly",
        name: "Weekly Plan",
        meals: "7 Meals",
        price: 999,
        perMeal: 143,
        features: ["High Protein Meals", "Free Delivery", "Customizable"],
    },
    {
        id: "monthly",
        name: "Monthly Plan",
        meals: "22 Meals",
        price: 2999,
        perMeal: 136,
        features: ["High Protein Meals", "Free Delivery", "Customizable"],
        featured: true,
    },
    {
        id: "monthly-plus",
        name: "Monthly Plus",
        meals: "22 Lunch + 22 Dinner",
        price: 5499,
        perMeal: 125,
        features: ["High Protein Meals", "Free Delivery", "Customizable"],
    },
];

const FEATURES = [
    {
        title: "Fresh Ingredients",
        description: "Only the freshest ingredients used",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13.5 11 11" />
            </svg>
        ),
    },
    {
        title: "Home Style Cooked",
        description: "Delicious meals just like home",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M2 21h20M4 21V11a8 8 0 1116 0v10" />
                <path d="M8 8c0-1 .5-2 1-3M12 8c0-1.2.5-2.2 1-3M16 8c0-1 .5-2 1-3" />
            </svg>
        ),
    },
    {
        title: "Free Delivery",
        description: "Free delivery on all plans",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <rect x="1" y="6" width="13" height="11" />
                <path d="M14 9h4l3 3v5h-7z" />
                <circle cx="5.5" cy="19" r="1.5" />
                <circle cx="17.5" cy="19" r="1.5" />
            </svg>
        ),
    },
];

function CheckIcon() {
    return (
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </span>
    );
}

function BowlIllustration({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 230 230" preserveAspectRatio="xMidYMid slice" className={className}>
            <rect width="230" height="230" fill="#f0ece2" />
            <ellipse cx="115" cy="125" rx="100" ry="95" fill="#fbf8f1" stroke="#e2dccb" strokeWidth="2" />
            <ellipse cx="115" cy="120" rx="88" ry="84" fill="#fffdf8" />
            <ellipse cx="80" cy="95" rx="34" ry="22" fill="#e7c98a" transform="rotate(-15 80 95)" />
            <ellipse cx="80" cy="95" rx="34" ry="22" fill="none" stroke="#c9a665" strokeWidth="2" strokeDasharray="4 5" transform="rotate(-15 80 95)" />
            <circle cx="150" cy="80" r="12" fill="#6ba84d" />
            <circle cx="168" cy="100" r="10" fill="#7bb85d" />
            <circle cx="148" cy="105" r="9" fill="#6ba84d" />
            <circle cx="165" cy="125" r="11" fill="#5a9740" />
            <circle cx="95" cy="150" r="9" fill="#e8e3d3" />
            <circle cx="115" cy="160" r="9" fill="#e8e3d3" />
            <circle cx="135" cy="152" r="9" fill="#e8e3d3" />
            <circle cx="105" cy="170" r="8" fill="#dcd6c2" />
        </svg>
    );
}

function SaladBowlIllustration({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 280 230" preserveAspectRatio="xMidYMid slice" className={className}>
            <rect width="280" height="230" fill="#eef1e7" />
            <ellipse cx="140" cy="130" rx="120" ry="100" fill="#fffdf8" stroke="#e2dccb" strokeWidth="2" />
            <ellipse cx="140" cy="124" rx="105" ry="88" fill="#fdfbf5" />
            <circle cx="95" cy="105" r="13" fill="#4f8a3a" />
            <circle cx="115" cy="90" r="11" fill="#5d9c46" />
            <circle cx="80" cy="130" r="12" fill="#6ba84d" />
            <circle cx="105" cy="145" r="10" fill="#4f8a3a" />
            <ellipse cx="150" cy="115" rx="36" ry="22" fill="#e7c98a" transform="rotate(10 150 115)" />
            <ellipse cx="150" cy="115" rx="36" ry="22" fill="none" stroke="#c9a665" strokeWidth="2" strokeDasharray="4 5" transform="rotate(10 150 115)" />
            <ellipse cx="125" cy="80" rx="18" ry="9" fill="#9fc98a" transform="rotate(-10 125 80)" />
            <ellipse cx="142" cy="72" rx="16" ry="8" fill="#b3d69e" transform="rotate(5 142 72)" />
            <circle cx="205" cy="100" r="9" fill="#c3422f" />
            <circle cx="220" cy="118" r="9" fill="#c3422f" />
            <circle cx="200" cy="130" r="8" fill="#b03a28" />
            <circle cx="215" cy="145" r="9" fill="#c3422f" />
            <circle cx="195" cy="160" r="8" fill="#b03a28" />
            <circle cx="150" cy="165" r="8" fill="#e8d9a8" />
            <circle cx="168" cy="172" r="8" fill="#e8d9a8" />
            <circle cx="135" cy="178" r="7" fill="#decb95" />
        </svg>
    );
}

function LeavesIllustration({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 160 220" fill="none" className={className} aria-hidden="true">
            <ellipse cx="20" cy="30" rx="26" ry="14" fill="#bcd9b2" transform="rotate(-35 20 30)" />
            <ellipse cx="55" cy="65" rx="30" ry="15" fill="#a8cf9c" transform="rotate(-20 55 65)" />
            <ellipse cx="15" cy="100" rx="24" ry="13" fill="#9bc78d" transform="rotate(-45 15 100)" />
            <ellipse cx="50" cy="135" rx="22" ry="12" fill="#bcd9b2" transform="rotate(-10 50 135)" />
            <path d="M20 30 L55 65 L15 100 L50 135" stroke="#7fa873" strokeWidth="2" fill="none" />
        </svg>
    );
}

export default function TastyBitePlans() {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>("weekly");

    return (
        <div
            className="bg-white text-[#1c2a1f]"
            style={{ "--font-display": "'Poppins', 'Segoe UI', sans-serif" } as CSSProperties}
        >

            {/* Hero */}
            <section className="relative overflow-hidden bg-[#f4f8f3] px-4 pb-28 pt-16 sm:px-5 sm:pb-32 sm:pt-8">
                <LeavesIllustration className="absolute left-0 top-0 h-[90px] w-[60px] opacity-90 sm:h-[220px] sm:w-[160px]" />
                <div className="absolute right-0 top-0 h-[100px] w-[100px] overflow-hidden rounded-bl-[50%] sm:h-[230px] sm:w-[230px]">
                    <BowlIllustration className="h-full w-full" />
                </div>

                <div className="relative z-[2] mx-auto max-w-xl text-center">
                    <h1 className="font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#1f5e2e] sm:text-[30px]">
                        Choose Your Plan
                    </h1>
                    <p className="mt-2 text-sm text-[#5c6b5f] sm:text-base">Eat healthy. Stay fit.</p>

                    <div className="relative mt-6 inline-flex rounded-full bg-white p-[5px] shadow-[0_8px_24px_rgba(31,94,46,0.08)]">
                        <span
                            className="absolute top-[5px] left-[5px] h-[calc(100%-10px)] w-[calc(50%-5px)] rounded-full bg-gradient-to-br from-[#1f5e2e] to-[#3f9450] transition-transform duration-300 ease-in-out"
                            style={{ transform: billingCycle === "monthly" ? "translateX(100%)" : "translateX(0)" }}
                        />
                        <button
                            type="button"
                            onClick={() => setBillingCycle("weekly")}
                            className={`relative z-[1] rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:px-9 ${billingCycle === "weekly" ? "text-white" : "text-[#5c6b5f]"
                                }`}
                        >
                            Weekly
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingCycle("monthly")}
                            className={`relative z-[1] rounded-full px-7 py-2.5 text-sm font-semibold transition-colors sm:px-9 ${billingCycle === "monthly" ? "text-white" : "text-[#5c6b5f]"
                                }`}
                        >
                            Monthly
                        </button>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="relative z-[3] mx-auto -mt-[85px] max-w-6xl px-4 pb-3 sm:-mt-[95px] sm:px-5">
                <div className="grid grid-cols-1 gap-11 sm:gap-12 md:grid-cols-3 md:gap-5">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col rounded-[20px] border-[1.5px] bg-white p-6 pb-[26px] shadow-[0_8px_24px_rgba(31,94,46,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(31,94,46,0.16)] sm:p-7 ${plan.featured
                                ? "order-first border-2 border-[#2d7a3e] md:order-none"
                                : "border-[#e3e9e1]"
                                }`}
                        >
                            {plan.featured && (
                                <span className="absolute -top-[15px] left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-[#1f5e2e] to-[#3f9450] px-4 py-[7px] text-[11px] font-bold tracking-wide text-white shadow-[0_4px_10px_rgba(31,94,46,0.25)]">
                                    <svg viewBox="0 0 24 24" fill="white" className="h-[11px] w-[11px]">
                                        <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9" />
                                    </svg>
                                    MOST POPULAR
                                </span>
                            )}

                            <h3 className="mt-1.5 text-center font-[var(--font-display)] text-[19px] font-bold text-[#1c2a1f]">
                                {plan.name}
                            </h3>
                            <p className="mb-[18px] text-center text-sm text-[#5c6b5f]">{plan.meals}</p>

                            <p className="text-center font-[var(--font-display)] text-[34px] font-bold text-[#1f5e2e]">
                                ₹{plan.price}
                            </p>
                            <p className="mb-[18px] text-center text-[13px] text-[#8a978c]">
                                (₹{plan.perMeal} per meal)
                            </p>

                            <hr className="mb-[18px] border-[#e3e9e1]" />

                            <ul className="mb-6 flex flex-grow flex-col gap-[13px]">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2.5 text-[14.5px] text-[#1c2a1f]">
                                        <CheckIcon />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                type="button"
                                className="w-full rounded-[14px] bg-[#1f5e2e] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#2d7a3e] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f5e2e]"
                            >
                                Subscribe Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Banner */}
            <section className="mx-auto mt-7 max-w-6xl px-4 sm:px-5">
                <div className="flex flex-col overflow-hidden rounded-[20px] bg-[#eaf3e8] sm:flex-row sm:items-center">
                    <div className="min-w-0 flex-1 p-6 sm:p-7">
                        <div className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1f5e2e]">
                            <svg viewBox="0 0 24 24" fill="white" className="h-[18px] w-[18px]">
                                <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9" />
                            </svg>
                        </div>
                        <h3 className="mb-2.5 font-[var(--font-display)] text-lg font-bold leading-snug text-[#1c2a1f] sm:text-xl">
                            Save More with Monthly Plans!
                        </h3>
                        <p className="max-w-[320px] text-sm leading-relaxed text-[#5c6b5f]">
                            Healthy meals, great savings. Stay consistent with your fitness goals.
                        </p>
                    </div>
                    <div className="h-[170px] w-full flex-shrink-0 sm:h-auto sm:w-[280px] sm:self-stretch">
                        <SaladBowlIllustration className="h-full w-full" />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-4 py-10 text-center sm:px-5 md:grid-cols-3 md:gap-[30px] md:py-12">
                {FEATURES.map((feature) => (
                    <div key={feature.title}>
                        <div className="mx-auto mb-3.5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#eaf3e8] text-[#1f5e2e]">
                            {feature.icon}
                        </div>
                        <h4 className="mb-1.5 font-[var(--font-display)] text-base font-semibold text-[#1c2a1f]">
                            {feature.title}
                        </h4>
                        <p className="text-[13.5px] leading-relaxed text-[#5c6b5f]">{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* Info note */}
            <p className="mx-auto flex max-w-6xl items-center justify-center gap-1.5 px-6 pb-8 text-center text-[12.5px] text-[#5c6b5f] sm:text-[13.5px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 flex-shrink-0 text-[#3f9450]">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                You can cancel or change your plan anytime.
            </p>
        </div>
    );
}