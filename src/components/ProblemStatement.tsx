import { AlertTriangle, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatement = () => {
  const challenges = [
    {
      icon: MapPin,
      title: "Distance Barriers",
      description: "Remote villages lack nearby healthcare facilities",
      stat: "40%",
      statLabel: "of rural areas"
    },
    {
      icon: Users,
      title: "Specialist Shortage",
      description: "Limited access to specialized healthcare professionals",
      stat: "1:10,000",
      statLabel: "doctor-patient ratio"
    },
    {
      icon: Clock,
      title: "Delayed Diagnosis",
      description: "Chronic diseases go undetected due to lack of regular monitoring",
      stat: "60%",
      statLabel: "late detection"
    }
  ];

  return (
    <section className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Critical Healthcare Challenge</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Challenge in Rural Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Millions in Tier-2, Tier-3 cities and rural India face significant barriers in managing 
            chronic diseases and accessing quality healthcare guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <challenge.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground mb-4">{challenge.description}</p>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-destructive">{challenge.stat}</div>
                  <div className="text-sm text-muted-foreground">{challenge.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution approach */}
        <div className="bg-white rounded-xl p-8 shadow-card">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Solution: Technology-Enabled Community Healthcare
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Aarogya Sahayak bridges these gaps by connecting rural communities with local health workers, 
              providing multilingual health guidance, and enabling proactive health monitoring through 
              accessible technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;