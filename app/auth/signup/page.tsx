"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Phone,
    User,
    MessageCircle,
    Loader2,
} from "lucide-react";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();


        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            console.log({
                fullName,
                phone,
                email,
                password,
                remember,
            });

            setIsLoading(false);
        }, 1500);


    };

    return (<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center px-4 py-10">
        {/* Background Blur Effects */} <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30" /> <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300 rounded-full blur-3xl opacity-20" />


        {/* Main Container */}
        <div className="relative z-10 w-full max-w-lg">
            <div className="backdrop-blur-xl bg-white/80 border border-white/50 shadow-2xl rounded-3xl p-8 md:p-10">
                {/* Logo */}
                <div className="flex justify-center">
                    <img
                        src="/images/bitenest.png"
                        alt="Logo"
                        className="h-16 md:h-20 w-auto object-contain"
                    />
                </div>

                {/* Header */}
                <div className="text-center mt-6 mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-900">
                        Welcome Back
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Login to access your account
                    </p>
                </div>
                {/* Form */}
                <form
                    onSubmit={handleRegister}
                    className="space-y-5"
                >
                    {/* Full Name */}
                    <div className="relative">
                        <User
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                        />

                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }
                            required
                            className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              border
              border-gray-200
              bg-gray-50
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
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                        <Phone
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) =>
                                setPhone(e.target.value)
                            }
                            required
                            className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              border
              border-gray-200
              bg-gray-50
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
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <Mail
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              border
              border-gray-200
              bg-gray-50
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
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <Lock
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            className="
              w-full
              pl-12
              pr-12
              py-4
              rounded-xl
              border
              border-gray-200
              bg-gray-50
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
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-700"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <Lock
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700"
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                            required
                            className="
              w-full
              pl-12
              pr-4
              py-4
              rounded-xl
              border
              border-gray-200
              bg-gray-50
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
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={remember}
                                onChange={(e) =>
                                    setRemember(
                                        e.target.checked
                                    )
                                }
                                className="accent-green-700"
                            />

                            <span className="text-gray-600 text-sm">
                                I agree to Terms &
                                Conditions
                            </span>
                        </label>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="
            w-full
            py-4
            rounded-xl
            font-semibold
            text-white
            bg-gradient-to-r
            from-green-600
            to-green-700
            hover:from-green-700
            hover:to-green-800
            shadow-lg
            hover:shadow-xl
            transition-all
            disabled:opacity-60
            flex
            items-center
            justify-center
            gap-2
          "
                    >
                        {isLoading ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="animate-spin"
                                />
                                Creating Account...
                            </>
                        ) : (
                            "Register"
                        )}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="text-sm text-gray-400">
                        OR
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* WhatsApp Login */}
                <button
                    className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-4
          rounded-xl
          border-2
          border-gray-200
          bg-white
          hover:border-green-500
          hover:bg-green-50
          transition-all
          font-semibold
          text-gray-800
        "
                >
                    <MessageCircle
                        size={22}
                        className="text-green-600"
                    />

                    Continue with WhatsApp
                </button>

                {/* Login Link */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/auth/signin"
                            className="font-bold text-green-700 hover:text-green-900"
                        >
                            Login
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 gap-2 text-center text-xs text-gray-500">
                        <p>✓ Secure Registration</p>
                        <p>✓ Fast Account Creation</p>
                        <p>✓ Protected User Data</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
}
