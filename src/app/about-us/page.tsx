"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Award, Lightbulb, MapPin, Users } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "Commercial Spaces",          id: "/spaces"},
        {
          name: "Banquet & Events",          id: "/banquets"},
        {
          name: "Gallery",          id: "/gallery"},
        {
          name: "About Us",          id: "/about-us"},
        {
          name: "Contact",          id: "/contact"},
      ]}
      brandName="Salasar Commercial Center"
      button={{
        text: "Book an Inquiry",        href: "/contact"}}
    />
  </div>

  <div id="about-us-full" data-section="about-us-full">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Our Legacy of Trust & Growth"},
        {
          type: "text",          content: "Salasar Commercial Center stands as a testament to reliability and progress in Bhayandar. For decades, we have been the preferred destination for a diverse range of businesses, from burgeoning startups to established financial institutions and essential diagnostic services. Our commitment extends beyond providing spaces; we foster a vibrant ecosystem where businesses thrive, events flourish, and community connections strengthen.\nStrategically positioned for unparalleled accessibility, we continuously evolve to meet the dynamic needs of modern commerce. At Salasar, we are not just a location; we are a partner in your journey towards success, built on a foundation of trust, convenience, and opportunity."
        }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/waiting-room-unfocused_1203-1094.jpg"
      imageAlt="Luxury corporate lounge interior"
    />
  </div>

  <div id="trust-reliability" data-section="trust-reliability">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "pillar-1",          value: "20+",          title: "Years of Presence",          description: "A long-standing reputation built on reliability.",          icon: Award,
        },
        {
          id: "pillar-2",          value: "100s",          title: "Businesses Trust Us",          description: "The preferred choice for a thriving community.",          icon: Users,
        },
        {
          id: "pillar-3",          value: "Premier",          title: "Location Advantage",          description: "Unmatched accessibility for all stakeholders.",          icon: MapPin,
        },
        {
          id: "pillar-4",          value: "Diverse",          title: "Service Hub",          description: "Offices, banquets, banking & diagnostics in one place.",          icon: Lightbulb,
        },
      ]}
      title="Our Pillars of Strength"
      description="Dedicated to delivering excellence and fostering an environment of sustained success for all our patrons."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Salasar Commercial Center"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "About Us",              href: "/about-us"},
            {
              label: "Commercial Spaces",              href: "/spaces"},
            {
              label: "Banquet & Events",              href: "/banquets"},
            {
              label: "Gallery",              href: "/gallery"},
            {
              label: "Contact",              href: "/contact"},
          ],
        },
        {
          title: "Contact Us",          items: [
            {
              label: "Bhayandar, Maharashtra",              href: "#"},
            {
              label: "+91-123-456-7890",              href: "tel:+911234567890"},
            {
              label: "info@salasarc.com",              href: "mailto:info@salasarc.com"},
            {
              label: "Mon-Sat: 9 AM - 6 PM",              href: "#"},
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
