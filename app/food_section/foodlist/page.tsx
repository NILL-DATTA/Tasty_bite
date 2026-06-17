"use client";

import { Search, SlidersHorizontal } from "lucide-react";

const meals = [
    {
        id: 1,
        name: "Chicken Protein Bowl",
        protein: "40g Protein",
        calories: "520 Kcal",
        price: "₹149",
        image: "/images/chicken.webp",
    },
    {
        id: 2,
        name: "Egg Protein Bowl",
        protein: "30g Protein",
        calories: "450 Kcal",
        price: "₹129",
        image: "/images/egg.jpeg",
    },
    {
        id: 3,
        name: "Paneer Protein Bowl",
        protein: "28g Protein",
        calories: "470 Kcal",
        price: "₹139",
        image: "/images/panner.jpeg",
    },
    {
        id: 4,
        name: "Razma Protein Bowl",
        protein: "26g Protein",
        calories: "420 Kcal",
        price: "₹119",
        image: "/images/razma.jpeg",
    },
];

const categories = [
    "All",
    "Veg",
    "Non-Veg",
    "High Protein",
    "Weight Loss",
];

export default function MealsPage() {
    return (
        <section className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">

                {/* Search */}
                <div className="flex gap-4 mb-8">
                    <div className="flex-1 relative">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                            size={22}
                        />

                        <input
                            type="text"
                            placeholder="Search your food..."
                            className="w-full h-14 pl-12 pr-4  placeholder-black text-black rounded-xl border bg-white outline-none"
                        />
                    </div>

                    <button className="h-14 w-14 bg-white rounded-xl border flex items-center justify-center">
                        <SlidersHorizontal />
                    </button>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-8">

                    {/* Sidebar */}
                    <aside className="bg-white rounded-2xl p-6 h-fit shadow-sm">
                        <h3 className="font-bold  text-black text-xl mb-5">
                            Categories
                        </h3>

                        <div className="space-y-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`w-full text-left px-4 py-3 text-black rounded-xl transition ${cat === "All"
                                        ? "bg-green-700 text-white"
                                        : "bg-gray-100 hover:bg-green-50"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Products */}
                    <div className="space-y-5">
                        {meals.map((meal) => (
                            <div
                                key={meal.id}
                                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6">

                                    <img
                                        src={meal.image}
                                        alt={meal.name}
                                        className="w-full md:w-60 h-40 object-cover rounded-xl"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-2xl text-black font-bold">
                                            {meal.name}
                                        </h3>

                                        <p className="text-gray-500 mt-2">
                                            {meal.protein} | {meal.calories}
                                        </p>

                                        <p className="text-3xl font-bold text-green-700 mt-4">
                                            {meal.price}
                                        </p>
                                    </div>

                                    <button className="px-8 py-3 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800">
                                        Order Now
                                    </button>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-3 mt-12">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`w-12 h-12 text-black rounded-full ${page === 1
                                ? "bg-green-700 text-white"
                                : "bg-white border"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}