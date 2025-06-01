
import React, { useState } from 'react';
import { FileText, Search, BookOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { courses } from '../data/courses';

interface AIGeneratorOption {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

const generatorOptions: AIGeneratorOption[] = [
  {
    id: 'summarize',
    title: 'SUMMARIZE',
    description: 'Extract key concepts and main points',
    icon: FileText,
    color: 'from-electric-blue to-blue-400'
  },
  {
    id: 'quiz',
    title: 'QUIZ ME',
    description: 'Generate interactive questions',
    icon: Search,
    color: 'from-electric-purple to-purple-400'
  },
  {
    id: 'mindmap',
    title: 'MIND MAP',
    description: 'Create visual knowledge maps',
    icon: BookOpen,
    color: 'from-electric-emerald to-emerald-400'
  }
];

export const AIContentGenerator: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [chatInput, setChatInput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (!selectedOption || !selectedCourse) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      console.log(`Generating ${selectedOption} for course ${selectedCourse}`);
    }, 2000);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    
    console.log('Chat message:', chatInput);
    setChatInput('');
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          AI Content Generator Hub
        </h2>
        <p className="text-gray-400">
          Transform your course content into interactive learning experiences
        </p>
      </div>

      {/* AI Generation Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {generatorOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`glass-card cursor-pointer transition-all duration-300 ${
              selectedOption === option.id 
                ? 'ring-2 ring-electric-blue shadow-2xl shadow-electric-blue/20' 
                : 'hover:shadow-xl hover:shadow-white/10'
            }`}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} mb-4 flex items-center justify-center`}>
              <option.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
            <p className="text-gray-400 text-sm">{option.description}</p>
          </div>
        ))}
      </div>

      {/* Course Selection and Generation */}
      {selectedOption && (
        <div className="glass-card animate-fade-in">
          <h3 className="font-semibold text-lg mb-4">Configure Generation</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Course</label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="glass border-white/20">
                  <SelectValue placeholder="Choose a course..." />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!selectedCourse || isGenerating}
              className="w-full bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/80 hover:to-electric-purple/80"
            >
              {isGenerating ? 'Generating...' : `Generate ${selectedOption.toUpperCase()}`}
            </Button>
          </div>
        </div>
      )}

      {/* Chatbot Section */}
      <div className="glass-card">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-electric-amber to-orange-400 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-semibold text-lg">AI Learning Assistant</h3>
        </div>
        
        <form onSubmit={handleChatSubmit} className="space-y-3">
          <Textarea
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask me anything about your courses, request explanations, or get learning suggestions..."
            className="glass border-white/20 min-h-[100px] resize-none"
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-electric-amber to-orange-400 hover:from-electric-amber/80 hover:to-orange-400/80"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};
