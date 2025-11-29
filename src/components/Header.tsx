import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/market', label: 'Market' },
  { href: '/weather', label: 'Weather' },
  { href: '/forum', label: 'Forum' },
  { href: '/knowledge', label: 'Knowledge Base' },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">ArdiLink</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" asChild>
                <NavLink to="/auth">Login</NavLink>
            </Button>
            <Button asChild>
                <NavLink to="/auth">Sign Up</NavLink>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setMenuOpen(true)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-3/4">
                    <div className="flex justify-between items-center p-4 border-b">
                         <NavLink to="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
                            <Leaf className="h-8 w-8 text-green-600" />
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">ArdiLink</span>
                        </NavLink>
                        <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <nav className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                            `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                isActive
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`
                            }
                        >
                            {link.label}
                        </NavLink>
                        ))}
                    </nav>
                    <div className="p-4 border-t flex flex-col space-y-2">
                         <Button variant="outline" asChild onClick={() => setMenuOpen(false)}>
                            <NavLink to="/auth">Login</NavLink>
                        </Button>
                        <Button asChild onClick={() => setMenuOpen(false)}>
                            <NavLink to="/auth">Sign Up</NavLink>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}