"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";


const HIDDEN_ROUTES = ["/auth/signin", "/auth/signup"];

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideHeaderFooter = HIDDEN_ROUTES.includes(pathname);

    return (
        <>
            {!hideHeaderFooter && <Navbar />}
            <main>{children}</main>
            {!hideHeaderFooter && <Footer />}
        </>
    );
}