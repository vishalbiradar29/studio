import Link from 'next/link';
import { BCI_DISCLAIMER, NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/logo';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo isFooter={true} />
            <p className="mt-4 text-sm text-gray-300">
              Your trusted legal advisor.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-accent">Contact Info</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-accent" />
                <span className="text-gray-300">
                  123 Law Chamber, Near High Court, Ranchi, Jharkhand, 834001
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent" />
                <a href="mailto:contact@lexcompage.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@lexcompage.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition-colors">
                  +91 123-456-7890
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
             <h3 className="font-bold text-lg text-accent">Working Hours</h3>
             <div className="mt-4 text-gray-300">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
                <p>Sun: Closed</p>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
            <h4 className="font-bold text-md text-accent">Disclaimer</h4>
            <p className="text-xs text-gray-400 mt-2">{BCI_DISCLAIMER}</p>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LexCompage. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
