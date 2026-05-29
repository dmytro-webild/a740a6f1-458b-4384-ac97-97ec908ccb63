"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

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

  <div id="contact-form" data-section="contact-form">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-animated-grid",
      }}
      tag="Get in Touch"
      title="Grow Your Business at Salasar"
      description="Please fill out the form below to request a callback from our team. We'll help you find the perfect space or book your next event."
      imageSrc="http://img.b2bpic.net/free-photo/laptop-glasses-pen-placed-table_23-2147651018.jpg"
      imageAlt="Modern office interior with contact forms"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Enter your email address"
      buttonText="Request a Callback"
      termsText="By clicking Request a Callback you're confirming that you agree with our Terms and Conditions."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="contact-location-info" data-section="contact-location-info">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "cloc-1",
          title: "Address",
          content: "Salasar Commercial Center, Bhayandar, Maharashtra, India",
        },
        {
          id: "cloc-2",
          title: "Phone",
          content: "+91-123-456-7890",
        },
        {
          id: "cloc-3",
          title: "Email",
          content: "info@salasarc.com",
        },
        {
          id: "cloc-4",
          title: "Working Hours",
          content: "Mon-Sat: 9 AM - 6 PM",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/network-with-pins_93675-134591.jpg"
      imageAlt="Detailed map of Salasar Commercial Center's location"
      mediaAnimation="opacity"
      mediaPosition="left"
      title="Our Convenient Location"
      description="Salasar Commercial Center is easily accessible and centrally located for all your business needs."
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
