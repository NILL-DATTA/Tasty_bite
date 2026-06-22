"use client";

export default function SplashLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      <img
        src="/images/bitenest.png"
        alt="Tasty Bite"
        className="w-48 mb-6 animate-pulse"
      />

      <div className="w-52 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-green-600 animate-loader"></div>
      </div>

      <p className="mt-4 text-gray-500">
        Loading Healthy Food...
      </p>
    </div>
  );
}