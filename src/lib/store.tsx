import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, MathEnglishLevel, LanguageMode } from '../types';

export type Role = 'STUDENT' | 'TEACHER';

interface AppContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
  currentRole: Role;
  setRole: (role: Role) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedGrade: number;
  setSelectedGrade: (grade: number) => void;
  selectedLessonId: string | null;
  setSelectedLessonId: (id: string | null) => void;
  selectedLessonSubTab: string;
  setSelectedLessonSubTab: (subTab: string) => void;
  languageMode: LanguageMode;
  setLanguageMode: (mode: LanguageMode) => void;
  currentLevel: MathEnglishLevel;
  setCurrentLevel: (level: MathEnglishLevel) => void;
  loginAsRole: (role: 'student' | 'teacher' | 'admin') => Promise<void>;
  logout: () => void;
  notification: string | null;
  showNotification: (msg: string) => void;
  clearNotification: () => void;
  refreshUserData: () => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>({
    id: 'usr-student-1',
    full_name: 'Nguyễn Văn An',
    email: 'student@mathbridge.edu.vn',
    role: 'student',
    school_name: 'THPT Ngô Quyền',
    grade_id: 10,
    current_level: 2,
    xp: 450,
    streak_days: 5,
  });

  const [currentRole, setRoleState] = useState<Role>('STUDENT');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [selectedGrade, setSelectedGrade] = useState<number>(10);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>('les-10-6-2');
  const [selectedLessonSubTab, setSelectedLessonSubTab] = useState<string>('theory');
  const [languageMode, setLanguageMode] = useState<LanguageMode>('BILINGUAL');
  const [currentLevel, setCurrentLevel] = useState<MathEnglishLevel>(2);
  const [notification, setNotification] = useState<string | null>(null);

  const setRole = (role: Role) => {
    setRoleState(role);
    if (role === 'TEACHER') {
      setActiveTab('teacher-dashboard');
    } else {
      setActiveTab('dashboard');
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const loginAsRole = async (role: 'student' | 'teacher' | 'admin') => {
    const emailMap = {
      student: 'student@mathbridge.edu.vn',
      teacher: 'teacher@mathbridge.edu.vn',
      admin: 'admin@mathbridge.edu.vn',
    };
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailMap[role], password: 'demo' }),
      });
      const data = await res.json();
      if (data.user) {
        setUser(data.user);
        if (data.user.role === 'teacher') {
          setRoleState('TEACHER');
          setActiveTab('teacher-dashboard');
        } else {
          setRoleState('STUDENT');
          setActiveTab('dashboard');
        }
        if (data.user.current_level) {
          setCurrentLevel(data.user.current_level);
        }
        showNotification(`Đã chuyển sang vai trò: ${data.user.full_name} (${role.toUpperCase()})`);
      }
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  const refreshUserData = async () => {
    if (!user) return;
    try {
      const res = await fetch('/api/auth/me', {
        headers: { 'x-user-id': user.id },
      });
      const data = await res.json();
      if (data.user) {
        setUser(data.user);
      }
    } catch (e) {
      console.error('Refresh user error:', e);
    }
  };

  const logout = () => {
    setUser(null);
    showNotification('Đã đăng xuất khỏi hệ thống');
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        currentRole,
        setRole,
        activeTab,
        setActiveTab,
        selectedGrade,
        setSelectedGrade,
        selectedLessonId,
        setSelectedLessonId,
        selectedLessonSubTab,
        setSelectedLessonSubTab,
        languageMode,
        setLanguageMode,
        currentLevel,
        setCurrentLevel,
        loginAsRole,
        logout,
        notification,
        showNotification,
        clearNotification,
        refreshUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppStore must be used within an AppProvider');
  }
  return context;
};
