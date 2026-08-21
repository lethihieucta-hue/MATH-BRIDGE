import React, { useState } from 'react';
import { useAppStore } from './lib/store';
import { Header } from './components/navigation/Header';
import { MobileNav } from './components/navigation/MobileNav';

// Student Components
import { StudentDashboard } from './components/student/StudentDashboard';
import { VocabularyModule } from './components/student/VocabularyModule';
import { SentencePatternsModule } from './components/student/SentencePatternsModule';
import { BilingualLessonModule } from './components/student/BilingualLessonModule';
import { MathReadingModule } from './components/student/MathReadingModule';
import { PracticeModule } from './components/student/PracticeModule';
import { TestModule } from './components/student/TestModule';
import { StudentProgressView } from './components/student/StudentProgressView';
import { StudentProfile } from './components/student/StudentProfile';
import { InteractiveFunctionGrapher } from './components/math/InteractiveFunctionGrapher';
import { SpeedVocabMatchGame } from './components/student/SpeedVocabMatchGame';

// Teacher Components
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { QuestionBank } from './components/teacher/QuestionBank';
import { ContentStudio } from './components/teacher/ContentStudio';
import { TestBuilder } from './components/teacher/TestBuilder';
import { TeacherAnalytics } from './components/teacher/TeacherAnalytics';

export default function App() {
  const { currentRole, activeTab, setActiveTab, notification, clearNotification } = useAppStore();

  const renderContent = () => {
    if (currentRole === 'TEACHER') {
      switch (activeTab) {
        case 'learn':
          return <BilingualLessonModule />;
        case 'question-bank':
          return <QuestionBank />;
        case 'content-studio':
          return <ContentStudio />;
        case 'test-builder':
          return <TestBuilder />;
        case 'teacher-analytics':
          return <TeacherAnalytics />;
        case 'teacher-dashboard':
          return <TeacherDashboard setActiveTab={setActiveTab} />;
        default:
          return <BilingualLessonModule />;
      }
    }

    // Default: STUDENT
    switch (activeTab) {
      case 'vocabulary':
        return <VocabularyModule />;
      case 'sentences':
        return <SentencePatternsModule />;
      case 'learn':
        return <BilingualLessonModule />;
      case 'reading':
        return <MathReadingModule />;
      case 'grapher':
        return <InteractiveFunctionGrapher />;
      case 'minigame':
        return <SpeedVocabMatchGame />;
      case 'practice':
        return <PracticeModule />;
      case 'tests':
        return <TestModule />;
      case 'progress':
        return <StudentProgressView />;
      case 'profile':
        return <StudentProfile />;
      case 'dashboard':
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-16 md:pb-0">
      {/* Top Header */}
      <Header />

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center justify-between gap-4 animate-bounce">
          <span>{notification}</span>
          <button
            onClick={clearNotification}
            className="text-slate-400 hover:text-white font-bold text-sm"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Container */}
      <main className="transition-all duration-200">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
};
