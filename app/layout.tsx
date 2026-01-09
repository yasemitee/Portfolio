import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yassine Gourram',
  description:
    'Software Engineer with expertise in Java, Spring Boot, Angular, React, and cloud technologies. Based in Milan, Italy.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Java',
    'Spring Boot',
    'React',
    'Angular',
    'TypeScript',
    'Milan',
  ],
  authors: [{ name: 'Yassine Gourram' }],
  openGraph: {
    title: 'Yassine Gourram',
    description:
      'Software Engineer with expertise in Java, Spring Boot, Angular, React, and cloud technologies. Based in Milan, Italy.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
