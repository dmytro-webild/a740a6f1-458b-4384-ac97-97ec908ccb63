"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { Building, DollarSign, Key } from "lucide-react";

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

  <div id="services-spaces" data-section="services-spaces">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Building,
          title: "Commercial Offices",
          description: "Modern office spaces for finance firms, agencies, startups & professionals.",
        },
        {
          icon: Building,
          title: "Retail Shops",
          description: "Prime visibility commercial units for growing businesses.",
        },
        {
          icon: Key,
          title: "Buy • Sell • Rent Assistance",
          description: "Professional property guidance and commercial leasing support.",
        },
        {
          icon: DollarSign,
          title: "Banking Facilities",
          description: "Trusted banking access including SBI and business convenience services.",
        },
      ]}
      title="Our Premium Commercial Spaces & Services"
      description="Discover the diverse offerings that make Salasar Commercial Center Bhayandar’s premier business destination."
    />
  </div>

  <div id="spaces-gallery" data-section="spaces-gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "space-gallery-1",
          brand: "Office Space",
          name: "Executive Office Suites",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-tidy-workspace-with-laptop_23-2148592296.jpg",
          imageAlt: "Modern executive office interior",
        },
        {
          id: "space-gallery-2",
          brand: "Retail Space",
          name: "High-Visibility Shops",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-businesswoman-beige-suit-silhouette-young-corporate-woman-with-documents-laptop_1258-119507.jpg",
          imageAlt: "Commercial corridor with shop fronts",
        },
        {
          id: "space-gallery-3",
          brand: "Common Area",
          name: "Elegant Reception & Lobbies",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/square-front-modern-office-buildings_1359-867.jpg",
          imageAlt: "Upscale reception area with modern decor",
        },
        {
          id: "space-gallery-4",
          brand: "Exterior",
          name: "Iconic Building Facade",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/city-night-with-architecture-vibrant-lights_23-2149836932.jpg",
          imageAlt: "Salasar Commercial Center exterior at night",
        },
        {
          id: "space-gallery-5",
          brand: "Service",
          name: "On-site Banking Facilities",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-building-architecture-lawyer-s-day-celebration_23-2151023422.jpg",
          imageAlt: "Bank facilities",
        },
        {
          id: "space-gallery-6",
          brand: "Service",
          name: "Professional Diagnostic Center",
          price: "Enquire Now",
          rating: 5,
          reviewCount: "0",
          imageSrc: "http://img.b2bpic.net/free-vector/mri-scanner-with-patient-doctor-web_107791-1755.jpg",
          imageAlt: "Diagnostic center equipment",
        },
      ]}
      title="Commercial Spaces Gallery"
      description="Explore the modern interiors and professional environment of our office and retail units."
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
