import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, User, LogIn } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <>
      {/* Top utility bar */}
      <div className="bg-gov-navy text-gov-navy-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Last updated: September 20, 2025</span>
            <span>Screen reader access</span>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="en">
              <SelectTrigger className="w-32 bg-transparent border-white/20 text-white">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="cg">छत्तीसगढ़ी</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white hover:bg-white/10">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and title */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">आस</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Aarogya Sahayak</h1>
                <p className="text-sm text-muted-foreground">Bridging the Rural Health Divide</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-foreground hover:text-primary font-medium">Home</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">About</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">Features</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">Health Worker Connect</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">Resources</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">News</a>
              <a href="#" className="text-foreground hover:text-primary font-medium">Contact Us</a>
            </nav>

            {/* Mobile menu button */}
            <Button variant="outline" className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;