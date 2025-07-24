import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const features = [
    {
      title: "NAAC has conferred 'A+' grade to the Institute",
      description: "All the UG Programmes offered are accredited by NBA."
    },
    {
      title: "100% ragging free environment",
      description: "Approved by AICTE and permanently affiliated to JNTUK."
    },
    {
      title: "Outcome Based Education forms the basis for the entire learning system",
      description: "Industrial Internship Support and guidance for getting paid Internships."
    },
    {
      title: "Entrepreneurship support to the students to kick start their Ideas",
      description: "Active NSS and NCC Wings to inculcate Social Responsibility."
    },
    {
      title: "Strong Training and Placement cell for nurturing students and making them employable",
      description: "Technical/Professional Societies for learning beyond Classroom."
    },
    {
      title: "Cultural/Hobby Clubs for all round Development of the students",
      description: ""
    }
  ];

  return (
    <div className="py-12 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        {/* About Header */}
        <div className="bg-muted/50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            PVP Siddhartha Institute of Technology, established in 1998, is a pioneering Institute
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            out of the 18 Academic Institutions run under the aegis of the premier Organization,{" "}
            <span className="text-accent font-semibold">
              Siddhartha Academy of General & Technical Education, Vijayawada.
            </span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    Feature {index + 1}
                  </Badge>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  {feature.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};