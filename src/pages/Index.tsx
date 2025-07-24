import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ActivityFeed } from "@/components/ActivityFeed";
import { EventsWidget } from "@/components/EventsWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Main Content Area */}
              <div className="xl:col-span-2">
                <ActivityFeed />
              </div>
              
              {/* Right Sidebar */}
              <div className="xl:col-span-1">
                <EventsWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
