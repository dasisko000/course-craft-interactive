
import React from 'react';
import { Book, BookOpen, Search, Calendar, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: 'courses' | 'ai-generator' | 'progress') => void;
}

const menuItems = [
  { icon: BookOpen, label: 'Dashboard', key: 'courses' },
  { icon: Book, label: 'My Courses', key: 'courses' },
  { icon: Search, label: 'AI Generator', key: 'ai-generator' },
  { icon: Calendar, label: 'Schedule', key: 'progress' },
  { icon: Circle, label: 'Progress', key: 'progress' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-64 glass border-r border-white/10 p-6">
      <div className="space-y-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-electric-purple rounded-xl mx-auto mb-3 flex items-center justify-center animate-glow">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="font-semibold text-lg">Learning Hub</h2>
          <p className="text-sm text-gray-400">8 Courses Available</p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={activeTab === item.key ? "default" : "ghost"}
              className={`w-full justify-start space-x-3 ${
                activeTab === item.key 
                  ? 'bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/80 hover:to-electric-purple/80' 
                  : 'hover:bg-white/10'
              }`}
              onClick={() => onTabChange(item.key as 'courses' | 'ai-generator' | 'progress')}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Button>
          ))}
        </nav>

        <div className="glass-card">
          <h3 className="font-semibold mb-2 gradient-text">Quick Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Progress</span>
              <span className="text-electric-emerald">12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Sessions Completed</span>
              <span className="text-white">3/40</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Study Streak</span>
              <span className="text-electric-amber">5 days</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
