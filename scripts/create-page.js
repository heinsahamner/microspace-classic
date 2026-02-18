/*
  Microspace CLI - Gerador de conteúdo
  Rode com: node scripts/create-page.js
  Use cópias dele para gerar múltiplas páginas ou reultilize esse
*/

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  { key: 'type', q: 'Tipo (Content/Tests): ', default: 'Content' },
  { key: 'course', q: 'Curso (ADM/INFO): ', default: 'INFO' },
  { key: 'year', q: 'Ano (1-Ano/2-Ano/3-Ano): ', default: '1-Ano' },
  { key: 'filename', q: 'Nome do Arquivo (sem espaços, ex: AulaLogica): ' },
  { key: 'title', q: 'Título da Aula: ' },
  { key: 'desc', q: 'Descrição Curta: ' },
  { key: 'author', q: 'Autor: ', default: 'Comunidade' }
];

const answers = {};

const ask = (index) => {
  if (index === questions.length) {
    generateFiles();
    rl.close();
    return;
  }

  const current = questions[index];
  rl.question(`${current.q}${current.default ? `[${current.default}] ` : ''}`, (ans) => {
    answers[current.key] = ans.trim() || current.default;
    
    // Validação básica
    if (!answers[current.key] && !current.default) {
      console.log('Campo obrigatório!');
      ask(index);
      return;
    }
    
    ask(index + 1);
  });
};

const generateFiles = () => {
  const { type, course, year, filename, title, desc, author } = answers;
  
  // 1. Se certifica que o diretório existe, pq senão complica
  const targetDir = path.join(__dirname, '..', 'pages', type, course, year);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 2. Criar arquivo de componente (.tsx)
  const filePath = path.join(targetDir, `${filename}.tsx`);
  const componentContent = `import React from 'react';
import MarkdownRenderer from '../../../../components/UI/MarkdownRenderer';

const ${filename}: React.FC = () => {
  const content = \`
# ${title}

Escreva seu conteúdo Markdown aqui...

## Subtítulo
- Tópico 1
- Tópico 2

::: tip
Edite este arquivo em: pages/${type}/${course}/${year}/${filename}.tsx
:::
\`;

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
       <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            <MarkdownRenderer content={content} />
          </div>
       </div>
    </div>
  );
};

export default ${filename};
`;

  fs.writeFileSync(filePath, componentContent);
  console.log(`\n✅ Arquivo criado em: ${filePath}`);

  // 3. Gera código para o registro
  const registryCode = `
  // 1. Adicione o import no topo de utils/ContentRegistry.tsx:
  const ${filename} = React.lazy(() => import('../pages/${type}/${course}/${year}/${filename}'));

  // 2. Copie e cole este objeto dentro do array REGISTRY:
  {
    path: '/${type}/${course}/${year}/${filename.toLowerCase()}',
    slug: '${filename.toLowerCase()}',
    type: SectionType.${type.toUpperCase()},
    course: CourseType.${course.toUpperCase()},
    year: YearLevel.${year === '1-Ano' ? 'FIRST' : year === '2-Ano' ? 'SECOND' : 'THIRD'},
    meta: {
      title: "${title}",
      description: "${desc}",
      author: "${author}",
      date: "${new Date().toISOString().split('T')[0]}"
    },
    component: ${filename}
  },
  `;

  console.log('\n==================================================');
  console.log('PRÓXIMO PASSO: Copie o código abaixo para utils/ContentRegistry.tsx');
  console.log('==================================================');
  console.log(registryCode);
  console.log('==================================================\n');
};

console.log('--- Microspace: Gerador de Páginas ---\n');
ask(0);
