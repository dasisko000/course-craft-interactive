
import React from 'react';
import { Clock, Circle, BookOpen } from 'lucide-react';
import { Course } from '../data/courses';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface CourseCardProps {
  course: Course;
  onCourseClick: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onCourseClick }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-electric-emerald';
      case 'Intermediate': return 'text-electric-amber';
      case 'Advanced': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="course-card group">
      <div className="relative mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-lg flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-electric-blue/60" />
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium glass ${getDifficultyColor(course.difficulty)}`}>
            {course.difficulty}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg mb-1 group-hover:gradient-text transition-all">
            {course.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Circle className="w-4 h-4" />
            <span>{course.sessions.length} sessions</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Progress</span>
            <span className="text-electric-emerald">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>

        <Button 
          onClick={() => onCourseClick(course)}
          className="w-full bg-gradient-to-r from-electric-blue to-electric-purple hover:from-electric-blue/80 hover:to-electric-purple/80 transition-all duration-300"
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
};
