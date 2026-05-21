import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Deanlist Portal',
  description: 'A DEANLIST-inspired student portal with enrollment letters, registrar merch, and syllabus tracks.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#120c1f] text-[#f6efe5] antialiased">
        {children}
      </body>
    </html>
  );
}
