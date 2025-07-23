'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

// --- Gallery Data ---
// This data structure defines the images for each category.
const gallery = {
  property: [
    { src: "https://plus.unsplash.com/premium_photo-1680100349214-45e2685d4746?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Hotel exterior view" },
    { src: "https://images.unsplash.com/photo-1742018574649-43eb2aee36e6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Garden area with seating" },
    { src: "https://images.unsplash.com/photo-1612127632961-d1a68ca93477?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Reception and lobby area" },
    { src: "https://images.unsplash.com/photo-1632074869061-e99e414cee53?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "View from the hotel terrace" },
    { src: "https://images.unsplash.com/photo-1601887306188-66c4b043d59e?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Bonfire area at night" },
    { src: "https://plus.unsplash.com/premium_photo-1733266891438-267b79746f23?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Aerial view of the property" },
  ],
  rooms: [
    { src: "https://plus.unsplash.com/premium_photo-1676485829691-1b6d55651540?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Deluxe room interior" },
    { src: "https://images.unsplash.com/photo-1725623831897-fb009acfe742?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Suite living area" },
    { src: "https://images.unsplash.com/photo-1685891986995-5a70ea75bb08?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Clean and modern bathroom" },
    { src: "https://plus.unsplash.com/premium_photo-1745337150305-a7fadd0fa1f9?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Balcony with a view" },
    { src: "https://images.unsplash.com/photo-1667839949220-12101dcf842b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Details of room decor" },
    { src: "https://images.unsplash.com/photo-1705765276125-f2539bc95b0f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Cottage interior view" },
  ],
  dining: [
    { src: "https://plus.unsplash.com/premium_photo-1678762058107-dda70fa64d70?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Restaurant interior" },
    { src: "https://plus.unsplash.com/premium_photo-1750864972862-0543e55f0e74?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "A plated local dish" },
    { src: "https://plus.unsplash.com/premium_photo-1661409505252-3163bdedde2c?q=80&w=981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Breakfast spread with a view" },
    { src: "https://images.unsplash.com/photo-1712924786040-d592049c417b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Outdoor dining setup" },
  ],
  scenery: [
    { src: "https://plus.unsplash.com/premium_photo-1697729628826-ca05ca7f5e8e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Nearby waterfall" },
    { src: "https://images.unsplash.com/photo-1634827181140-6ed3520f57c4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Trekking trail in the mountains" },
    { src: "https://images.unsplash.com/photo-1638535955238-2ea74a647644?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Sunrise over the peaks" },
    { src: "https://images.unsplash.com/photo-1597637245724-beb1e10cb79a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Local village market" },
    { src: "https://images.unsplash.com/photo-1652501834567-937de29c4533?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Paragliding activity" },
  ],
};

// A reusable component for displaying the image grid.
const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {images.map((image, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md group">
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    ))}
  </div>
);

export default function GalleryPage() {
  return (
    <div className="bg-brand-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-green">Our Gallery</h1>
          <p className="text-lg text-brand-text/80 mt-4 max-w-2xl mx-auto">
            A glimpse into the serene beauty and comfort that awaits you at Mountain Vista Retreat.
          </p>
        </div>

        <Tabs defaultValue="property" className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-4 md:gap-8 mb-8 bg-transparent p-0">
            <TabsTrigger value="property" className="tabs-trigger">Property Exteriors</TabsTrigger>
            <TabsTrigger value="rooms" className="tabs-trigger">Room Interiors</TabsTrigger>
            <TabsTrigger value="dining" className="tabs-trigger">Dining</TabsTrigger>
            <TabsTrigger value="scenery" className="tabs-trigger">Local Scenery</TabsTrigger>
          </TabsList>

          {/* Custom CSS for Tabs is required as shadcn/ui styles are not directly available */}
          <style jsx>{`
            .tabs-trigger {
              background-color: transparent;
              border: none;
              padding: 8px 12px;
              cursor: pointer;
              position: relative;
              font-weight: 600;
              color: #4B4B4B; /* brand-text */
              opacity: 0.7;
              transition: opacity 0.3s ease;
            }
            .tabs-trigger:hover {
                opacity: 1;
            }
            .tabs-trigger[data-state="active"] {
              color: #00875A; /* brand-green-light */
              opacity: 1;
            }
            .tabs-trigger::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 2px;
              background-color: #00875A; /* brand-green-light */
              transition: width 0.3s ease;
            }
            .tabs-trigger[data-state="active"]::after {
              width: 100%;
            }
          `}</style>

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
