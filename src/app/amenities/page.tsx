import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Car, UtensilsCrossed, Flame, Droplets, PawPrint } from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Stay connected with complimentary high-speed internet access throughout the property.",
  },
  {
    icon: Car,
    title: "On-site Parking",
    description: "Enjoy the convenience of free and secure parking for your vehicle during your stay.",
  },
  {
    icon: UtensilsCrossed,
    title: "In-house Restaurant",
    description: "Savor delicious local and international cuisine at our restaurant, prepared with fresh, local ingredients.",
  },
  {
    icon: Flame,
    title: "Bonfire Area",
    description: "Gather around a cozy bonfire in the evenings, perfect for storytelling and stargazing.",
  },
  {
    icon: Droplets,
    title: "24-hour Hot Water",
    description: "Relax and rejuvenate with a hot shower anytime, thanks to our 24/7 hot water supply.",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly",
    description: "We welcome your furry friends! Our pet-friendly policies ensure a comfortable stay for everyone.",
  },
];

export default function AmenitiesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Our Facilities</h1>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We provide a range of amenities to make your stay comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <amenity.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
