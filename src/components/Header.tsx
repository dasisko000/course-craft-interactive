
import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header: React.FC = () => {
  return (
    <header className="glass border-b border-white/10 p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 flex-1">
          <h1 className="text-2xl font-bold gradient-text">
            Course Craft
          </h1>
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses, sessions, or content..."
              className="pl-10 glass border-white/20 focus:border-electric-blue/50"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="hover-glow">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-glow">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
