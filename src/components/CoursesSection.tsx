import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Facebook, Linkedin, Twitter } from "lucide-react";

export const CoursesSection = () => {
  const courses = [
    {
      title: "B.Tech - CSE",
      subtitle: "Computer Science Engineering",
      description: "Department of Computer Science and Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "B.Tech - CSE",
      subtitle: "Artificial Intelligence and Machine Learning",
      description: "Department of Computer Science and Engineering",
      code: "PVPSIT", 
      image: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      title: "B.Tech - CSE", 
      subtitle: "Data Science",
      description: "Department of Computer Science and Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      title: "B.Tech - IT",
      subtitle: "Information Technology", 
      description: "Department of Information Technology",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      title: "B.Tech - ECE",
      subtitle: "Electronics and Communication Engineering",
      description: "Department of Electronics and Communication Engineering", 
      code: "PVPSIT",
      image: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      title: "B.Tech - ME",
      subtitle: "Mechanical Engineering",
      description: "Department of Mechanical Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      title: "B.Tech - EEE", 
      subtitle: "Electrical and Electronics Engineering",
      description: "Department of Electrical and Electronics Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      title: "B.Tech - CE",
      subtitle: "Civil Engineering", 
      description: "Department of Civil Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-gray-500 to-gray-600"
    },
    {
      title: "M.Tech",
      subtitle: "Machine Design",
      description: "Department of Mechanical Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      title: "M.Tech",
      subtitle: "Microwave & Communication Engineering", 
      description: "Department of Electronics and Communication Engineering",
      code: "PVPSIT",
      image: "bg-gradient-to-br from-pink-500 to-pink-600"
    },
    {
      title: "MBA",
      subtitle: "Master of Business Administration",
      description: "Department of Management Studies",
      code: "PVPSIT", 
      image: "bg-gradient-to-br from-violet-500 to-violet-600"
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="bg-primary text-primary-foreground rounded-t-lg py-4 px-6 mb-8">
          <h2 className="text-2xl font-bold text-center">Courses Offered</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                {/* Course Image/Icon */}
                <div className={`h-32 ${course.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold mb-1">{course.title.split(' - ')[1]}</div>
                    <div className="text-sm opacity-90">{course.title.split(' - ')[0]}</div>
                  </div>
                  {/* Tech icons overlay */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <div className="text-6xl">⚙️</div>
                  </div>
                </div>
                
                {/* Course Details */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <h4 className="font-semibold text-primary text-sm mb-2">
                    {course.subtitle}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Institution Code */}
                  <div className="text-center mb-4">
                    <span className="text-primary font-bold text-sm">{course.code}</span>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mb-4">
                    <Button size="sm" variant="outline" className="p-2 h-8 w-8">
                      <Facebook className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 h-8 w-8">
                      <Twitter className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 h-8 w-8">
                      <Linkedin className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  {/* Contact Button */}
                  <Button variant="outline" size="sm" className="w-full text-primary border-primary hover:bg-primary/10">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};