import { Search, Bell, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PA</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">PVPSIT</h1>
              <p className="text-sm text-muted-foreground -mt-1">ALUMNI</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Connect
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Events
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Forums
            </Button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search alumni, students, events..." 
              className="pl-10 bg-secondary/50 border-none focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs">
              5
            </Badge>
          </Button>

          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Join Now
          </Button>

          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};