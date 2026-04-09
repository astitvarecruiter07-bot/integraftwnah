import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'IntegraFin | Expert Tax, Accounting & Business Advisory Services',
  description:
    'Professional tax and accounting services in Katy, TX with trusted business advisory solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
