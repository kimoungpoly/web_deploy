import type { Metadata } from "next";
import { Battambang, Inter, Roboto } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/navbar/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import StyledJsxRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-Roboto",
});

const battambang = Battambang({
  weight: ['400', '400'],
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-Battambang",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Store",
    default: "Store",
  },
  description: "This is description Store",
  keywords: ["Store", "ecommerce", "sell"],
  openGraph: {
    title: {
      template: "%s - MyStore",
      default: "MyStore",
    },
    description: "This is description store",
    images: [
      "https://i.pinimg.com/564x/c6/90/4d/c6904de267778a2864debb5e4b41d85e.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${battambang.variable}`}>
        <NextUILayout>
          <StyledJsxRegistry>
            <NavbarComponent />
            <Suspense fallback={<LoadingComponent />}>
              <ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
            </Suspense>
          </StyledJsxRegistry>
        </NextUILayout>
      </body>
    </html>
  );
}
