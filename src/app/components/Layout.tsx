import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] font-['Inter',sans-serif]">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}