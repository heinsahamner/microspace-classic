import React from 'react';
import MarkdownRenderer from '../../../../components/UI/MarkdownRenderer';
import { Calendar, User } from 'lucide-react';

const HardwareExample: React.FC = () => {
  const content = `
# Fundamentos de Hardware

Bem-vindo à aula de montagem e manutenção. Hoje vamos dissecar o computador e entender a função de cada órgão vital dessa máquina.

![Placa mãe moderna](https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

---

## O Conceito de Von Neumann

Para entender hardware moderno, precisamos voltar a 1945. **John von Neumann** propôs uma arquitetura que usamos até hoje.

1. **CPU**: Cérebro.
2. **Memória**: Mesa de trabalho.
3. **I/O**: Comunicação.

::: tip
Esta página é um arquivo físico localizado em \`pages/Content/INFO/1-Ano/HardwareExample.tsx\`.
:::

\`\`\`javascript
console.log("Sistema de Arquivos Funcionando!");
\`\`\`
`;

  return (
    <div className="animate-fade-in-up max-w-4xl mx-auto">
      <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl overflow-hidden">
        
        {/* Header Visual Opcional dentro da página */}
        <div className="p-8 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-black/20">
           <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Fundamentos de Hardware</h1>
           <p className="text-slate-500 dark:text-gray-400 mt-2">Exemplo de página estática.</p>
        </div>

        <div className="p-8 md:p-12">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
};

export default HardwareExample;
