"use client";

import { useState, type CSSProperties } from "react";

/**
 * TastyBite — Checkout
 *
 * Drop this component into any Next.js (App Router or Pages Router) project
 * that has Tailwind CSS configured. All artwork is inline SVG — zero network
 * calls, renders instantly.
 *
 * Usage:
 *   import TastyBiteCheckout from "@/components/TastyBiteCheckout";
 *   export default function Page() { return <TastyBiteCheckout />; }
 */

interface OrderItem {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface PaymentLine {
  label: string;
  amount: number;
  variant?: "default" | "discount";
}

const ORDER_ITEM: OrderItem = {
  id: "chicken-protein-bowl",
  name: "Chicken Protein Bowl",
  price: 149,
  qty: 2,
};

const PAYMENT_LINES: PaymentLine[] = [
  { label: "Subtotal", amount: 298 },
  { label: "Delivery Charges", amount: 40 },
  { label: "Discount (WELCOME20)", amount: -60, variant: "discount" },
];

const TOTAL_AMOUNT = 278;




function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0">
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function formatRupees(amount: number): string {
  const sign = amount < 0 ? "-" : "";
  return `${sign}₹${Math.abs(amount)}`;
}

export default function TastyBiteCheckout() {
  const [fullName, setFullName] = useState("Rahul Das");
  const [phoneNumber, setPhoneNumber] = useState("9832045658");
  const [address, setAddress] = useState("Barasat, Kolkata, West Bengal - 700124");

  const subtotal = ORDER_ITEM.price * ORDER_ITEM.qty;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Checkout
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Complete your order securely
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            {/* Address */}
            <section className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">
                  Delivery Address
                </h2>

                <button className="text-orange-500 font-semibold">
                  Edit
                </button>
              </div>

              <div className="space-y-4">
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />

                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />

                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                />
              </div>
            </section>

            {/* Delivery Schedule */}
            <section className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-5">
                Delivery Schedule
              </h2>

              <div className="flex items-center gap-4 bg-orange-50 rounded-2xl p-4">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow">
                  <CalendarIcon />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Delivery Date
                  </p>

                  <p className="font-semibold text-green-700">
                    20 May 2024 (Monday)
                  </p>
                </div>
              </div>
            </section>

            {/* Payment Summary */}
            <section className="bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-5">
                Payment Summary
              </h2>

              <div className="space-y-4">
                {PAYMENT_LINES.map((line) => (
                  <div
                    key={line.label}
                    className="flex justify-between"
                  >
                    <span
                      className={
                        line.variant === "discount"
                          ? "text-green-600"
                          : "text-gray-600"
                      }
                    >
                      {line.label}
                    </span>

                    <span
                      className={
                        line.variant === "discount"
                          ? "font-semibold text-green-600"
                          : "font-medium"
                      }
                    >
                      {formatRupees(line.amount)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-4 flex justify-between items-center">
                <span className="font-bold">
                  Total Amount
                </span>

                <span className="text-xl font-bold text-green-700">
                  ₹{TOTAL_AMOUNT}
                </span>
              </div>
            </section>

            {/* Secure Payment */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-3">
              <ShieldCheckIcon />

              <p className="text-sm text-green-700">
                Safe and Secure Payments. Your
                details are always protected.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="sticky top-24">
              <section className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-700 to-green-700 p-5">
                  <h2 className="text-white text-lg font-semibold">
                    Order Summary
                  </h2>
                </div>

                <div className="p-5">
                  <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="h-24 w-24 rounded-2xl overflow-hidden shadow-md">
                      <img src="/images/chicken.webp" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold">
                        {ORDER_ITEM.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2">
                        Qty: {ORDER_ITEM.qty}
                      </p>

                      <div className="mt-3 font-bold text-green-700">
                        ₹{subtotal}
                      </div>
                    </div>
                  </div>

                  <button
                    className="
                  mt-6
                  w-full
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-700
                  to-green-700
                  text-white
                  font-bold
                  text-lg
                  shadow-lg
                  hover:shadow-xl
                  hover:scale-[1.02]
                  transition-all
                "
                  >
                    Continue to Payment • ₹{TOTAL_AMOUNT}
                  </button>
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}