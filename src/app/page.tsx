"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Bot, Sun, Zap, Coffee } from "lucide-react";
import { useHotelStore } from "@/lib/zustandStore";

// Assuming these components are in your project structure and have been styled
// with the "Tranquil Luxury" theme as we've discussed.
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { backendUrl } from "@/lib/constants";

const imageUrlGenerator = (imageName: string) => {
  return `${backendUrl}/media/${imageName}`;
}

const AIPlanner = () => {
  const { location_for_ai: location, name } = useHotelStore();
  const [interests, setInterests] = React.useState<string[]>([]);
  const [duration, setDuration] = React.useState<number>(3);
  const [loading, setLoading] = React.useState(false);
  const [itinerary, setItinerary] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const interestOptions = [
    { name: "Relaxation", icon: Sun },
    { name: "Adventure", icon: Zap },
    { name: "Culture", icon: Bot },
    { name: "Cuisine", icon: Coffee },
  ];

  const handleInterestClick = (interest: string) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generateItinerary = async () => {
    if (interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }
    setLoading(true);
    setItinerary(null);
    setError(null);

    const prompt = `
      Create a sample travel itinerary for a tourist visiting ${location}.
      The trip duration is ${duration} days.
      The tourist's main interests are: ${interests.join(", ")}.
Make it as if the user is staying in a hotel named "${name}".
This response is for a travel website's AI planner feature.
      Suggest famous or interesting places to visit and activities to do each day.
      Format the entire response as a single block of simple HTML. Use the following tags only: <h4>, <p>, <div>, <strong>.
      The main heading should be an <h4> tag. For each day, use a <div> with a <strong> tag for the day number (e.g., "Day 1:").
      IMPORTANT: Your entire response must be ONLY the HTML content itself, without any markdown fences like \`\`\`html or \`\`\`.
    `;

    try {
      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyCvVpKQ01ALfXJpxrm0AAApsu03gi1e4jw" // API key is handled by the environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {

        let generatedText = result.candidates[0].content.parts[0].text;
        generatedText = generatedText.replace(/^```html\s*/, '').replace(/```$/, '');

        setItinerary(generatedText);
      } else {
        throw new Error("Received an empty or invalid response from the AI.");
      }
    } catch (e: any) {
      setError("Sorry, we couldn't generate an itinerary at this time. Please try again later.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-green">Plan Your Perfect Getaway</h2>
          <p className="text-brand-text/80 mt-2 max-w-2xl mx-auto">Let our AI craft a personalized itinerary based on your interests for an unforgettable stay.</p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-brand-text mb-4">1. What are your interests?</h3>
              <div className="grid grid-cols-2 gap-3">
                {interestOptions.map(option => (
                  <button key={option.name} onClick={() => handleInterestClick(option.name)} className={cn(
                    "flex items-center gap-3 p-3 rounded-lg border-2 transition-all",
                    interests.includes(option.name)
                      ? "border-[#ADC1A9] bg-[#ADC1A9]/10 text-brand-green"
                      : "border-gray-200 text-brand-text/70 hover:border-gray-400"
                  )}>
                    <option.icon className="h-5 w-5" />
                    <span className="font-semibold text-sm">{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-brand-text mb-4">2. How many days?</h3>
              <div className="grid grid-cols-3 gap-3">
                {[2, 3, 5].map(day => (
                  <button key={day} onClick={() => setDuration(day)} className={cn(
                    "p-3 rounded-lg border-2 transition-all",
                    duration === day
                      ? "border-[#ADC1A9] bg-[#ADC1A9]/10 text-brand-green"
                      : "border-gray-200 text-brand-text/70 hover:border-gray-400"
                  )}>
                    <span className="font-bold text-lg">{day}</span>
                    <span className="text-xs block">Days</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" onClick={generateItinerary} disabled={loading}>
              {loading ? "Crafting Your Trip..." : "Generate Itinerary"}
            </Button>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 min-h-[100px]">
            {itinerary && <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: itinerary }} />}
            {error && <p className="text-red-600 text-center">{error}</p>}
          </div>
        </Card>
      </div>
    </section>
  );
};


export default function Home() {
  const { name, hero_image, room_1_image, room_2_image, room_3_image, bottom_image } = useHotelStore();
  return (
    // Set the base background and font for the entire page
    <div className="flex flex-col bg-brand-cream font-sans text-brand-text">

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[90vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src={imageUrlGenerator(hero_image)}
          alt="Panoramic view of a misty mountain range"
          fill
          className="absolute object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center gap-4 px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {name}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200">
            Experience unparalleled tranquility and luxury in the heart of the mountains. Your exclusive escape awaits.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              Book Your Stay <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section id="featured-rooms" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-green">
              Our Rooms & Suites
            </h2>
            <p className="text-brand-text/80 mt-2 max-w-2xl mx-auto">Discover your perfect sanctuary. Each room is designed for comfort, elegance, and breathtaking views.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <Image src={imageUrlGenerator(room_1_image)} alt="Deluxe Valley View Room" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg" />
              <CardHeader><CardTitle>Deluxe Valley View</CardTitle></CardHeader>
              <CardContent>
                <p className="text-brand-text/80 mb-4">Wake up to breathtaking views of the mist-covered valley from your private balcony.</p>
                <Button asChild variant="outline" size="sm"><Link href="/rooms/deluxe-valley-view">View Details <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
            <Card>
              <Image src={imageUrlGenerator(room_2_image)} alt="Luxury Mountain Suite" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg" />
              <CardHeader><CardTitle>Luxury Mountain Suite</CardTitle></CardHeader>
              <CardContent>
                <p className="text-brand-text/80 mb-4">Indulge in spacious luxury with a separate living area and panoramic mountain vistas.</p>
                <Button asChild variant="outline" size="sm"><Link href="/rooms/luxury-mountain-suite">View Details <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
            <Card>
              <Image src={imageUrlGenerator(room_3_image)} alt="Cozy Garden Cottage" width={600} height={400} className="w-full h-64 object-cover rounded-t-lg" />
              <CardHeader><CardTitle>Cozy Garden Cottage</CardTitle></CardHeader>
              <CardContent>
                <p className="text-brand-text/80 mb-4">A charming and secluded cottage nestled amidst our lush gardens for ultimate privacy.</p>
                <Button asChild variant="outline" size="sm"><Link href="/rooms/cozy-garden-cottage">View Details <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Planner Section */}
      <AIPlanner />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-green">What Our Guests Say</h2>
            <p className="text-brand-text/80 mt-2 max-w-2xl mx-auto">Stories from those who've experienced the magic of our retreat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar><AvatarImage src="https://placehold.co/40x40/eab308/ffffff?text=JD" /><AvatarFallback>JD</AvatarFallback></Avatar>
                  <div className="ml-4"><p className="font-bold">John Doe</p><div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div></div>
                </div>
                <p className="italic text-brand-text/80">&quot;An unforgettable stay! The views were absolutely surreal. The staff went above and beyond to make our trip special. We&apos;ll be back!&quot;</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar><AvatarImage src="https://placehold.co/40x40/3b82f6/ffffff?text=SA" /><AvatarFallback>SA</AvatarFallback></Avatar>
                  <div className="ml-4"><p className="font-bold">Sarah Adams</p><div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div></div>
                </div>
                <p className="italic text-brand-text/80">&quot;The perfect escape from the city. So peaceful and serene. Waking up to the sound of birds and the sight of the mountains was magical.&quot;</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar><AvatarImage src="https://placehold.co/40x40/16a34a/ffffff?text=MG" /><AvatarFallback>MG</AvatarFallback></Avatar>
                  <div className="ml-4"><p className="font-bold">Mike Green</p><div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div></div>
                </div>
                <p className="italic text-brand-text/80">&quot;The food at the in-house restaurant was delicious, and the bonfire in the evening was a lovely touch. Highly recommended.&quot;</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section id="about-snippet" className="py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <Image src={imageUrlGenerator(bottom_image)} alt="The hotel exterior surrounded by trees" width={600} height={450} className="rounded-lg shadow-xl w-full object-cover" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-green mb-4">Your Sanctuary in the Hills</h2>
            <p className="mb-6 text-brand-text/80">Nestled in a pristine corner of the mountains, Mountain Vista Retreat is more than just a hotel—it’s a destination for those seeking peace, luxury, and a deep connection with nature. Our family-owned retreat is built on a philosophy of warm hospitality and a love for the majestic landscape we call home.</p>
            <Button asChild variant="outline"><Link href="/about">Discover Our Story</Link></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
