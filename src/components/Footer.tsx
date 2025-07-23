import Link from "next/link";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram } from "lucide-react";
import { useHotelStore } from "@/lib/zustandStore";

export default function Footer() {
  const { name, header_name, address, phone_number } = useHotelStore();
  return (
    // Base footer styles using the "Tranquil Luxury" color palette.
    <footer className="bg-brand-green text-brand-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and Brand Statement */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-serif font-bold text-3xl">{header_name}</span>
            </Link>
            <p className="text-sm text-brand-cream/80">
              Your serene getaway in the heart of nature.
            </p>
          </div>

          {/* Quick Links Navigation */}
          <div>
            <h4 className="font-sans font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-cream/80">
              <li><Link href="/rooms" className="hover:text-brand-cream transition-colors">Rooms</Link></li>
              <li><Link href="/amenities" className="hover:text-brand-cream transition-colors">Amenities</Link></li>
              <li><Link href="/about" className="hover:text-brand-cream transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-brand-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-sans font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-brand-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mountainvista.com" className="hover:text-brand-cream transition-colors">info@email.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a href="tel:+919799066662" className="hover:text-brand-cream transition-colors">{phone_number}</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="font-sans font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-brand-cream/80 hover:text-brand-cream transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-brand-cream/20 mt-8 pt-6 text-center text-sm text-brand-cream/70">
          <p>&copy; {new Date().getFullYear()} {name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
