"use client"; // This must be a client component to use hooks like useState and useEffect.

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useHotelStore } from "@/lib/zustandStore";
import axios from "axios";

// --- Font Setup for "Tranquil Luxury" Theme ---
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Note: `metadata` export is not used in client components.
// You might need to move this to a parent server component or a `head.tsx` file
// if you need to keep it dynamic. For this example, we'll leave it commented out
// as the focus is on client-side data fetching.
/*
export const metadata: Metadata = {
  title: "Mountain Vista Retreat",
  description: "Experience Tranquility in the Heart of the Mountains",
};
*/

/**
 * A simple, full-page loading component to display while initial data is fetched.
 */
const AppLoader = () => (
  <div className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-brand-cream">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-brand-primary border-t-transparent"></div>
    <p className="mt-4 font-serif text-lg text-brand-text">Loading Retreat Details...</p>
  </div>
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State to manage the loading status of the initial data fetch.
  const [isLoading, setIsLoading] = useState(true);
  // Get the action to set hotel data from our Zustand store.
  const setHotelData = useHotelStore((state) => state.setHotelData);

  useEffect(() => {
    /**
     * Fetches hotel data from the API and populates the Zustand store.
     */
    const fetchAndSetHotelData = async () => {
      try {
        // Fetch data from your local API endpoint.
        const response = await axios.get("http://192.168.1.8:8000/api/v1/hotel/");
        if (response.status != 200) {
          // Handle HTTP errors like 404 or 500.
          throw new Error(`Failed to fetch hotel data: ${response.statusText}`);
        }
        const data = await response.data;

        setHotelData(data);

      } catch (error: any) {
        // Log any errors to the console for debugging.
        console.error("Error fetching hotel data:", error);
      } finally {
        // Once the fetch is complete (either success or failure), hide the loader.
        setIsLoading(false);
      }
    };

    fetchAndSetHotelData();
  }, [setHotelData]); // The effect depends on the `setHotelData` action.

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-brand-cream font-sans text-brand-text antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {isLoading ? (
          <AppLoader />
        ) : (
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        )}
        <Toaster />
      </body>
    </html>
  );
}
