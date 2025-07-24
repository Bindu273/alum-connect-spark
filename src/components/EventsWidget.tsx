import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Career Fair",
    date: "Dec 18",
    time: "2:00 PM",
    location: "PVPSIT Student Center",
    attendees: 89,
    type: "Career"
  },
  {
    id: 2,
    title: "Alumni Mentorship Speed Dating",
    date: "Dec 20",
    time: "6:00 PM",
    location: "Virtual",
    attendees: 45,
    type: "Networking"
  },
  {
    id: 3,
    title: "Year-End Celebration",
    date: "Dec 22",
    time: "7:00 PM",
    location: "PVPSIT Alumni Hall",
    attendees: 156,
    type: "Social"
  }
];

const calendarDays = [
  { day: 'S', date: 1 },
  { day: 'M', date: 2 },
  { day: 'T', date: 3 },
  { day: 'W', date: 4 },
  { day: 'T', date: 5 },
  { day: 'F', date: 6 },
  { day: 'S', date: 7 },
  { day: 'S', date: 8 },
  { day: 'M', date: 9 },
  { day: 'T', date: 10 },
  { day: 'W', date: 11 },
  { day: 'T', date: 12 },
  { day: 'F', date: 13 },
  { day: 'S', date: 14 },
  { day: 'S', date: 15, hasEvent: true },
  { day: 'M', date: 16 },
  { day: 'T', date: 17 },
  { day: 'W', date: 18, hasEvent: true },
  { day: 'T', date: 19 },
  { day: 'F', date: 20, hasEvent: true },
  { day: 'S', date: 21 },
  { day: 'S', date: 22, hasEvent: true },
  { day: 'M', date: 23 },
  { day: 'T', date: 24 },
  { day: 'W', date: 25 },
  { day: 'T', date: 26 },
  { day: 'F', date: 27 },
  { day: 'S', date: 28 },
];

export const EventsWidget = () => {
  return (
    <div className="space-y-6">
      {/* Upcoming Events */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-gradient-subtle hover:bg-secondary/70 transition-colors cursor-pointer"
            >
              <div className="text-center min-w-[48px]">
                <div className="text-lg font-bold text-primary">{event.date.split(' ')[1]}</div>
                <div className="text-xs text-muted-foreground uppercase">{event.date.split(' ')[0]}</div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground truncate mb-1">
                  {event.title}
                </h4>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                <Badge variant="outline" className="mt-2 text-xs">
                  {event.type}
                </Badge>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full mt-4" size="sm">
            View All Events
          </Button>
        </CardContent>
      </Card>

      {/* Mini Calendar */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">December 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`
                  text-center text-xs p-2 rounded cursor-pointer transition-colors
                  ${day.hasEvent 
                    ? 'bg-primary text-primary-foreground font-semibold hover:bg-primary/90' 
                    : 'hover:bg-secondary text-foreground'
                  }
                `}
              >
                {day.date}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded"></div>
            <span>Events scheduled</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Community Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Active Alumni</span>
            <span className="font-semibold text-primary">2,847</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Current Students</span>
            <span className="font-semibold text-primary">1,293</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Mentorships Active</span>
            <span className="font-semibold text-accent">156</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">This Month's Events</span>
            <span className="font-semibold text-accent">12</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};