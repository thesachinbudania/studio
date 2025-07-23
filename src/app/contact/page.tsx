import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Get in Touch</h1>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We&apos;re here to help you plan your perfect mountain getaway. Reach out to us with any questions or for booking inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">Send Us an Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <InquiryForm />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      123 Hill Station Road, Manali, Himachal Pradesh, 175131, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@mountainvista.com" className="text-muted-foreground hover:text-primary transition-colors">
                      info@mountainvista.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle className="font-headline">Find Us Here</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="h-80 w-full">
                         <Image
                            src="https://placehold.co/800x400.png"
                            alt="Map showing hotel location"
                            width={800}
                            height={400}
                            className="w-full h-full object-cover"
                            data-ai-hint="map location"
                        />
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
