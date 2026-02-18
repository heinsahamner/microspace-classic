import React from 'react';
import { RegistryEntry, CourseType, SectionType, YearLevel } from '../types';

/* 
  =============================================================================
  MICROSPACE REGISTRY (O ARQUIVÃO)
  =============================================================================
  
  Instruções caso você esteja publicando algo:
  1. Use a ferramenta CLI para gerar sua página: `node scripts/create-page.js`
  2. A CLI vai gerar um código de registro.
  3. Cole esse código dentro da lista `REGISTRY` abaixo.
  4. O site atualizará automaticamente.
*/

// Importação "Lazy" dos componentes (Adicione seus imports aqui se a CLI não fizer auto-import)
// A CLI gera imports assim:
const HardwareExample = React.lazy(() => import('../pages/Content/INFO/1-Ano/HardwareExample'));


export const REGISTRY: RegistryEntry[] = [
  // --- COLE SEUS CARDS AQUI EMBAIXO ---
  
  {
    path: '/Content/INFO/1-Ano/hardware-example',
    slug: 'hardware-example',
    type: SectionType.CONTENT,
    course: CourseType.INFO,
    year: YearLevel.FIRST,
    meta: {
      title: "Fundamentos de Hardware (Exemplo)",
      description: "Uma aula demonstrativa gerada pelo novo sistema de arquivos.",
      author: "Sistema",
      date: "2026-02-17"
    },
    component: HardwareExample
  },

  // --- FIM DOS CARDS ---
];

// Helper Functions para o Roteador encontrar as coisas
export const getRegistryByPath = (pathname: string) => {
  return REGISTRY.find(entry => entry.path.toLowerCase() === pathname.toLowerCase());
};

export const getRegistryList = (type: string, course: string, year: string) => {
  return REGISTRY.filter(entry => 
    entry.type.toLowerCase() === type.toLowerCase() &&
    entry.course.toLowerCase() === course.toLowerCase() &&
    entry.year.toLowerCase() === year.toLowerCase()
  );
};
