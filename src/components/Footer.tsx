import Link from "next/link";
import { Mountain, Phone, Mail, MapPin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="font-bold font-headline text-xl">Mountain Vista Retreat</span>
            </Link>
            <p className="text-sm text-card-foreground/80">
              Your serene getaway in the heart of nature.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rooms" className="hover:text-primary transition-colors">Rooms</Link></li>
              <li><Link href="/amenities" className="hover:text-primary transition-colors">Amenities</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Hill Station Rd, Manali</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mountainvista.com" className="hover:text-primary transition-colors">info@mountainvista.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+123 456 7890</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-card-foreground/80 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-card-foreground/80 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-card-foreground/80 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-card-foreground/10 mt-8 pt-6 text-center text-sm text-card-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mountain Vista Retreat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
