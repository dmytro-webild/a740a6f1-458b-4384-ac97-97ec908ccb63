"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

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

  <div id="full-gallery" data-section="full-gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      carouselMode="buttons"
      products={[
        {
          id: "full-gallery-1",
          brand: "Banquet",
          name: "Luxury Event Setup",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-loungers-health-spa-with-no-people-copy-space_637285-6704.jpg",
          imageAlt: "Luxury banquet hall interior",
        },
        {
          id: "full-gallery-2",
          brand: "Commercial",
          name: "Modern Office Corridor",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/no-people-contemporary-building-exterior-skyscraper-design-concept_53876-31802.jpg",
          imageAlt: "Commercial corridor",
        },
        {
          id: "full-gallery-3",
          brand: "Reception",
          name: "Elegant Lobby Area",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-beautiful-lady-white-shirt-dark-jacket-black-trousers-looking-distance-hall-waiting-daytime-building-job-activity_140725-15230.jpg",
          imageAlt: "Reception space",
        },
        {
          id: "full-gallery-4",
          brand: "Office",
          name: "Professional Business Suite",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-notepad-glasses-flowerpot-desktop-top-view_169016-52847.jpg",
          imageAlt: "Business office",
        },
        {
          id: "full-gallery-5",
          brand: "Exterior",
          name: "Building at Night",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-tokyo-street-background_23-2149394953.jpg",
          imageAlt: "Exterior night shot",
        },
        {
          id: "full-gallery-6",
          brand: "Event",
          name: "Ceremony Stage Decor",
          price: "",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/look-from-afar-dinner-table-served-with-rich-cutlery-crockery-golden-vases-candleholders_1304-3702.jpg",
          imageAlt: "Event setup",
        },
      ]}
      title="Our Complete Photo Gallery"
      description="Immerse yourself in the world of Salasar Commercial Center, from grand banquets to modern office spaces."
    />
  </div>

  <div id="location-map-gallery" data-section="location-map-gallery">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",
          title: "Near Bhayandar Station",
          content: "Just a short walk or drive from the station, ensuring easy commuting.",
        },
        {
          id: "faq-2",
          title: "Opposite Dharm Kaanta",
          content: "A well-known landmark for easy navigation and identification.",
        },
        {
          id: "faq-3",
          title: "Easy Auto Accessibility",
          content: "Seamless connectivity via local transport options for visitors and businesses.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-cartoon-pin-location_23-2151642263.jpg"
      imageAlt="Map showing Salasar Commercial Center location"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Find Us on the Map"
      description="Conveniently located with easy access to all major points in Bhayandar."
      faqsAnimation="slide-up"
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
