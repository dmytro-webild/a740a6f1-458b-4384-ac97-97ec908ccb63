"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { Building, CalendarDays, Droplet } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumSizeLargeTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Commercial Spaces",
          id: "/spaces",
        },
        {
          name: "Banquet & Events",
          id: "/banquets",
        },
        {
          name: "Gallery",
          id: "/gallery",
        },
        {
          name: "About Us",
          id: "/about-us",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Salasar Commercial Center"
      button={{
        text: "Book an Inquiry",
        href: "/contact",
      }}
    />
  </div>

  <div id="services-banquets" data-section="services-banquets">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Droplet,
          title: "Banquet Halls",
          description: "Elegant venues for weddings, ceremonies & business gatherings.",
        },
        {
          icon: Building,
          title: "Corporate Facilities",
          description: "Well-equipped spaces ideal for conferences, seminars, and corporate functions.",
        },
        {
          icon: CalendarDays,
          title: "Event Planning Support",
          description: "Dedicated team to assist with all aspects of your event organization.",
        },
      ]}
      title="Elegant Venues for Your Special Occasions"
      description="Our banquet halls provide a luxurious setting for weddings, corporate events, and family gatherings."
    />
  </div>

  <div id="banquets-gallery" data-section="banquets-gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "banquet-gallery-1",
          brand: "Wedding Venue",
          name: "Grand Wedding Hall",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481469.jpg",
          imageAlt: "Luxury banquet hall interior with wedding decor",
        },
        {
          id: "banquet-gallery-2",
          brand: "Corporate Event",
          name: "Modern Conference Setup",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/wedding-flower-decoration-park_181624-38092.jpg",
          imageAlt: "Corporate event table settings",
        },
        {
          id: "banquet-gallery-3",
          brand: "Celebration Space",
          name: "Festive Ceremony Hall",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/teddy-bear-made-out-lights-building_181624-13564.jpg",
          imageAlt: "Festive banquet hall decor",
        },
        {
          id: "banquet-gallery-4",
          brand: "Event Decor",
          name: "Elegant Stage Design",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/old-friends-greeting-each-other-bar_23-2148037545.jpg",
          imageAlt: "Event stage with floral arrangements",
        },
        {
          id: "banquet-gallery-5",
          brand: "Venue Feature",
          name: "Spacious Guest Seating",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-tower-full-champaigne-mosaic-background_8353-10398.jpg",
          imageAlt: "Banquet hall with guest seating",
        },
        {
          id: "banquet-gallery-6",
          brand: "Exterior View",
          name: "Illuminated Event Facade",
          price: "Book Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/mall-america-scenes-cinematic-style_23-2151551207.jpg",
          imageAlt: "Building exterior at night during an event",
        },
      ]}
      title="Banquet & Events Gallery"
      description="Discover the luxurious ambiance and versatile setups of our exquisite banquet halls."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Salasar Commercial Center"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "/",
            },
            {
              label: "About Us",
              href: "/about-us",
            },
            {
              label: "Commercial Spaces",
              href: "/spaces",
            },
            {
              label: "Banquet & Events",
              href: "/banquets",
            },
            {
              label: "Gallery",
              href: "/gallery",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Contact Us",
          items: [
            {
              label: "Bhayandar, Maharashtra",
              href: "#",
            },
            {
              label: "+91-123-456-7890",
              href: "tel:+911234567890",
            },
            {
              label: "info@salasarc.com",
              href: "mailto:info@salasarc.com",
            },
            {
              label: "Mon-Sat: 9 AM - 6 PM",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="Designed for Business. Built on Trust. © 2024 Salasar Commercial Center."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
