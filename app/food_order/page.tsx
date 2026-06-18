// app/my-orders/page.tsx

"use client";

import { useState } from "react";
import {
    ChevronRight,
    RefreshCcw,
    Truck,
    CheckCircle2,
    XCircle,
    ChefHat,
} from "lucide-react";

type OrderStatus = "ongoing" | "delivered" | "cancelled";

interface Order {
    id: string;
    image: string;
    status: OrderStatus;
    amount: number;
    payment: string;
    date: string;
    delivery: string;
}

const orders: Order[] = [
    {
        id: "TB27856234",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        status: "ongoing",
        amount: 278,
        payment: "UPI (Google Pay)",
        date: "25 May 2025, 09:41 AM",
        delivery: "25 May 2025, 10:15 AM",
    },
    {
        id: "TB27845011",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
        status: "delivered",
        amount: 349,
        payment: "Credit / Debit Card",
        date: "23 May 2025, 07:30 PM",
        delivery: "23 May 2025, 08:05 PM",
    },
    {
        id: "TB27822090",
        image:
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        status: "cancelled",
        amount: 198,
        payment: "UPI (PhonePe)",
        date: "21 May 2025, 01:15 PM",
        delivery: "21 May 2025, 01:45 PM",
    },
];

const tabs: { key: "all" | OrderStatus; label: string }[] = [
    { key: "all", label: "All orders" },
    { key: "ongoing", label: "Ongoing" },
    { key: "delivered", label: "Delivered" },
    { key: "cancelled", label: "Cancelled" },
];

