// app/about/page.tsx

import { ChefHat, Flame, Clock, Leaf, HeartHandshake } from "lucide-react";

export default function AboutPage() {
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



            {/* Hero */}
            <section className="relative z-10 max-w-5xl mx-auto px-5 pt-16 pb-14 md:pt-24 md:pb-20">
                <div className="max-w-2xl">
                    <span
                        className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#2F6B41] font-semibold mb-4"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        About TastyBite
                    </span>
                    <h2
                        className="text-[2.6rem] md:text-[3.4rem] leading-[1.05] font-semibold text-[#1B2A1C]"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        We run the kitchen
                        <br />
                        so dinner shows up.
                    </h2>
                    <p className="text-[#5C6B54] mt-6 text-[16px] md:text-[17px] leading-relaxed max-w-lg">
                        TastyBite started with one promise: the food that leaves the
                        kitchen should taste exactly as good when it reaches your
                        door. Everything we build, from routes to riders, answers to
                        that one line.
                    </p>
                </div>
            </section>

            {/* Brand story — editorial block with stamp */}
            <section className="relative z-10 max-w-5xl mx-auto px-5 pb-20">
                <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                    <div className="bg-white -rotate-[0.3deg] p-8 md:p-10" style={{ boxShadow: "0 18px 40px -16px rgba(27,42,28,0.16)" }}>
                        <svg viewBox="0 0 600 14" preserveAspectRatio="none" className="w-full h-3.5 block -mt-8 md:-mt-10 mb-6">
                            <path
                                d="M0,14 L0,7 Q10,0 20,7 Q30,14 40,7 Q50,0 60,7 Q70,14 80,7 Q90,0 100,7 Q110,14 120,7 Q130,0 140,7 Q150,14 160,7 Q170,0 180,7 Q190,14 200,7 Q210,0 220,7 Q230,14 240,7 Q250,0 260,7 Q270,14 280,7 Q290,0 300,7 Q310,14 320,7 Q330,0 340,7 Q350,14 360,7 Q370,0 380,7 Q390,14 400,7 Q410,0 420,7 Q430,14 440,7 Q450,0 460,7 Q470,14 480,7 Q490,0 500,7 Q510,14 520,7 Q530,0 540,7 Q550,14 560,7 Q570,0 580,7 Q590,14 600,7 L600,14 Z"
                                fill="#F3F6EE"
                            />
                        </svg>
                        <p
                            className="text-[10px] tracking-[0.16em] uppercase text-[#5C6B54] mb-3"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                            The story so far
                        </p>
                        <h3
                            className="text-2xl font-semibold text-[#1B2A1C] mb-4"
                            style={{ fontFamily: "'Fraunces', serif" }}
                        >
                            Built by people who hated cold curry.
                        </h3>
                        <div className="space-y-4 text-[15px] text-[#3C4A38] leading-relaxed">
                            <p>
                                We started in a single neighbourhood in 2019, running orders
                                ourselves on two scooters because the delivery apps we tried
                                kept getting the basics wrong — slow pickups, soggy
                                packaging, no one to call when something went sideways.
                            </p>
                            <p>
                                So we rebuilt it from the kitchen out: tighter pickup
                                windows, packaging that survives a scooter ride, and a
                                support line answered by people who&apos;ve actually worked
                                a dinner rush. That&apos;s still the whole job today, just
                                across a lot more kitchens.
                            </p>
                        </div>
                    </div>

                    {/* Stamp */}
                    <div className="hidden md:flex flex-col items-center justify-center pt-4">
                        <div className="w-32 h-32 rounded-full border-2 border-[#2F6B41] flex flex-col items-center justify-center text-center rotate-[8deg]">
                            <span
                                className="text-[10px] tracking-[0.14em] uppercase text-[#2F6B41] font-bold"
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                                Est.
                            </span>
                            <span
                                className="text-2xl font-bold text-[#2F6B41]"
                                style={{ fontFamily: "'Fraunces', serif" }}
                            >
                                2019
                            </span>
                            <span
                                className="text-[9px] tracking-[0.12em] uppercase text-[#2F6B41] font-bold mt-0.5"
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                            >
                                Kitchen-run
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values — "the menu" of principles */}
            <section className="relative z-10 max-w-5xl mx-auto px-5 pb-24">
                <div className="text-center mb-12">
                    <span
                        className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#2F6B41] font-semibold mb-3"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        What we won&apos;t compromise on
                    </span>
                    <h3
                        className="text-3xl md:text-4xl font-semibold text-[#1B2A1C]"
                        style={{ fontFamily: "'Fraunces', serif" }}
                    >
                        The house menu, served to every order.
                    </h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                    <ValueCard
                        icon={<Flame size={20} />}
                        title="Hot, not lukewarm"
                        description="Insulated bags and routes built around pickup time, not just distance, so the first bite tastes like the kitchen meant it to."
                    />
                    <ValueCard
                        icon={<Clock size={20} />}
                        title="Honest timing"
                        description="If we say 30 minutes, we mean it. No quiet padding on the estimate to make the app look good."
                    />
                    <ValueCard
                        icon={<Leaf size={20} />}
                        title="Kitchens we'd eat at"
                        description="Every partner restaurant gets a kitchen visit before they go live. We don't list places we wouldn't order from ourselves."
                    />
                    <ValueCard
                        icon={<HeartHandshake size={20} />}
                        title="A human on the other end"
                        description="No ticket queues that go nowhere. Support is answered by people who can actually fix what went wrong."
                    />
                </div>
            </section>

            {/* CTA strip */}
            <section className="relative z-10 border-t border-[#1B2A1C]/10">
                <div className="max-w-5xl mx-auto px-5 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h4
                            className="text-2xl font-semibold text-[#1B2A1C]"
                            style={{ fontFamily: "'Fraunces', serif" }}
                        >
                            Hungry already?
                        </h4>
                        <p className="text-[#5C6B54] mt-1 text-[15px]">
                            Your neighbourhood kitchens are a tap away.
                        </p>
                    </div>
                    <button className="h-12 px-7 rounded-full bg-[#2F6B41] text-white font-semibold text-[15px] transition-transform active:scale-[0.98] shrink-0">
                        Browse restaurants
                    </button>
                </div>
            </section>
        </div>
    );
}

function ValueCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white rounded-2xl border border-[#1B2A1C]/10 p-6 flex gap-4">
            <div className="w-11 h-11 rounded-full bg-[#2F6B41]/10 flex items-center justify-center text-[#2F6B41] shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-[#1B2A1C] text-[16px]">{title}</h4>
                <p className="text-[14px] text-[#5C6B54] mt-1.5 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}