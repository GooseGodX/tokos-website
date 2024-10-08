import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Providers } from "./providers";
import Head from "next/head";
import { CartProvider } from "@/context/CartContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tokos",
  description: "Sweets and Cakes Tokos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        <Analytics />
        <AppRouterCacheProvider>
          <CartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Providers>{children}</Providers>
            </ThemeProvider>
          </CartProvider>
        </AppRouterCacheProvider>
        <Toaster />
      </body>
    </html>
  );
}
