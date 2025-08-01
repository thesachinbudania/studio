"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { useHotelStore } from "@/lib/zustandStore";

const ADDRESS = "vill chanjra Bir, teh, Joginder Nagar, Himachal Pradesh 175032";
const EMAIL = "info@hotel.com";
const PHONE = "+91 98172 60852";

function MapCard() {
  const { google_map_link: mapEmbedUrl } = useHotelStore();
  console.log("Map Embed URL:", mapEmbedUrl);
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Find Us Here</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-80 w-full">
          {/* The iframe element is used to embed the interactive Google Map.
            - src: The embed URL from Google Maps.
            - className: Ensures the map fills the container without a border.
            - allowFullScreen, loading, referrerPolicy: Standard attributes for modern embeds.
          */}
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContactPage() {
  const { phone_number, address } = useHotelStore();

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
                      {address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:info@mountainvista.com" className="text-muted-foreground hover:text-primary transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href={`tel:${phone_number}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {phone_number}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <MapCard />
          </div>
        </div>
      </div>
    </div>
  );
}
