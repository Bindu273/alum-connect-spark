import { Heart, MessageCircle, Share2, Calendar, Users, MapPin, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const feedItems = [
  {
    id: 1,
    type: "event",
    author: {
      name: "Career Development Office",
      avatar: "/placeholder-user.jpg",
      verified: true,
      role: "University"
    },
    content: "Join us for the Annual Alumni Networking Event - Connect with industry leaders and expand your professional network.",
    image: "/lovable-uploads/52ac44b7-a39a-457f-823b-466aea3e38b8.png",
    event: {
      title: "Annual Alumni Networking Event",
      date: "Dec 15, 2024",
      location: "University Main Hall",
      attendees: 156
    },
    engagement: { likes: 42, comments: 8, shares: 12 },
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    type: "post",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder-user.jpg",
      verified: true,
      role: "Software Engineer at Google",
      gradYear: "2019"
    },
    content: "Looking to mentor CS students interested in machine learning! I'd love to share my journey from university to Big Tech. Drop a comment if you're interested! 🚀",
    engagement: { likes: 28, comments: 15, shares: 5 },
    timestamp: "4 hours ago"
  },
  {
    id: 3,
    type: "question",
    author: {
      name: "Alex Rodriguez",
      avatar: "/placeholder-user.jpg",
      verified: false,
      role: "Computer Science Student",
      year: "Junior"
    },
    content: "Any alumni working in cybersecurity? I'm really interested in this field and would love some guidance on getting started. What certifications should I pursue?",
    tags: ["#cybersecurity", "#advice", "#certifications"],
    engagement: { likes: 12, comments: 23, shares: 3 },
    timestamp: "6 hours ago"
  }
];

export const ActivityFeed = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Activity Feed</h2>
        <Button variant="outline" size="sm">
          Filter
        </Button>
      </div>

      {feedItems.map((item) => (
        <Card key={item.id} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={item.author.avatar} alt={item.author.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {item.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{item.author.name}</h3>
                    {item.author.verified && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.author.role}</p>
                  {item.author.gradYear && (
                    <p className="text-xs text-muted-foreground">Class of {item.author.gradYear}</p>
                  )}
                  {item.author.year && (
                    <p className="text-xs text-muted-foreground">{item.author.year}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-foreground mb-4 leading-relaxed">{item.content}</p>

            {item.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-accent border-accent/30 hover:bg-accent/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {item.event && (
              <div className="bg-gradient-subtle rounded-lg p-4 mb-4 border">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{item.event.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{item.event.date}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{item.event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{item.event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                    Register
                  </Button>
                </div>
              </div>
            )}

            {item.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt="Post image" 
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <Heart className="h-4 w-4" />
                  <span>{item.engagement.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>{item.engagement.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>{item.engagement.shares}</span>
                </Button>
              </div>
              
              {item.type === "question" && (
                <Button size="sm" variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
                  Answer
                </Button>
              )}
              
              {item.type === "post" && item.author.role.includes("Engineer") && (
                <Button size="sm" variant="outline" className="text-accent border-accent/30 hover:bg-accent/10">
                  Connect
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};