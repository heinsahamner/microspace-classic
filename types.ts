import { LucideIcon } from 'lucide-react';
import React from 'react';

export enum CourseType {
  ADM = 'ADM',
  INFO = 'INFO'
}

export enum SectionType {
  CONTENT = 'Content',
  TESTS = 'Tests'
}

export enum YearLevel {
  FIRST = '1-Ano',
  SECOND = '2-Ano',
  THIRD = '3-Ano'
}

// Definition for the "Card" entry in the registry
export interface RegistryEntry {
  path: string; // The full URL path (e.g., /Content/INFO/1-Ano/hardware)
  slug: string; // The file name identifier
  type: SectionType;
  course: CourseType;
  year: YearLevel;
  meta: {
    title: string;
    description: string;
    author: string;
    date: string;
    icon?: LucideIcon; // Optional, defaults to generic based on type
  };
  component: React.LazyExoticComponent<React.FC>; // Lazy loaded component
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isOpen: boolean) => void;
  isAboutOpen: boolean;
  setIsAboutOpen: (isOpen: boolean) => void;
}
