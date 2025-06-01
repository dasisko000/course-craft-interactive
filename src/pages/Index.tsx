
import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { CourseCard } from '../components/CourseCard';
import { AIContentGenerator } from '../components/AIContentGenerator';
import { courses, Course } from '../data/courses';
import { Button } from '@/components/ui/button';
import { BookOpen, Search, Calendar } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'ai-generator' | 'progress'>('courses');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    console.log('Selected course:', course);
  };

  const totalProgress = Math.round(
    courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  );

  const completedSessions = courses.reduce(
    (acc, course) => acc + course.sessions.filter(s => s.completed).length, 
    0
  );

  const totalSessions = courses.reduce((acc, course) => acc + course.sessions.length, 0);

  const renderContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold gradient-text">My Courses</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="glass border-white/20">
                  <Search className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onCourseClick={handleCourseClick}
                />
              ))}
            </div>
          </div>
        );

      case 'ai-generator':
        return <AIContentGenerator />;

      case 'progress':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold gradient-text">Learning Progress</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{totalProgress}%</div>
                <p className="text-gray-400">Overall Progress</p>
              </div>
              
              <div className="glass-card text-center">
                <div className="text-3xl font-bold text-electric-emerald mb-2">
                  {completedSessions}
                </div>
                <p className="text-gray-400">Sessions Completed</p>
              </div>
              
              <div className="glass-card text-center">
                <div className="text-3xl font-bold text-electric-amber mb-2">
                  {totalSessions - completedSessions}
                </div>
                <p className="text-gray-400">Sessions Remaining</p>
              </div>
            </div>

            <div className="glass-card">
              <h3 className="font-semibold text-lg mb-4">Course Progress</h3>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-400">
                        {course.sessions.filter(s => s.completed).length}/{course.sessions.length} sessions
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-electric-emerald">
                        {course.progress}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="glass-card mb-8 text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Welcome to Course Craft Interactive
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Transform your learning journey with AI-powered course interactions
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-blue">{courses.length}</div>
              <div className="text-sm text-gray-400">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-purple">{totalSessions}</div>
              <div className="text-sm text-gray-400">Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-electric-emerald">{totalProgress}%</div>
              <div className="text-sm text-gray-400">Progress</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 p-1 glass rounded-lg mb-8 w-fit">
          <Button
            onClick={() => setActiveTab('courses')}
            variant={activeTab === 'courses' ? 'default' : 'ghost'}
            className={`${
              activeTab === 'courses'
                ? 'bg-gradient-to-r from-electric-blue to-electric-purple'
                : 'hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Courses
          </Button>
          <Button
            onClick={() => setActiveTab('ai-generator')}
            variant={activeTab === 'ai-generator' ? 'default' : 'ghost'}
            className={`${
              activeTab === 'ai-generator'
                ? 'bg-gradient-to-r from-electric-blue to-electric-purple'
                : 'hover:bg-white/10'
            }`}
          >
            <Search className="w-4 h-4 mr-2" />
            AI Generator
          </Button>
          <Button
            onClick={() => setActiveTab('progress')}
            variant={activeTab === 'progress' ? 'default' : 'ghost'}
            className={`${
              activeTab === 'progress'
                ? 'bg-gradient-to-r from-electric-blue to-electric-purple'
                : 'hover:bg-white/10'
            }`}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Progress
          </Button>
        </div>

        {/* Main Content */}
        {renderContent()}
      </div>
    </Layout>
  );
};

export default Index;
