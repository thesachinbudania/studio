import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Wifi, Tv, Coffee, Wind, Users } from "lucide-react";
import Link from "next/link";

// --- Room Data ---
// This data structure defines the content for each room card.
const rooms = [
  {
    name: "Deluxe Valley View",
    description: "Sip your morning tea on your private balcony while soaking in the panoramic views of the mist-covered valley. Perfect for couples and small families.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "150",
    size: "350 sq. ft.",
    capacity: 3,
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Flat-screen TV" },
      { icon: Wind, label: "Private Balcony" },
    ],
  },
  {
    name: "Luxury Mountain Suite",
    description: "Indulge in spacious luxury with a separate living area, a plush king-sized bed, and unparalleled vistas of the majestic mountains.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "250",
    size: "600 sq. ft.",
    capacity: 4,
    amenities: [
      { icon: Wifi, label: "High-speed WiFi" },
      { icon: Tv, label: "55-inch Smart TV" },
      { icon: Coffee, label: "Coffee Maker" },
    ],
  },
  {
    name: "Cozy Garden Cottage",
    description: "A charming and secluded cottage nestled amidst our lush gardens for ultimate privacy. Ideal for a romantic and intimate escape.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "180",
    size: "400 sq. ft.",
    capacity: 2,
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Coffee, label: "Mini-kitchenette" },
      { icon: Tv, label: "Cozy Fireplace" },
    ],
  },
  {
    name: "Family Garden Suite",
    description: "Spacious ground-floor suite with two bedrooms and direct access to the gardens, making it perfect for families with children.",
    image: "https://plus.unsplash.com/premium_photo-1681487479203-464a22302b27?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "220",
    size: "700 sq. ft.",
    capacity: 5,
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Tv, label: "Two Smart TVs" },
      { icon: Users, label: "Interconnected Rooms" },
    ],
  },
];

export default function RoomsPage() {
  return (
    <div className="bg-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-green">Our Rooms & Suites</h1>
          <p className="text-lg text-brand-text/80 mt-4 max-w-2xl mx-auto">
            Each of our rooms is thoughtfully designed to provide comfort, luxury, and a deep connection with the surrounding nature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription className="text-brand-text/80">{room.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm text-brand-text/70">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Up to {room.capacity} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{room.size}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-sans font-semibold text-md text-brand-text">In-room Amenities:</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {room.amenities.map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <amenity.icon className="h-4 w-4 text-brand-green-light" />
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-brand-cream/50">
                  <div>
                    <span className="text-2xl font-serif font-bold text-brand-green">${room.price}</span>
                    <span className="text-brand-text/70 text-sm"> / night</span>
                  </div>
                  <Button asChild className="mt-4 sm:mt-0 w-full sm:w-auto">
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
