import { Briefcase, Monitor, BookOpen, FileCheck, Calendar, Users, BarChart } from 'lucide-react';
import { CourseType, SectionType, YearLevel } from './types';

export const getCourseData = () => [
  {
    id: CourseType.ADM,
    title: "Administração",
    description: "Gestão, Marketing e Finanças",
    icon: Briefcase,
    path: `/${CourseType.ADM}`,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: CourseType.INFO,
    title: "Informática",
    description: "Desenvolvimento, Redes e Hardware",
    icon: Monitor,
    path: `/${CourseType.INFO}`,
    gradient: "from-emerald-500 to-cyan-600"
  }
];

export const getCategoryData = (courseId: string) => [
  {
    id: SectionType.CONTENT,
    title: "Conteúdos",
    description: "Apostilas e materiais de estudo",
    icon: BookOpen,
    path: `/${courseId}/${SectionType.CONTENT}`,
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: SectionType.TESTS,
    title: "Testes",
    description: "Simulados e avaliações",
    icon: FileCheck,
    path: `/${courseId}/${SectionType.TESTS}`,
    gradient: "from-pink-500 to-rose-600"
  }
];

export const getYearData = (courseId: string, typeId: string) => [
  {
    id: YearLevel.FIRST,
    title: "Primeiro Ano",
    description: "Fundamentos e Introdução",
    icon: Calendar,
    path: `/${typeId}/${courseId}/${YearLevel.FIRST}`, 
    gradient: "from-violet-500 to-purple-500"
  },
  {
    id: YearLevel.SECOND,
    title: "Segundo Ano",
    description: "Aprofundamento Técnico",
    icon: Users,
    path: `/${typeId}/${courseId}/${YearLevel.SECOND}`,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    id: YearLevel.THIRD,
    title: "Terceiro Ano",
    description: "Projetos e Conclusão",
    icon: BarChart,
    path: `/${typeId}/${courseId}/${YearLevel.THIRD}`,
    gradient: "from-fuchsia-500 to-pink-500"
  }
];

// O conteúdo é gerenciado por utils/ContentRegistry.tsx e pages/Content/...
