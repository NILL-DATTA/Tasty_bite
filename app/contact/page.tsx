// app/contact/page.tsx

"use client";

import { useState } from "react";
import {
    ChefHat,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle,
} from "lucide-react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-[#F3F6EE] relative">
            {/* Ambient texture */}
            <div
                className="pointer-events-none fixed inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #1B2A1C 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                }}
            />

            {/* Header */}
            <header className="relative z-10 border-b border-[#1B2A1C]/10">
                <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
                    <h1
                        className="text-2xl font-semibold tracking-tight text-[#1B2A1C]"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        TastyBite
                    </h1>
                    <ChefHat size={22} className="text-[#2F6B41]" />
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 max-w-5xl mx-auto px-5 pt-16 pb-12 md:pt-20 md:pb-16">
                <div className="max-w-2xl">
                    <span
                        className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#2F6B41] font-semibold mb-4"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        Get in touch
                    </span>
                    <h2
                        className="text-[2.4rem] md:text-[3rem] leading-[1.08] font-semibold text-[#1B2A1C]"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        Something on your mind?
                        <br />
                        We&apos;re listening.
                    </h2>
                    <p className="text-[#5C6B54] mt-5 text-[16px] leading-relaxed max-w-lg">
                        Order trouble, partnership questions, or just feedback on
                        last night&apos;s biryani — drop us a line and a real person
                        will get back to you.
                    </p>
                </div>
            </section>

            {/* Main grid: contact form ticket + info */}
            <section className="relative z-10 max-w-5xl mx-auto px-5 pb-20">
                <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
                    {/* Form — ticket style */}
                    <div
                        className="bg-white -rotate-[0.3deg]"
                        style={{ boxShadow: "0 18px 40px -16px rgba(27,42,28,0.16)" }}
                    >
                        <svg
                            viewBox="0 0 600 14"
                            preserveAspectRatio="none"
                            className="w-full h-3.5 block"
                        >
                            <path
                                d="M0,14 L0,7 Q10,0 20,7 Q30,14 40,7 Q50,0 60,7 Q70,14 80,7 Q90,0 100,7 Q110,14 120,7 Q130,0 140,7 Q150,14 160,7 Q170,0 180,7 Q190,14 200,7 Q210,0 220,7 Q230,14 240,7 Q250,0 260,7 Q270,14 280,7 Q290,0 300,7 Q310,14 320,7 Q330,0 340,7 Q350,14 360,7 Q370,0 380,7 Q390,14 400,7 Q410,0 420,7 Q430,14 440,7 Q450,0 460,7 Q470,14 480,7 Q490,0 500,7 Q510,14 520,7 Q530,0 540,7 Q550,14 560,7 Q570,0 580,7 Q590,14 600,7 L600,14 Z"
                                fill="#F3F6EE"
                            />
                        </svg>

                        <div className="p-6 md:p-8 pt-2">
                            <div className="flex items-center justify-between pb-4 mb-5 border-b border-dashed border-[#1B2A1C]/20">
                                <p
                                    className="text-[10px] tracking-[0.16em] uppercase text-[#5C6B54]"
                                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                >
                                    Message ticket
                                </p>
                                <span className="border-2 border-[#2F6B41] text-[#2F6B41] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm -rotate-6">
                                    Open
                                </span>
                            </div>

                            {submitted ? (
                                <ConfirmationPanel onReset={() => setSubmitted(false)} />
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <Field label="Your name" htmlFor="name">
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            placeholder="Ananya Roy"
                                            className="w-full h-11 px-3 rounded-lg border border-[#1B2A1C]/15 bg-[#F3F6EE]/60 text-[#1B2A1C] text-[14px] placeholder:text-[#5C6B54]/60 focus:outline-none focus:border-[#2F6B41] transition-colors"
                                        />
                                    </Field>

                                    <Field label="Email" htmlFor="email">
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="w-full h-11 px-3 rounded-lg border border-[#1B2A1C]/15 bg-[#F3F6EE]/60 text-[#1B2A1C] text-[14px] placeholder:text-[#5C6B54]/60 focus:outline-none focus:border-[#2F6B41] transition-colors"
                                        />
                                    </Field>

                                    <Field label="What's this about?" htmlFor="topic">
                                        <select
                                            id="topic"
                                            defaultValue="order"
                                            className="w-full h-11 px-3 rounded-lg border border-[#1B2A1C]/15 bg-[#F3F6EE]/60 text-[#1B2A1C] text-[14px] focus:outline-none focus:border-[#2F6B41] transition-colors"
                                        >
                                            <option value="order">An order issue</option>
                                            <option value="partner">Restaurant partnership</option>
                                            <option value="feedback">General feedback</option>
                                            <option value="other">Something else</option>
                                        </select>
                                    </Field>

                                    <Field label="Message" htmlFor="message">
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            placeholder="Tell us what's going on..."
                                            className="w-full px-3 py-2.5 rounded-lg border border-[#1B2A1C]/15 bg-[#F3F6EE]/60 text-[#1B2A1C] text-[14px] placeholder:text-[#5C6B54]/60 focus:outline-none focus:border-[#2F6B41] transition-colors resize-none"
                                        />
                                    </Field>

                                    <button
                                        type="submit"
                                        className="w-full h-12 rounded-full bg-[#2F6B41] text-white font-semibold text-[15px] flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
                                    >
                                        Send message
                                        <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Info column */}
                    <div className="space-y-5">
                        <InfoCard
                            icon={<Phone size={19} />}
                            title="Call the support line"
                            lines={["+91 98765 43210", "Mon – Sun, 8am – 11pm"]}
                        />
                        <InfoCard
                            icon={<Mail size={19} />}
                            title="Email us"
                            lines={["help@tastybite.example", "Replies within a few hours"]}
                        />
                        <InfoCard
                            icon={<MapPin size={19} />}
                            title="Head kitchen office"
                            lines={["14 Park Circus Road", "Kolkata, West Bengal 700017"]}
                        />
                        <InfoCard
                            icon={<Clock size={19} />}
                            title="Fastest way to get help"
                            lines={["Use \u201cTrack order\u201d in My Orders", "for live order issues"]}
                        />

                        {/* Quick chat nudge */}
                        <div className="bg-[#2F6B41]/10 rounded-2xl p-5 flex gap-3 items-start">
                            <MessageCircle size={20} className="text-[#2F6B41] shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-[#1B2A1C] text-[14.5px]">
                                    Need it solved right now?
                                </h4>
                                <p className="text-[13px] text-[#5C6B54] mt-1 leading-relaxed">
                                    In-app chat support gets a reply fastest — open it from
                                    any order&apos;s details screen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Field({
    label,
    htmlFor,
    children,
}: {
    label: string;
    htmlFor: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label
                htmlFor={htmlFor}
                className="block text-[12.5px] font-medium text-[#1B2A1C] mb-1.5"
            >
                {label}
            </label>
            {children}
        </div>
    );
}

function InfoCard({
    icon,
    title,
    lines,
}: {
    icon: React.ReactNode;
    title: string;
    lines: string[];
}) {
    return (
        <div className="bg-white rounded-2xl border border-[#1B2A1C]/10 p-5 flex gap-4">
            <div className="w-11 h-11 rounded-full bg-[#2F6B41]/10 flex items-center justify-center text-[#2F6B41] shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-[#1B2A1C] text-[14.5px]">
                    {title}
                </h4>
                {lines.map((line, i) => (
                    <p key={i} className="text-[13px] text-[#5C6B54] mt-0.5">
                        {line}
                    </p>
                ))}
            </div>
        </div>
    );
}

function ConfirmationPanel({ onReset }: { onReset: () => void }) {
    return (
        <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#2F6B41]/10 flex items-center justify-center mx-auto mb-4">
                <Send size={22} className="text-[#2F6B41]" />
            </div>
            <h3
                className="text-xl font-semibold text-[#1B2A1C]"
                style={{ fontFamily: "'Fraunces', serif" }}
            >
                Ticket sent.
            </h3>
            <p className="text-[14px] text-[#5C6B54] mt-2 max-w-xs mx-auto leading-relaxed">
                We&apos;ve got your message. Expect a reply at the email you
                gave us, usually within a few hours.
            </p>
            <button
                onClick={onReset}
                className="mt-5 h-10 px-5 rounded-full border border-[#1B2A1C]/15 text-[#1B2A1C] font-semibold text-[13.5px] transition-colors hover:bg-[#1B2A1C]/[0.03]"
            >
                Send another message
            </button>
        </div>
    );
}