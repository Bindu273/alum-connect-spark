import { Users, Calendar, MessageSquare, BookOpen, TrendingUp, Settings, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  count?: number;
  isActive?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { icon: Users, label: "My Network", count: 24, isActive: true },
  { icon: MessageSquare, label: "Messages", count: 5 },
  { icon: Calendar, label: "Events", count: 3 },
  { icon: BookOpen, label: "Mentorship" },
  { icon: TrendingUp, label: "Career Paths" },
  { icon: Settings, label: "Settings" },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-subtle border-r border-border/50 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Access</h2>
          
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Button
                key={index}
                variant={item.isActive ? "secondary" : "ghost"}
                className={`w-full justify-between h-auto p-3 transition-smooth ${
                  item.isActive 
                    ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" 
                    : "hover:bg-secondary/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.count && (
                    <Badge 
                      variant={item.isActive ? "default" : "secondary"}
                      className="h-5 min-w-[20px] text-xs"
                    >
                      {item.count}
                    </Badge>
                  )}
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </div>
              </Button>
            );
          })}
        </div>

        {/* Profile Summary */}
        <div className="mt-8 p-4 bg-card rounded-lg shadow-card border">
          <h3 className="font-semibold text-sm text-foreground mb-2">Your Profile</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Profile views</span>
              <span className="text-primary font-medium">127</span>
            </div>
            <div className="flex justify-between">
              <span>Connections</span>
              <span className="text-primary font-medium">89</span>
            </div>
            <div className="flex justify-between">
              <span>Mentoring</span>
              <span className="text-accent font-medium">5 students</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
            View Profile
          </Button>
        </div>

        {/* Trending Topics */}
        <div className="mt-6 p-4 bg-card rounded-lg shadow-card border">
          <h3 className="font-semibold text-sm text-foreground mb-3">Trending</h3>
          <div className="space-y-2">
            {["#TechCareers", "#AlumniMeetup", "#DataScience"].map((tag, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="h-auto p-2 w-full justify-start text-xs hover:bg-accent/10 hover:text-accent"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};