import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const OutfitSans = Outfit({
  variable: '--font-outfit-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'QR code component',
  description: 'Emiliano Ceballos for Frontendmentor',
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OutfitSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
