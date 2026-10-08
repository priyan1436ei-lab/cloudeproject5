import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CloudNest',
  description: 'Temporary cloud workspace for secure file sharing and collaboration',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
