import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const gallery = {
  property: [
    { src: "https://placehold.co/600x400.png", alt: "Hotel exterior view", hint: "hotel exterior" },
    { src: "https://placehold.co/600x400.png", alt: "Garden area with seating", hint: "hotel garden" },
    { src: "https://placehold.co/600x400.png", alt: "Reception and lobby area", hint: "hotel lobby" },
    { src: "https://placehold.co/600x400.png", alt: "View from the hotel terrace", hint: "mountain view" },
    { src: "https://placehold.co/600x400.png", alt: "Bonfire area at night", hint: "bonfire night" },
    { src: "https://placehold.co/600x400.png", alt: "Aerial view of the property", hint: "aerial view" },
  ],
  rooms: [
    { src: "https://placehold.co/600x400.png", alt: "Deluxe room interior", hint: "hotel room" },
    { src: "https://placehold.co/600x400.png", alt: "Suite living area", hint: "luxury suite" },
    { src: "https://placehold.co/600x400.png", alt: "Clean and modern bathroom", hint: "hotel bathroom" },
    { src: "https://placehold.co/600x400.png", alt: "Balcony with a view", hint: "balcony view" },
    { src: "https://placehold.co/600x400.png", alt: "Details of room decor", hint: "room decor" },
    { src: "https://placehold.co/600x400.png", alt: "Cottage interior view", hint: "cottage interior" },
  ],
  dining: [
    { src: "https://placehold.co/600x400.png", alt: "Restaurant interior", hint: "restaurant interior" },
    { src: "https://placehold.co/600x400.png", alt: "A plated local dish", hint: "local food" },
    { src: "https://placehold.co/600x400.png", alt: "Breakfast spread with a view", hint: "breakfast view" },
    { src: "https://placehold.co/600x400.png", alt: "Outdoor dining setup", hint: "outdoor dining" },
  ],
  scenery: [
    { src: "https://placehold.co/600x400.png", alt: "Nearby waterfall", hint: "waterfall nature" },
    { src: "https://placehold.co/600x400.png", alt: "Trekking trail in the mountains", hint: "trekking trail" },
    { src: "https://placehold.co/600x400.png", alt: "Sunrise over the peaks", hint: "mountain sunrise" },
    { src: "https://placehold.co/600x400.png", alt: "Local village market", hint: "local market" },
    { src: "https://placehold.co/600x400.png", alt: "Paragliding activity", hint: "paragliding adventure" },
  ],
};

const ImageGrid = ({ images }: { images: { src: string; alt: string; hint: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {images.map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          data-ai-hint={image.hint}
        />
      </div>
    ))}
  </div>
);

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Our Gallery</h1>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            A glimpse into the serene beauty and comfort that awaits you at Mountain Vista Retreat.
          </p>
        </div>

        <Tabs defaultValue="property" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="property">Property Exteriors</TabsTrigger>
            <TabsTrigger value="rooms">Room Interiors</TabsTrigger>
            <TabsTrigger value="dining">Dining</TabsTrigger>
            <TabsTrigger value="scenery">Local Scenery</TabsTrigger>
          </TabsList>
          <TabsContent value="property">
            <ImageGrid images={gallery.property} />
          </TabsContent>
          <TabsContent value="rooms">
            <ImageGrid images={gallery.rooms} />
          </TabsContent>
          <TabsContent value="dining">
            <ImageGrid images={gallery.dining} />
          </TabsContent>
          <TabsContent value="scenery">
            <ImageGrid images={gallery.scenery} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
