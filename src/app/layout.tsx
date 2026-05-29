import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Salasar Commercial Center: Bhayandar\'s Trusted Business Landmark',
  description: 'Explore premium commercial spaces, offices, banquet halls & diagnostic facilities at Salasar Commercial Center in Bhayandar. Your hub for business, trust & opportunity.',
  openGraph: {
    "title": "Salasar Commercial Center: Bhayandar's Trusted Business Landmark",
    "description": "Explore premium commercial spaces, offices, banquet halls & diagnostic facilities at Salasar Commercial Center in Bhayandar. Your hub for business, trust & opportunity.",
    "url": "/",
    "siteName": "Salasar Commercial Center",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/guangzhou-china-jan-7-2015-guangzhou-cbd-view-twilight-view_1137-306.jpg",
        "alt": "Salasar Commercial Center building"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Salasar Commercial Center: Bhayandar's Trusted Business Landmark",
    "description": "Explore premium commercial spaces, offices, banquet halls & diagnostic facilities at Salasar Commercial Center in Bhayandar. Your hub for business, trust & opportunity.",
    "images": [
      "http://img.b2bpic.net/free-photo/guangzhou-china-jan-7-2015-guangzhou-cbd-view-twilight-view_1137-306.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
