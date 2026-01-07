import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Kensu - App Agenda Escolar y Organizador Familiar",
  description: "App agenda escolar para padres. Organizador familiar compartido con calendario escolar, recordatorio de tareas del colegio y control parental. Agenda digital para toda la familia.",
  keywords: [
    "app agenda escolar",
    "organizador familiar compartido",
    "calendario escolar app",
    "recordatorio tareas colegio",
    "agenda digital para padres",
    "app control parental escolar",
    "gestión familiar",
    "calendario familiar",
    "sincronización familiar",
    "horarios escolares",
    "tareas escolares app",
    "kensu"
  ],
  authors: [{ name: "Kensu Team" }],
  creator: "Kensu",
  publisher: "Kensu",
  metadataBase: new URL('https://kensuapp.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kensu - App Agenda Escolar y Organizador Familiar",
    description: "Calendario escolar app con recordatorios de tareas del colegio. Organizador familiar compartido para controlar la vida escolar de tus hijos.",
    url: 'https://kensuapp.com',
    siteName: 'Kensu',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/assets/images/hero/phone-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Kensu App - Agenda Escolar y Organizador Familiar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kensu - App Agenda Escolar para Padres',
    description: 'Organizador familiar compartido con calendario escolar y recordatorio de tareas',
    images: ['/assets/images/hero/phone-mockup.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* CSS crítico inline para evitar render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
          body{margin:0;font-family:Poppins,system-ui,-apple-system,sans-serif}
          html{scroll-behavior:smooth;font-size:16px}
          *{box-sizing:border-box}
        `}} />

        {/* Preconnect para optimizar carga de fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload imagen crítica del hero para mejorar LCP */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/hero/phone-mockup.png"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className={`${poppins.variable} font-poppins bg-white antialiased`}>
        <GoogleAnalytics />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
