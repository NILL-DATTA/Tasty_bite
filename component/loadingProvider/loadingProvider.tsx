"use client";

import { useEffect, useState } from "react";
import SplashLoader from "../loader/loader";


export default function LoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashLoader />;
  }

  return <>{children}</>;
}