export default function MyOrdersPage() {
    const [activeTab, setActiveTab] = useState<"all" | OrderStatus>("all");

    const filteredOrders =
        activeTab === "all"
            ? orders
            : orders.filter((o) => o.status === activeTab);

    const counts = {
        total: orders.length,
        ongoing: orders.filter((o) => o.status === "ongoing").length,
        delivered: orders.filter((o) => o.status === "delivered").length,
    };

    return (
        <div className="min-h-screen bg-[#FFF8EE] relative">
            {/* Ambient texture */}
            <div
                className="pointer-events-none fixed inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, #2B1B12 1px, transparent 0)",
                    backgroundSize: "22px 22px",
                }}
            />



            <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-10">
                {/* Page intro */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                    <div>
                        <span
                            className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#3F7D52] font-semibold mb-2"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                            Your kitchen tab
                        </span>
                        <h2
                            className="text-[2.2rem] leading-[1.1] font-semibold text-[#2B1B12]"
                            style={{ fontFamily: "'Fraunces', serif" }}
                        >
                            Every order, on one ticket rail.
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-3 shrink-0">
                        <StatPill label="Total" value={counts.total} />
                        <StatPill label="Ongoing" value={counts.ongoing} accent />
                        <StatPill label="Delivered" value={counts.delivered} />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-1 mb-9 border-b border-[#2B1B12]/10">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`relative px-4 py-3 text-[14px] font-semibold whitespace-nowrap transition-colors ${isActive
                                    ? "text-[#E8542E]"
                                    : "text-[#6B5C4D] hover:text-[#2B1B12]"
                                    }`}
                            >
                                {tab.label}
                                {isActive && (
                                    <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#E8542E] rounded-full" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Orders */}
                {filteredOrders.length === 0 ? (
                    <EmptyState />
                ) : (
                    <div className="space-y-5">
                        {filteredOrders.map((order) => (
                            <OrderTicket key={order.id} order={order} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function StatPill({
    label,
    value,
    accent,
}: {
    label: string;
    value: number;
    accent?: boolean;
}) {
    return (
        <div className="bg-white rounded-2xl px-4 py-3 border border-[#2B1B12]/10 min-w-[88px]">
            <p className="text-[11px] text-[#6B5C4D] uppercase tracking-wide">
                {label}
            </p>
            <p
                className={`text-2xl font-semibold mt-0.5 ${accent ? "text-[#E8542E]" : "text-[#2B1B12]"
                    }`}
                style={{ fontFamily: "'Fraunces', serif" }}
            >
                {value}
            </p>
        </div>
    );
}

const statusConfig: Record<
    OrderStatus,
    {
        label: string;
        badgeText: string;
        badgeBorder: string;
        icon: React.ReactNode;
        lineLabel: string;
    }
> = {
    ongoing: {
        label: "Ongoing",
        badgeText: "text-[#3F7D52]",
        badgeBorder: "border-[#3F7D52]",
        icon: <Truck size={16} />,
        lineLabel: "Arriving by",
    },
    delivered: {
        label: "Delivered",
        badgeText: "text-[#6B5C4D]",
        badgeBorder: "border-[#6B5C4D]",
        icon: <CheckCircle2 size={16} />,
        lineLabel: "Delivered on",
    },
    cancelled: {
        label: "Cancelled",
        badgeText: "text-[#C0392B]",
        badgeBorder: "border-[#C0392B]",
        icon: <XCircle size={16} />,
        lineLabel: "Cancelled on",
    },
};

function OrderTicket({ order }: { order: Order }) {
    const config = statusConfig[order.status];

    return (
        <div
            className="bg-white -rotate-[0.3deg]"
            style={{ boxShadow: "0 14px 32px -14px rgba(43,27,18,0.16)" }}
        >
            {/* Perforated tear edge */}
            <svg
                viewBox="0 0 800 14"
                preserveAspectRatio="none"
                className="w-full h-3.5 block"
            >
                <path
                    d="M0,14 L0,7 Q10,0 20,7 Q30,14 40,7 Q50,0 60,7 Q70,14 80,7 Q90,0 100,7 Q110,14 120,7 Q130,0 140,7 Q150,14 160,7 Q170,0 180,7 Q190,14 200,7 Q210,0 220,7 Q230,14 240,7 Q250,0 260,7 Q270,14 280,7 Q290,0 300,7 Q310,14 320,7 Q330,0 340,7 Q350,14 360,7 Q370,0 380,7 Q390,14 400,7 Q410,0 420,7 Q430,14 440,7 Q450,0 460,7 Q470,14 480,7 Q490,0 500,7 Q510,14 520,7 Q530,0 540,7 Q550,14 560,7 Q570,0 580,7 Q590,14 600,7 Q610,0 620,7 Q630,14 640,7 Q650,0 660,7 Q670,14 680,7 Q690,0 700,7 Q710,14 720,7 Q730,0 740,7 Q750,14 760,7 Q770,0 780,7 Q790,14 800,7 L800,14 Z"
                    fill="#FFF8EE"
                />
            </svg>

            <div className="p-5 md:p-6 pt-1">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: details */}
                    <div className="flex gap-4 flex-1">
                        <img
                            src={order.image}
                            alt=""
                            className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shrink-0 grayscale-[15%]"
                        />

                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                                <div>
                                    <p
                                        className="text-[10px] tracking-[0.16em] uppercase text-[#6B5C4D]"
                                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                    >
                                        Ticket no.
                                    </p>
                                    <h3
                                        className="text-lg font-semibold text-[#2B1B12] mt-0.5"
                                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                    >
                                        #{order.id}
                                    </h3>
                                    <p className="text-[13px] text-[#6B5C4D] mt-1">
                                        {order.date}
                                    </p>
                                </div>

                                <span
                                    className={`h-fit shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border-2 font-bold text-[11px] uppercase tracking-wider ${config.badgeBorder} ${config.badgeText}`}
                                >
                                    {config.icon}
                                    {config.label}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-5 pt-4 border-t border-dashed border-[#2B1B12]/15">
                                <div>
                                    <p className="text-[12px] text-[#6B5C4D]">Total</p>
                                    <p
                                        className="text-xl font-bold text-[#E8542E] mt-0.5"
                                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                    >
                                        ₹{order.amount}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[12px] text-[#6B5C4D]">Paid via</p>
                                    <p className="font-medium text-[#2B1B12] mt-0.5 text-[14px]">
                                        {order.payment}
                                    </p>
                                </div>
                            </div>

                            <div
                                className={`mt-4 flex items-center gap-2 text-[13.5px] ${order.status === "cancelled"
                                    ? "text-[#C0392B]"
                                    : "text-[#3F7D52]"
                                    }`}
                            >
                                {config.icon}
                                <span>
                                    {config.lineLabel}: {order.delivery}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: actions */}
                    {/* Actions */}
                    <div className="w-full mt-5 pt-4 border-t border-dashed border-[#2B1B12]/15">
                        <div className="flex flex-wrap gap-3">

                            {order.status === "ongoing" && (
                                <button className="px-6 h-11 rounded-full border border-green-700 text-green-700 font-semibold text-[14px] hover:bg-green-50 transition">
                                    Track Order
                                </button>
                            )}

                            {order.status === "delivered" && (
                                <button className="px-6 h-11 rounded-full border border-[#2B1B12]/15 text-[#2B1B12] font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#2B1B12]/[0.03] transition">
                                    <RefreshCcw size={15} />
                                    Reorder
                                </button>
                            )}

                            {order.status === "cancelled" && (
                                <button className="px-6 h-11 rounded-full border border-[#2B1B12]/15 text-[#2B1B12] font-semibold text-[14px] hover:bg-[#2B1B12]/[0.03] transition">
                                    Order Again
                                </button>
                            )}

                            <button className="px-6 h-11 rounded-full bg-[#2B1B12] text-white font-semibold text-[14px] flex items-center justify-center gap-2 hover:bg-[#1f140d] transition">
                                View Details
                                <ChevronRight size={15} />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

function EmptyState() {
    return (
        <div className="bg-white rounded-2xl border border-dashed border-[#2B1B12]/20 py-16 px-6 text-center">
            <p
                className="text-lg font-semibold text-[#2B1B12]"
                style={{ fontFamily: "'Fraunces', serif" }}
            >
                No tickets here yet.
            </p>
            <p className="text-[14px] text-[#6B5C4D] mt-1.5">
                Orders in this category will show up once they&apos;re placed.
            </p>
        </div>
    );
}
