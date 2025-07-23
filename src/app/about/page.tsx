import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Our Story</h1>
          <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">
            More than a hotel, Mountain Vista Retreat is a dream realized—a sanctuary born from a deep love for the mountains and a passion for genuine hospitality.
          </p>
        </div>

        <div className="grid md:grid-cols-5 md:gap-12 items-center mb-16">
          <div className="md:col-span-2 mb-8 md:mb-0">
            <Image
              src="https://placehold.co/600x800.png"
              alt="The hotel nestled in the mountainside"
              width={600}
              height={800}
              className="rounded-lg shadow-xl w-full object-cover"
              data-ai-hint="hotel mountainside"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl mb-4">From a Family Home to a Haven for Travelers</h2>
            <div className="space-y-4 text-foreground/80 font-body">
              <p>
                Our journey began in 1985, when our family built a small cottage here simply to be closer to the nature we adored. For years, it was our private escape. Friends and family who visited would always tell us how magical this little patch of earth felt, and how we should share it with the world.
              </p>
              <p>
                In 2010, we decided to do just that. We expanded our beloved cottage into Mountain Vista Retreat, with a mission to create a space that felt less like a hotel and more like a welcoming, comfortable, and luxurious mountain home. We preserved the original structure, which now serves as our cozy library, and designed every new room to offer the same stunning views that we fell in love with all those years ago.
              </p>
              <p>
                Our philosophy is simple: provide warm, personal service, serve delicious food made from local ingredients, and let the majesty of the mountains do the rest. We invite you to be a part of our story and create your own unforgettable memories here.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl">Meet the Team</h2>
            <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
                The heart of our retreat is our small, dedicated team.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
                <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-semibold">Anil Kumar</h3>
                    <p className="text-sm text-primary">Founder & Host</p>
                    <p className="text-sm text-muted-foreground mt-2">"I love sharing the beauty of my home with guests from around the world."</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-semibold">Sunita Devi</h3>
                    <p className="text-sm text-primary">Head of Hospitality</p>
                    <p className="text-sm text-muted-foreground mt-2">"My goal is to make every guest feel like part of our family."</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardContent className="pt-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                        <AvatarImage src="https://placehold.co/100x100.png" />
                        <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <h3 className="font-headline text-xl font-semibold">Ramesh Singh</h3>
                    <p className="text-sm text-primary">Chef</p>
                    <p className="text-sm text-muted-foreground mt-2">"I bring the flavors of the mountains to your plate."</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
