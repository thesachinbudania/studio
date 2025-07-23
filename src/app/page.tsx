import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Panoramic view of a misty mountain range"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
          data-ai-hint="mountain landscape"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center gap-4 px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Mountain Vista Retreat
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-body text-gray-200">
            Experience Tranquility in the Heart of the Mountains
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="featured-rooms" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
            Our Rooms & Suites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Deluxe Valley View Room"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint="hotel room"
              />
              <CardHeader>
                <CardTitle className="font-headline">Deluxe Valley View</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-card-foreground/80 mb-4">
                  Wake up to breathtaking views of the mist-covered valley from your private balcony.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/rooms">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Luxury Mountain Suite"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint="luxury suite"
              />
              <CardHeader>
                <CardTitle className="font-headline">Luxury Mountain Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-card-foreground/80 mb-4">
                  Indulge in spacious luxury with a separate living area and panoramic mountain vistas.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/rooms">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Cozy Garden Cottage"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint="garden cottage"
              />
              <CardHeader>
                <CardTitle className="font-headline">Cozy Garden Cottage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-card-foreground/80 mb-4">
                  A charming and secluded cottage nestled amidst our lush gardens for ultimate privacy.
                </p>
                <Button asChild variant="link" className="px-0">
                  <Link href="/rooms">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12 text-card-foreground">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-card-foreground">
            <Card className="bg-transparent border-card-foreground/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">John Doe</p>
                  </div>
                </div>
                <p className="font-body italic">
                  &quot;An unforgettable stay! The views were absolutely surreal. The staff went above and beyond to make our trip special. We&apos;ll be back!&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-card-foreground/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Sarah Adams</p>
                  </div>
                </div>
                <p className="font-body italic">
                  &quot;The perfect escape from the city. So peaceful and serene. Waking up to the sound of birds and the sight of the mountains was magical.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-card-foreground/20">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="https://placehold.co/40x40.png" />
                    <AvatarFallback>MG</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-bold">Mike Green</p>
                  </div>
                </div>
                <p className="font-body italic">
                  &quot;The food at the in-house restaurant was delicious, and the bonfire in the evening was a lovely touch. Highly recommended.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about-snippet" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x400.png"
              alt="The hotel exterior surrounded by trees"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full object-cover"
              data-ai-hint="hotel exterior"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl mb-4">
              Your Sanctuary in the Hills
            </h2>
            <p className="font-body mb-6 text-foreground/80">
              Nestled in a pristine corner of the mountains, Mountain Vista Retreat is more than just a hotel—it’s a destination for those seeking peace, luxury, and a deep connection with nature. Our family-owned retreat is built on a philosophy of warm hospitality and a love for the majestic landscape we call home.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Discover Our Story
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
