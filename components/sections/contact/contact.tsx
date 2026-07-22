"use client";

import BookingCard from "@/components/custom/booking-card";
import ContactForm from "@/components/custom/contact-form";
import Container from "@/components/layout/container";
import ContactDetailCard from "@/components/ui/contact-card";
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

export default function ContactSection() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12">
            <div className="space-y-4">
              <ContactDetailCard
                icon={<EnvelopeSimpleIcon />}
                title="Email"
                description="info@digital.com"
              />
              <ContactDetailCard
                icon={<PhoneIcon />}
                title="Phone"
                description="+91 96 3992 7782"
              />
              <ContactDetailCard
                icon={<MapPinIcon />}
                title="Address"
                description="Uttar Pradesh, India"
              />
              <div className="mt-16">
                <BookingCard />
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
