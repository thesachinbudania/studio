"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";

// Assuming these components are in your project structure
// The Button component is from the 'tranquil_luxury_button' artifact.
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useHotelStore } from "@/lib/zustandStore";

// --- Data for Navigation ---
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/amenities", label: "Amenities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const HOTEL_NAME = "Bir Billing"
const PHONE_NUMBER = "98172 60852";

// --- Header Component styled with "Tranquil Luxury" theme ---
export default function Header() {
  const { header_name, phone_number } = useHotelStore();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-[#F9F5EB]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-4xl font-bold text-[#003E29]">{header_name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-[#00875A]",
                pathname === link.href ? "text-[#00875A]" : "text-[#4B4B4B]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact & Booking Button */}
        <div className="hidden lg:flex items-center gap-6">
          <a href={`tel:${phone_number}`} className="flex items-center gap-2 text-lg font-semibold text-[#4B4B4B]">
            <Phone className="h-5 w-5" />
            <span>{phone_number}</span>
          </a>
          <Button asChild size="default" variant="solid">
            <Link href="/contact">BOOK NOW</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="border-[#00875A]">
                <Menu className="h-5 w-5 text-[#00875A]" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#F9F5EB] p-6">
              <div className="grid gap-8">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-serif text-3xl font-bold text-[#003E29]">LOGO</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-semibold transition-colors hover:text-[#00875A]",
                        pathname === link.href ? "text-[#00875A]" : "text-[#4B4B4B]"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <a href="tel:+919799066662" className="flex items-center gap-2 text-lg font-semibold text-[#4B4B4B]">
                  <Phone className="h-5 w-5" />
                  <span>+91 97990 66662</span>
                </a>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Book Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
