import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Banner with Success Story */}
      <div className="bg-gradient-hero relative py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  Congratulations
                </Badge>
                <span className="text-white/90">Sriharsha Neelam</span>
              </div>
              
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2">
                  ₹44 <span className="text-3xl">LAKHS</span>
                </div>
                <div className="text-xl font-semibold">Per Annum</div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-2xl font-bold">amazon</span>
                  <div className="bg-yellow-400 text-black px-2 py-1 rounded text-sm font-semibold">
                    ___
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Read Success Stories
              </Button>
            </div>
            
            {/* Right Content - Student Image */}
            <div className="relative">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="w-full h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                    <p className="text-sm">Student Success Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 0 ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/20">
            <button className="py-3 px-4 text-center text-sm font-medium hover:bg-primary-light/20 transition-colors">
              Hallmarks
            </button>
            <button className="py-3 px-4 text-center text-sm font-medium hover:bg-primary-light/20 transition-colors">
              Examination Notifications & Results
            </button>
            <button className="py-3 px-4 text-center text-sm font-medium hover:bg-primary-light/20 transition-colors">
              Circulars
            </button>
            <button className="py-3 px-4 text-center text-sm font-medium hover:bg-primary-light/20 transition-colors">
              News & Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};