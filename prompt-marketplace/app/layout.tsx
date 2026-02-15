import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PromptProfi - AI-Prompts für deutsche Berufsgruppen',
  description: 'Professionelle AI-Prompts für Handwerker, Steuerberater und Ärzte. Steigere deine Produktivität mit maßgeschneiderten KI-Vorlagen.',
  keywords: 'AI Prompts, ChatGPT, KI, Handwerker, Steuerberater, Ärzte, deutsche Berufe, Produktivität',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}