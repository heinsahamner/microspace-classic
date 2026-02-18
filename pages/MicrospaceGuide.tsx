import React from 'react';
import { BookOpen, Github, Code, FileText, Hash, Terminal, Image, PenTool, Layout } from 'lucide-react';
import MarkdownRenderer from '../components/UI/MarkdownRenderer';

const MicrospaceGuide: React.FC = () => {
  
  const demoContent = `
# Exemplo Completo
Este é um guia de estilo. Use **negrito** para ideias principais e *itálico* para destaques sutis.

---

## Imagens e Mídia
Você pode inserir imagens facilmente:
![Legenda da Imagem](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)

## Códigos e Listas

> "A simplicidade é o último grau de sofisticação."

1. Primeiro passo
2. Segundo passo

\`\`\`javascript
const microspace = "Classic";
console.log(microspace);
\`\`\`
  `;

  return (
    <div className="animate-fade-in-up pb-12">
      <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-white/10 p-8 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent blur-xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full"></div>
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-accent to-purple-600 text-white shadow-xl transform rotate-3 transition-transform group-hover:rotate-6">
              <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Guia de Publicação</h1>
            <p className="text-xl text-slate-600 dark:text-gray-300 max-w-2xl">
              Crie conteúdos educativos imersivos com nosso sistema de design. Simples como escrever texto, bonito como uma aplicação profissional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" /> Markdown
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400">Sintaxe padrão universal. Escreva uma vez, funcione em qualquer lugar.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                    <Layout className="w-4 h-4 text-accent" /> Glassmorphism
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400">Visual moderno aplicado automaticamente aos elementos.</p>
            </div>
             <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-accent/30 transition-colors">
                <h3 className="font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-accent" /> Temático
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400">As cores se adaptam ao curso e ao tema escolhido pelo usuário.</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-8">
          
          <section className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-white/50 dark:border-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-accent/20 text-accent"><Hash className="w-5 h-5" /></span>
              Elementos de Texto
            </h2>
            
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-b border-slate-200 dark:border-white/5 pb-6">
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Hierarquia</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">Títulos criam a estrutura da página.</p>
                  <code className="block bg-slate-100 dark:bg-black/30 p-3 rounded-lg text-sm font-mono text-slate-600 dark:text-cyan-300">
                    # Título Principal<br/>
                    ## Seção Importante<br/>
                    ### Subseção
                  </code>
                </div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">Título Principal</div>
                  <div className="text-lg font-semibold text-slate-800 dark:text-white mt-3 flex items-center gap-2"><span className="w-1 h-4 bg-accent rounded-full"></span>Seção Importante</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-b border-slate-200 dark:border-white/5 pb-6">
                 <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Ênfase e Código</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">Destaque conceitos e trechos técnicos.</p>
                  <code className="block bg-slate-100 dark:bg-black/30 p-3 rounded-lg text-sm font-mono text-slate-600 dark:text-cyan-300">
                    **Negrito** e *Itálico*<br/>
                    `inline code`<br/>
                    ```<br/>
                    Bloco de Código<br/>
                    ```
                  </code>
                </div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-300 space-y-2">
                  <div><span className="font-bold text-slate-800 dark:text-white">Negrito</span> e <span className="text-accent italic bg-accent/5 px-1 rounded">Itálico</span></div>
                  <div><span className="bg-slate-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-pink-500 font-bold">inline code</span></div>
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pb-2">
                 <div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Listas e Citações</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mb-3">Organize o fluxo de leitura.</p>
                  <code className="block bg-slate-100 dark:bg-black/30 p-3 rounded-lg text-sm font-mono text-slate-600 dark:text-cyan-300">
                    - Tópico não ordenado<br/>
                    1. Passo sequencial<br/>
                    <br/>
                    > Citação importante
                  </code>
                </div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-300">
                   <ul className="list-disc ml-4 marker:text-accent mb-2"><li>Tópico não ordenado</li></ul>
                   <div className="p-3 bg-accent/5 border-l-4 border-accent rounded-r-lg italic text-sm">Citação importante</div>
                </div>
              </div>

            </div>
          </section>

          <section className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-white/50 dark:border-white/10 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
              <span className="p-2 rounded-lg bg-accent/20 text-accent"><Image className="w-5 h-5" /></span>
              Imagens e Mídia
            </h2>
            <p className="text-slate-600 dark:text-gray-300 mb-4">
              Imagens são renderizadas com bordas arredondadas, sombras e suporte a legendas. Utilize o formato padrão.
            </p>
            
            <div className="bg-slate-900 rounded-xl p-4 mb-6 overflow-x-auto">
               <code className="text-cyan-300 font-mono text-sm">![Descrição da Imagem para Acessibilidade](https://link-da-imagem.jpg)</code>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700/30 p-4 rounded-xl flex gap-3">
               <div className="shrink-0 pt-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div></div>
               <p className="text-sm text-yellow-800 dark:text-yellow-200">
                 <strong>Dica:</strong> O texto dentro dos colchetes `[]` será exibido como uma legenda estilizada logo abaixo da imagem.
               </p>
            </div>
          </section>

           <section className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-3xl border border-white/50 dark:border-white/10 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Preview do Resultado</h2>
              <div className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-slate-100 dark:bg-black/30 p-3 border-b border-slate-200 dark:border-white/10 flex items-center gap-2">
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <span className="text-xs text-slate-400 ml-2">Visualização em Tempo Real</span>
                </div>
                <div className="p-6 bg-white/50 dark:bg-transparent">
                  <MarkdownRenderer content={demoContent} />
                </div>
              </div>
           </section>
        </div>

        <div className="space-y-6">
          <div className="sticky top-24 space-y-6">
            
            <div className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md">
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-4">Recursos</h3>
              
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all group">
                  <div className="p-2.5 rounded-lg bg-black text-white dark:bg-white dark:text-black shadow-lg">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 dark:text-white">Repositório</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">Faça um fork do projeto</div>
                  </div>
                </a>

                <a href="#" className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/5 transition-all group">
                  <div className="p-2.5 rounded-lg bg-cyan-500 text-white shadow-lg shadow-cyan-500/30">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 dark:text-white">CLI Tool</div>
                    <div className="text-xs text-slate-500 dark:text-gray-400">Gerador automático de arquivos</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm">
              <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2">
                Boas Práticas
              </h3>
              <ul className="space-y-2 text-sm text-purple-900 dark:text-purple-100/80">
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Use imagens de alta resolução (Unsplash).
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Divida textos longos com subtítulos.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-400">•</span>
                  Revise a ortografia antes de publicar.
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default MicrospaceGuide;