import { Calendar, Users, TrendingUp, Settings, User, Eye, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { icon: Calendar, label: "Events", count: 3, active: false },
  { icon: Users, label: "Mentorship", count: null, active: false },
  { icon: GitBranch, label: "Career Paths", count: null, active: false },
  { icon: Settings, label: "Settings", count: null, active: false }
];

const profileStats = [
  { label: "Profile views", value: 127 },
  { label: "Connections", value: 89 },
  { label: "Mentoring", value: "5 students" }
];

const trendingTopics = [
  "#TechCareers",
  "#AlumniMeetup", 
  "#DataScience"
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start gap-3 h-10 ${
                item.active ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <Badge variant="secondary" className="bg-sidebar-accent text-sidebar-accent-foreground">
                  {item.count}
                </Badge>
              )}
            </Button>
          ))}
        </nav>

        <Separator className="bg-sidebar-border" />

        {/* Your Profile Section */}
        <Card className="bg-sidebar-accent/30 border-sidebar-border">
          <CardContent className="p-4">
            <h3 className="font-semibold text-sidebar-foreground mb-3">Your Profile</h3>
            <div className="space-y-3">
              {profileStats.map((stat) => (
                <div key={stat.label} className="flex justify-between items-center">
                  <span className="text-sm text-sidebar-foreground/70">{stat.label}</span>
                  <span className="font-semibold text-sidebar-primary">{stat.value}</span>
                </div>
              ))}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-4 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <User className="h-4 w-4 mr-2" />
              View Profile
            </Button>
          </CardContent>
        </Card>

        {/* Trending Section */}
        <div>
          <h3 className="font-semibold text-sidebar-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Trending
          </h3>
          <div className="space-y-2">
            {trendingTopics.map((topic) => (
              <Button
                key={topic}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-primary hover:bg-sidebar-accent/50"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};