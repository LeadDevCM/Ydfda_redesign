import { Link, useLocation } from "wouter";
import { Menu, X, Anchor, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Scholarships", href: "/scholarships" },
    { name: "Enterprises", href: "/enterprises" },
    { name: "Employment", href: "/employment" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary p-2 rounded-lg text-white group-hover:bg-primary/90 transition-colors">
              <Anchor className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-primary">YDFDA</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Yukon Delta Fisheries</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-1 cursor-pointer",
                  location === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/apply">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                Apply Online
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-lg font-medium py-2 px-4 hover:bg-muted rounded-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/apply">
              <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Apply Online
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Anchor className="h-6 w-6 text-secondary" />
              <span className="font-heading font-bold text-2xl text-white">YDFDA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dedicated to providing economic opportunities and sustainability for the Yukon Delta region through responsible fisheries development.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-secondary transition-colors text-sm cursor-pointer">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/apply" className="text-slate-400 hover:text-secondary transition-colors text-sm cursor-pointer">
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-secondary transition-colors text-sm">
                  Tax Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-secondary transition-colors text-sm">
                  Brochures
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-secondary transition-colors text-sm">
                  Board of Directors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>
                  101 Main Street<br />
                  Emmonak, AK 99581
                </span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:1-877-985-6625" className="hover:text-white transition-colors">1-877-985-6625</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:info@ydfda.org" className="hover:text-white transition-colors">info@ydfda.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Yukon Delta Fisheries Development Association. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
