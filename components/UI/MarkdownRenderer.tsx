import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  const renderLine = (line: string, index: number) => {
    const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      const [_, alt, src] = imageMatch;
      return (
        <figure key={index} className="my-10 animate-fade-in-up">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-white/5">
             <img 
               src={src} 
               alt={alt} 
               className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" 
               loading="lazy"
             />
          </div>
          {alt && (
            <figcaption className="text-center text-sm text-slate-500 dark:text-gray-400 mt-3 font-medium italic">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    }

    if (line.startsWith('# ')) {
      return <h1 key={index} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 mt-10 mb-6 pb-2 border-b border-slate-200 dark:border-white/10">{line.slice(2)}</h1>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="text-2xl font-semibold text-slate-800 dark:text-white mt-8 mb-4 flex items-center gap-3"><span className="w-1.5 h-6 bg-accent rounded-full shadow-[0_0_10px_var(--accent-color)]"></span>{line.slice(3)}</h2>;
    }
    if (line.startsWith('### ')) {
      return <h3 key={index} className="text-xl font-medium text-slate-700 dark:text-cyan-200 mt-6 mb-3">{line.slice(4)}</h3>;
    }

    if (line.trim() === '---') {
      return <hr key={index} className="my-10 border-slate-200 dark:border-white/10" />;
    }

    if (line.startsWith('> ')) {
      return (
        <blockquote key={index} className="p-6 my-6 bg-accent/5 dark:bg-accent/10 border-l-4 border-accent rounded-r-2xl italic text-slate-700 dark:text-slate-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.366 13.567 17.417 13.065V12.831C16.92 12.868 16.488 12.886 16.121 12.886C14.777 12.886 13.725 12.457 12.965 11.599C12.205 10.741 11.825 9.605 11.825 8.191C11.825 6.711 12.35 5.485 13.401 4.513C14.452 3.541 15.753 3.055 17.305 3.055C18.663 3.055 19.835 3.504 20.821 4.402C21.807 5.3 22.3 6.45 22.3 7.852C22.3 9.475 21.936 11.08 21.208 12.667C20.48 14.254 19.463 15.786 18.157 17.263L15.343 20.627L14.017 21ZM4.017 21L4.017 18C4.017 16.896 4.321 15.923 4.929 15.081C5.537 14.239 6.366 13.567 7.417 13.065V12.831C6.92 12.868 6.488 12.886 6.121 12.886C4.777 12.886 3.725 12.457 2.965 11.599C2.205 10.741 1.825 9.605 1.825 8.191C1.825 6.711 2.35 5.485 3.401 4.513C4.452 3.541 5.753 3.055 7.305 3.055C8.663 3.055 9.835 3.504 10.821 4.402C11.807 5.3 12.3 6.45 12.3 7.852C12.3 9.475 11.936 11.08 11.208 12.667C10.48 14.254 9.463 15.786 8.157 17.263L5.343 20.627L4.017 21Z" /></svg>
          </div>
          "{line.slice(2)}"
        </blockquote>
      );
    }

    if (line.startsWith('- ')) {
      return (
        <li key={index} className="ml-6 list-disc marker:text-accent pl-2 mb-2 text-slate-700 dark:text-slate-300 text-lg">
          {parseInline(line.slice(2))}
        </li>
      );
    }

    if (/^\d+\.\s/.test(line)) {
      return (
        <li key={index} className="ml-6 list-decimal marker:text-accent font-medium pl-2 mb-2 text-slate-700 dark:text-slate-300 text-lg">
           {parseInline(line.replace(/^\d+\.\s/, ''))}
        </li>
      );
    }

    if (line.startsWith('```')) {
      return null;
    }

    if (line.trim() === '') {
      return <div key={index} className="h-4"></div>;
    }

    return <p key={index} className="mb-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{parseInline(line)}</p>;
  };

  const parseInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-slate-900 dark:text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="text-accent not-italic font-semibold bg-accent/5 px-1 rounded">{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400 font-bold">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  const renderContent = () => {
    const lines = content.split('\n');
    const nodes = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let inList = false;
    let listItems: React.ReactNode[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          nodes.push(
            <div key={`code-${i}`} className="my-6 rounded-2xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-2 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                  {codeBlockContent.join('\n')}
                </pre>
              </div>
            </div>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        continue;
      }
      if (inCodeBlock) {
        codeBlockContent.push(line);
        continue;
      }

      const isListLine = line.trim().startsWith('- ') || /^\d+\.\s/.test(line.trim());
      
      if (isListLine) {
        if (!inList) inList = true;
        listItems.push(renderLine(line, i)!);
      } else {
        if (inList) {
          nodes.push(<ul key={`list-${i}`} className="my-4 space-y-1">{listItems}</ul>);
          listItems = [];
          inList = false;
        }
        nodes.push(renderLine(line, i));
      }
    }
    
    if (inList) {
       nodes.push(<ul key={`list-end`} className="my-4 space-y-1">{listItems}</ul>);
    }

    return nodes;
  };

  return (
    <div className="markdown-body">
      {renderContent()}
    </div>
  );
};

export default MarkdownRenderer;