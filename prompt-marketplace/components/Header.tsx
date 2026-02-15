'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Bibliothek', href: '/library' },
    { label: 'Community', href: '/community' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Preise', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Prompt<span className="text-blue-800">Profi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href="/profile/settings" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Profil
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Login
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="/profile/settings" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                Profil
              </a>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}