import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Mountain, MapPin, PersonStanding } from "lucide-react";

const attractions = [
  {
    name: "Hadimba Temple",
    description: "An ancient cave temple dedicated to Hidimbi Devi, wife of Bhima, a figure in the Indian epic Mahābhārata.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ancient temple",
    distance: "2 km",
    type: "Cultural Site"
  },
  {
    name: "Solang Valley",
    description: "A popular destination for adventure sports like paragliding, zorbing, and skiing during winter.",
    image: "https://placehold.co/600x400.png",
    imageHint: "paragliding valley",
    distance: "14 km",
    type: "Adventure"
  },
  {
    name: "Jogini Waterfalls",
    description: "A picturesque waterfall with a tranquil atmosphere, reached by a short and scenic trek.",
    image: "https://placehold.co/600x400.png",
    imageHint: "scenic waterfall",
    distance: "4 km",
    type: "Nature Trek"
  },
  {
    name: "Manu Temple",
    description: "A beautiful temple dedicated to the sage Manu, located in the old part of Manali.",
    image: "https://placehold.co/600x400.png",
    imageHint: "historic temple",
    distance: "3 km",
    type: "Cultural Site"
  },
  {
    name: "Rohtang Pass",
    description: "A high mountain pass offering stunning views and snow activities, a must-visit for nature lovers.",
    image: "https://placehold.co/600x400.png",
    imageHint: "snowy mountain pass",
    distance: "51 km",
    type: "Day Trip"
  },
  {
    name: "Old Manali",
    description: "Explore the charming lanes of Old Manali, famous for its laid-back cafes, guest houses, and small shops.",
    image: "https://placehold.co/600x400.png",
    imageHint: "village market street",
    distance: "3 km",
    type: "Local Experience"
  }
];

export default function AttractionsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Things to Do</h1>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Discover the beauty and adventure that surrounds our retreat. Here are some of our favorite local spots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={attraction.image}
                alt={attraction.name}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint={attraction.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{attraction.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-card-foreground/80 mb-4">{attraction.description}</p>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{attraction.distance} from hotel</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <PersonStanding className="h-4 w-4" />
                        <span>{attraction.type}</span>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
