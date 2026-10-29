# Skills de diseño y páginas web para Claude Code

Copiá `.claude/skills/` a la raíz de tu repo (o a `~/.claude/skills/` para todos tus proyectos).
Claude las usa solo cuando corresponde; con /nombre las forzás.

## Diseño visual
- /impeccable — diseña, audita y pule UI (audit, polish, bolder, typeset, animate…)  [pbakaus/impeccable]
- /ui-ux-pro-max — base de estilos, paletas, fuentes y patrones UX  [nextlevelbuilder/ui-ux-pro-max-skill]
- /frontend-design — diseño con estética propia, no genérica  [anthropics/skills]
- /design-taste-frontend — diseño "con buen gusto", premium  [leonxlnx/taste-skill]
- /apple-design — estilo y detalles a lo Apple  [emilkowalski/skills]
- /animate — animaciones y microinteracciones  [emilkowalski/skills]

## Sistemas de diseño
- /theme-factory — temas de color y tipografía listos  [anthropics/skills]
- /tailwind-design-system — design system con Tailwind  [wshobson/agents]
- /extract-design-system — copia el sistema de diseño de un sitio que te guste  [arvindrk/extract-design-system]

## Código y calidad
- /web-artifacts-builder — sitios con React + Tailwind + shadcn  [anthropics/skills]
- /vercel-react-best-practices — React/Next.js rápido y bien hecho  [vercel-labs/agent-skills]
- /web-design-guidelines — revisa UI, accesibilidad y UX  [vercel-labs/agent-skills]
- /modern-web-guidance — APIs web modernas  [GoogleChrome]
- /webapp-testing — prueba la página con Playwright y saca capturas  [anthropics/skills]

## SEO  [searchfit-seo]
- /seo-audit, /on-page-seo, /technical-seo, /schema-markup, /broken-links

Algunas usan Python o Node (ui-ux-pro-max, webapp-testing); Claude Code los instala si hacen falta.

## Otras
- /benjamin-youtube — tu skill de arneses agénticos y automatización
- /deep-research — investigación a fondo con informe final
- /skill-creator — crear y mejorar tus propias skills

## Extra opcional (Word, PDF, PowerPoint, Excel)
Dentro de Claude Code:
  /plugin marketplace add anthropics/skills
  /plugin install document-skills@anthropic-agent-skills
