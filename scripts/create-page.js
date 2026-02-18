/*
  Microspace CLI - Content Generator
  Run with: node scripts/create-page.js
*/

import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';

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
  { key: 'author', q: 'Autor: ', default: 'Comunidade' },
  { key: 'mdPath', q: 'Caminho do arquivo .md (Opcional, Enter para pular): ' }
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
    
    // Validação básica (exceto para mdPath que é opcional)
    if (!answers[current.key] && !current.default && current.key !== 'mdPath') {
      console.log('Campo obrigatório!');
      ask(index);
      return;
    }
    
    ask(index + 1);
  });
};

const generateFiles = () => {
  const { type, course, year, filename, title, desc, author, mdPath } = answers;
  
  // 1. Preparar o conteúdo
  let finalMarkdown = '';

  if (mdPath && fs.existsSync(mdPath)) {
    try {
      console.log(`\n📖 Lendo arquivo Markdown: ${mdPath}`);
      const rawContent = fs.readFileSync(mdPath, 'utf-8');
      // Precisamos escapar crases (backticks) e cifrões para não quebrar a template string do JS
      finalMarkdown = rawContent
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')   
        .replace(/\$/g, '\\$'); 
    } catch (err) {
      console.error('Erro ao ler arquivo MD:', err);
      finalMarkdown = `# ${title}\n\nErro ao importar conteúdo. Edite manualmente.`;
    }
  } else {
    // Conteúdo Padrão se não houver arquivo
    finalMarkdown = `# ${title}

Escreva seu conteúdo Markdown aqui...

## Subtítulo
- Tópico 1
- Tópico 2

::: tip
Edite este arquivo em: pages/${type}/${course}/${year}/${filename}.tsx
:::`;
  }
  
  // 2. Se certifica que o diretório existe
  const targetDir = path.join(__dirname, '..', 'pages', type, course, year);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 3. Criar o .tsx
  const filePath = path.join(targetDir, `${filename}.tsx`);
  const componentContent = // Começa aqui
`import React from 'react';
import MarkdownRenderer from '../../../../components/UI/MarkdownRenderer';

const ${filename}: React.FC = () => {
  const content = \`
${finalMarkdown}
\`;

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
       <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden">
        {/* Header Visual Opcional dentro da página */}
        <div className="p-8 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/20">
           <h1 className="text-3xl font-bold text-slate-800 dark:text-white">${title}</h1>
           <p className="text-slate-500 dark:text-gray-400 mt-2">${desc}</p>
        </div>

          <div className="p-8 md:p-12">
            <MarkdownRenderer content={content} />
          </div>
       </div>
    </div>
  );
};

export default ${filename};
`; // Termina Aqui

  fs.writeFileSync(filePath, componentContent);
  console.log(`\n✅ Arquivo criado em: ${filePath}`);

  // 4. Registro gerado para copiar e colar
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

 //Começo uhul
console.log('--- Microspace: Gerador de Páginas ---\n');
ask(0);