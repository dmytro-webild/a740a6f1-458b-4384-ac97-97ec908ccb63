"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import LegalSection from '@/components/legal/LegalSection';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { CheckCircle } from "lucide-react";

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

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated-grid"}}
      title="Bhayandar’s Trusted Commercial Landmark"
      description="Premium commercial spaces, business offices, banquet halls, banking & diagnostic facilities — all under one destination."
      testimonials={[
        {
          name: "Ananya Sharma",          handle: "@AnanyaCreations",          testimonial: "The modern infrastructure and vibrant community at Salasar have truly elevated our business presence. Highly recommended!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg",          imageAlt: "Smiling senior man holding smartphone"},
        {
          name: "Vikram Rao",          handle: "@RaoEnterprises",          testimonial: "Excellent connectivity and professional management make Salasar an ideal business location. Our team loves it here.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-standing-office_23-2147899580.jpg",          imageAlt: "Happy businessman standing in office"},
        {
          name: "Shreya Das",          handle: "@ShreyaDesign",          testimonial: "The elegance of the banquet halls is unmatched. We've hosted several successful events, and guests are always impressed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-11786.jpg",          imageAlt: "Attractive blond business woman"},
        {
          name: "Rohan Gupta",          handle: "@GuptaInvestments",          testimonial: "A truly strategic location for financial services. The accessibility and supportive environment are key advantages.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",          imageAlt: "Positive Middle-aged Business Leader"},
        {
          name: "Neha Joshi",          handle: "@JoshiHealthcare",          testimonial: "Having diagnostic and banking facilities on-site adds immense value. It's incredibly convenient for our clients and staff.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-glasses-crossed-hands-portrait-office-with-panoramic-windows-business-concept_231208-11683.jpg",          imageAlt: "Businesswoman in glasses"},
      ]}
      buttons={[
        {
          text: "Explore Spaces",          href: "/spaces"},
        {
          text: "Book an Inquiry",          href: "/contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/guangzhou-china-jan-7-2015-guangzhou-cbd-view-twilight-view_1137-306.jpg"
      videoSrc="https://cdn.pixabay.com/video/2024/02/09/199092-911804792_medium.mp4"
      imageAlt="Elegant commercial building exterior"
      mediaAnimation="opacity"
      marqueeItems={[
        {
          type: "text",          text: "20+ Years of Presence"},
        {
          type: "text",          text: "Trusted by Hundreds of Businesses"},
        {
          type: "text",          text: "Banquet & Corporate Facilities"},
        {
          type: "text",          text: "Easy Access from Bhayandar Station"},
        {
          type: "text",          text: "Strategic Location Benefits"},
      ]}
      marqueeSpeed={40}
      showMarqueeCard={true}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/eastern-woman-cafe_1303-5392.jpg",          alt: "Eastern woman in a cafe"},
        {
          src: "http://img.b2bpic.net/free-photo/photorealistic-lawyer-day-celebration_23-2151053986.jpg",          alt: "Photorealistic lawyer day celebration"},
        {
          src: "http://img.b2bpic.net/free-photo/eastern-woman-with-phone_1303-5391.jpg",          alt: "Eastern woman with phone"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-smiley-man-therapy_23-2148928793.jpg",          alt: "Close up smiley man in therapy"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg",          alt: "Portrait of fashionable well dressed man"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",          content: "Built Around Convenience & Growth"},
        {
          type: "text",          content: "Salasar Commercial Center is one of Bhayandar’s established business destinations — bringing together commercial offices, banquet facilities, banking services, diagnostics, and daily business convenience within a single connected hub.\nStrategically located near Bhayandar station with excellent accessibility, Salasar has become a trusted address for professionals, finance firms, retail businesses, medical services, and event hosting."
        }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/confident-young-indian-man-black-shirt-sitting-cafe_627829-5445.jpg"
      imageAlt="Luxury office interior"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "metric-1",          value: "✔",          title: "Prime Bhayandar Location",          description: "Unbeatable accessibility near the station.",          icon: CheckCircle,
        },
        {
          id: "metric-2",          value: "✔",          title: "Trusted Commercial Ecosystem",          description: "A reliable hub for diverse businesses.",          icon: CheckCircle,
        },
        {
          id: "metric-3",          value: "✔",          title: "Offices + Banquets + Banking",          description: "All essential services under one roof.",          icon: CheckCircle,
        },
        {
          id: "metric-4",          value: "✔",          title: "Excellent Accessibility",          description: "Easy access for clients and employees.",          icon: CheckCircle,
        },
        {
          id: "metric-5",          value: "✔",          title: "Established Business Community",          description: "Join a thriving network of professionals.",          icon: CheckCircle,
        },
        {
          id: "metric-6",          value: "✔",          title: "Value-Driven Spaces",          description: "Commercial properties designed for growth.",          icon: CheckCircle,
        },
        {
          id: "metric-7",          value: "✔",          title: "Professional Management",          description: "Reliable support for all your needs.",          icon: CheckCircle,
        },
      ]}
      title="Why Businesses Trust Salasar Commercial Center"
      description="Our commitment to excellence and community makes us Bhayandar’s preferred commercial hub."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Arjun Sharma",          handle: "@ArjunTechSolutions",          testimonial: "Good value for money and easy access from Bhayandar station. Salasar has been key to our growth!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-13618.jpg",          imageAlt: "Arjun Sharma"},
        {
          id: "2",          name: "Priya Singh",          handle: "@PriyaEvents",          testimonial: "Amazing hall for ceremonies. Very happy with the management and the elegant ambiance for our events.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-beautiful-young-woman-dress-room_23-2148068394.jpg",          imageAlt: "Priya Singh"},
        {
          id: "3",          name: "Karan Mehta",          handle: "@KaranProperties",          testimonial: "Best deal support for commercial shop buy, sell and rent. The team is truly professional and efficient.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/face-handsome-cafe-adult-job_1157-3664.jpg",          imageAlt: "Karan Mehta"},
        {
          id: "4",          name: "Deepa Patel",          handle: "@DeepaDiagnose",          testimonial: "Good commercial building with bank, banquet and MRI center. A truly convenient and reliable location.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-real-estate-agent_23-2151064886.jpg",          imageAlt: "Deepa Patel"},
        {
          id: "5",          name: "Rahul Kapoor",          handle: "@RahulFinance",          testimonial: "A perfect hub for marriages and functions in Bhayandar. Also provides excellent office spaces.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-pediatrician-work_23-2151686800.jpg",          imageAlt: "Rahul Kapoor"},
      ]}
      showRating={true}
      title="Voices of Our Valued Clients"
      description="Hear what businesses and visitors have to say about their experience at Salasar Commercial Center."
    />
  </div>

  <div id="legal" data-section="legal">
      <LegalSection 
        layout="default"
        title="Legal Information"
        sections={[
          {
            title: "Terms of Service",            content: "These are the terms and conditions governing your use of this website. Please read them carefully."
          },
          {
            title: "Privacy Policy",            content: "Our privacy policy details how we collect, use, and protect your personal data."
          }
        ]}
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
