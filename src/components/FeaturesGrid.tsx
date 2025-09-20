import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Globe, 
  Activity, 
  Bell, 
  BookOpen, 
  ArrowRight 
} from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Users,
      title: "Health Worker Connect",
      description: "Direct connection with ASHA workers and local health volunteers for personalized guidance and support.",
      color: "bg-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe,
      title: "Multilingual Interface",
      description: "Available in Hindi, regional languages, and English to ensure accessible healthcare for all communities.",
      color: "bg-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Activity,
      title: "Daily Vitals Logging",
      description: "Track blood sugar, blood pressure, weight, and other vital signs with interactive charts and trends.",
      color: "bg-gov-teal",
      bgColor: "bg-gov-teal/10"
    },
    {
      icon: Bell,
      title: "Automated Reminders",
      description: "Never miss medications or check-ups with smart reminders customized to your health routine.",
      color: "bg-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: BookOpen,
      title: "Personalized Health Feed",
      description: "Receive local-language diet tips, exercise routines, and lifestyle recommendations tailored to your needs.",
      color: "bg-gov-navy",
      bgColor: "bg-gov-navy/10"
    },
    {
      icon: Activity,
      title: "Health Analytics",
      description: "Comprehensive health insights and progress tracking to help you make informed decisions about your care.",
      color: "bg-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Key Features & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions designed specifically for rural and semi-urban communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
            Explore All Features
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;