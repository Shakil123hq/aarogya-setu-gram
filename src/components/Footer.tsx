import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from "lucide-react";
import digitalIndiaLogo from "@/assets/digital-india-logo.jpg";
import myGovLogo from "@/assets/mygov-logo.jpg";

const Footer = () => {
  const quickLinks = [
    "FAQs",
    "Feedback", 
    "Privacy Policy",
    "Terms of Service",
    "Accessibility",
    "Sitemap"
  ];

  const services = [
    "Health Worker Connect",
    "Vitals Tracking",
    "Medicine Reminders",
    "Health Analytics",
    "Community Support",
    "Emergency Contacts"
  ];

  const departments = [
    "Public Health Department",
    "Rural Development",
    "Medical Education",
    "Digital India Initiative",
    "ASHA Worker Program",
    "Community Health Services"
  ];

  return (
    <footer className="bg-gov-navy text-gov-navy-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="text-primary font-bold">आस</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Aarogya Sahayak</h3>
                <p className="text-sm opacity-80">Bridging the Rural Health Divide</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Empowering rural communities with accessible healthcare guidance, 
              connecting local health workers, and promoting wellness across India.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-771-2234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@aarogyasahayak.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Raipur, Chhattisgarh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors flex items-center gap-1"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter for health updates and announcements.
            </p>
            
            {/* Newsletter signup */}
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button size="sm" className="bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Departments section */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <h4 className="text-lg font-semibold mb-4">Government Departments & Partners</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {departments.map((dept, index) => (
              <a 
                key={index}
                href="#" 
                className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-colors flex items-center gap-1"
              >
                {dept}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Government logos section */}
      <div className="border-t border-white/20 bg-white/5">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="flex items-center gap-2">
              <img 
                src={digitalIndiaLogo} 
                alt="Digital India" 
                className="w-10 h-10 object-contain rounded"
              />
              <div className="text-sm text-center">
                <div className="font-medium">Digital India</div>
                <div className="text-xs opacity-60">Government Initiative</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src={myGovLogo} 
                alt="MyGov" 
                className="w-10 h-10 object-contain rounded"
              />
              <div className="text-sm text-center">
                <div className="font-medium">MyGov</div>
                <div className="text-xs opacity-60">Citizen Engagement</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">AB</span>
              </div>
              <div className="text-sm text-center">
                <div className="font-medium">Ayushman Bharat</div>
                <div className="text-xs opacity-60">Health Mission</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">NH</span>
              </div>
              <div className="text-sm text-center">
                <div className="font-medium">NRHM</div>
                <div className="text-xs opacity-60">Rural Health Mission</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/20 bg-white/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-center md:text-left">
              <p className="opacity-80">
                © 2025 Aarogya Sahayak. All contents are owned by Government of Chhattisgarh.
              </p>
              <p className="text-xs opacity-60 mt-1">
                This is an official web portal for rural healthcare services. For inquiries, contact the Information Manager.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs opacity-60">
              <span>Last updated: September 20, 2025</span>
              <span>Visitors: 15,420</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;