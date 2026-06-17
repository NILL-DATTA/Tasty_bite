import { Dumbbell, Leaf, CookingPot, Truck, Heart, Plus } from "lucide-react";

const meals = [
  {
    id: 1,
    name: "Chicken Protein Bowl",
    protein: "40g Protein",
    calories: "520 Kcal",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500",
  },
  {
    id: 2,
    name: "Paneer Protein Bowl",
    protein: "28g Protein",
    calories: "470 Kcal",
    price: "₹139",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
  {
    id: 3,
    name: "Egg Protein Bowl",
    protein: "30g Protein",
    calories: "450 Kcal",
    price: "₹129",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
  },
  {
    id: 4,
    name: "Veg Protein Bowl",
    protein: "30g Protein",
    calories: "430 Kcal",
    price: "₹119",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
  },
];

const features = [
  {
    icon: Dumbbell,
    title: "High Protein",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
  },
  {
    icon: CookingPot,
    title: "Home Style Cooked",
  },
  {
    icon: Truck,
    title: "Free Delivery",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f8faf8] min-h-screen">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
              Healthy Meal Delivery
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight text-green-900">
              Healthy Protein Meals Delivered In Barasat
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              30g+ Protein Per Meal. Fresh Ingredients. Home Style Cooked Food
              Delivered Daily To Your Doorstep.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition">
                Order Now
              </button>

              <button className="px-8 py-4 rounded-xl border-2 border-green-700 text-green-700 font-semibold hover:bg-green-50 transition">
                Subscription Plan
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-200 blur-3xl opacity-30 rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
              alt="Protein Bowl"
              className="relative z-10 w-full max-w-2xl mx-auto rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center">
                    <Icon size={28} className="text-green-700" />
                  </div>

                  <h3 className="mt-4 font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR MEALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">Popular Meals</h2>

          <button className="text-green-700 font-semibold">View All</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-56 object-cover"
                />

                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                  <Heart size={18} className="text-green-700" />
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-black text-lg">{meal.name}</h3>

                <p className="text-gray-500 text-sm mt-2">
                  {meal.protein} | {meal.calories}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-2xl font-bold text-green-700">
                    {meal.price}
                  </span>

                  <button className="w-11 h-11 rounded-full bg-green-700 flex items-center justify-center text-white hover:bg-green-800">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#f7fbf7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
            <div className="grid lg:grid-cols-2 items-center">
              {/* Left Content */}
              <div className="p-10 lg:p-16">
                <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  ✓ Best Value Plan
                </div>

                <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Subscribe & Save
                  <br />
                  Up To 20% Every Month
                </h2>

                <p className="mt-5 text-lg text-gray-600 max-w-lg">
                  Get healthy meals delivered daily and save more with our
                  flexible subscription plans.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-green-700 text-white rounded-xl font-semibold hover:bg-green-800 transition">
                    Explore Plans
                  </button>

                  <button className="px-8 py-4 border border-green-700 text-green-700 rounded-xl font-semibold hover:bg-green-50 transition">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative flex justify-center p-8">
                <img
                  src="/images/subs.png"
                  alt="Subscription Meal"
                  className="h-60 md:h-62 w-auto object-contain"
                />

                <div className="absolute top-10 right-10 bg-white rounded-full w-36 h-36 flex flex-col items-center justify-center shadow-xl">
                  <span className="text-sm font-semibold text-gray-500">
                    UP TO
                  </span>

                  <span className="text-5xl font-bold text-green-700">20%</span>

                  <span className="text-sm font-semibold text-gray-500">
                    OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold">SIMPLE PROCESS</span>

            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
              How It Works
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Get healthy meals delivered to your doorstep in just a few simple
              steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-green-50 rounded-3xl p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
                1
              </div>

              <h3 className="mt-6 text-2xl  text-black font-bold">
                Choose Your Meal
              </h3>

              <p className="mt-3 text-gray-600">
                Browse our protein-packed menu and select your favorite meals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 rounded-3xl p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
                2
              </div>

              <h3 className="mt-6 text-2xl text-black font-bold">
                Place Your Order
              </h3>

              <p className="mt-3 text-gray-600">
                Order once or subscribe to weekly and monthly meal plans.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-green-50 rounded-3xl p-8 text-center hover:shadow-lg transition">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-700 text-white flex items-center justify-center text-3xl font-bold">
                3
              </div>

              <h3 className="mt-6 text-2xl text-black font-bold">
                Enjoy Healthy Food
              </h3>

              <p className="mt-3 text-gray-600">
                Fresh meals delivered to your doorstep every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8faf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="text-green-700 font-semibold">TESTIMONIALS</span>

            <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Thousands of customers trust us for their daily healthy meal
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>

              <p className="mt-4 text-gray-600">
                The food quality is amazing. I have been ordering for the last 3
                months and every meal is fresh and delicious.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt="Customer"
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-bold text-black">Rahul Sharma</h4>

                  <p className="text-sm text-gray-500">Fitness Enthusiast</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>

              <p className="mt-4 text-gray-600">
                Perfect solution for busy professionals. The subscription plan
                saves me both time and money.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Customer"
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-bold text-black">Priya Verma</h4>

                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>

              <p className="mt-4 text-gray-600">
                High protein meals with great taste. Delivery is always on time
                and packaging is excellent.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/100?img=8"
                  alt="Customer"
                  className="w-14 h-14 rounded-full"
                />

                <div>
                  <h4 className="font-bold text-black">Arjun Singh</h4>

                  <p className="text-sm text-gray-500">Gym Trainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
