# Site da Clínica Veterinária

## Objetivo
Construir um site institucional acolhedor e profissional para uma clínica veterinária completa, destacando banho e tosa, exames, cirurgias e creche, com contato direto pelo WhatsApp e transmissão de confiança.

## Direção visual escolhida
**Translucent Warming**: paleta em tons de creme, verde-sálvia suave e âmbar, tipografia Fraunces (títulos) + Sofia Sans (corpo), cards translúcidos com blur, animações suaves de entrada e sensação de acolhimento clínico.

## Estrutura do site
```text
/
├── Header fixo com navegação (Início, Banho e Tosa, Exames, Cirurgia, Creche, Contato)
├── Hero: headline acolhedora, apresentação da clínica, imagem de veterinário com pet e CTA para WhatsApp
├── Banho e Tosa: apresentação dos cuidados de higiene e estética
├── Exames: exames laboratoriais e diagnósticos específicos
├── Cirurgia: estrutura, segurança e acompanhamento
├── Creche: rotina, socialização e bem-estar
├── Contato: dados essenciais e botão direto para WhatsApp
└── Footer simples com logo e copyright
```

## Páginas
- `/` — landing page completa com todas as seções acima.

## Tecnologia
- TanStack Start + React + TypeScript
- Tailwind CSS v4 com tokens semânticos no `src/styles.css`
- Fontes carregadas via Google Fonts no `src/routes/__root.tsx`
- Imagens geradas por IA para a apresentação da clínica e dos serviços
- Metadados SEO (`head()`) na rota `/`

## Tarefas
1. Atualizar tokens de cor e tipografia no `src/styles.css` com a paleta Translucent Warming.
2. Carregar fontes Fraunces e Sofia Sans no `<head>` do `__root.tsx`.
3. Gerar imagens para a apresentação principal e os serviços da clínica.
4. Reescrever `src/routes/index.tsx` com as seções Início, Banho e Tosa, Exames, Cirurgia, Creche e Contato.
5. Adicionar metadados de SEO na rota `/`.
6. Configurar todos os chamados de contato para abrir uma conversa no WhatsApp.
7. Verificar responsividade e build.

## Decisões pendentes
- Nome final da clínica: usarei "Vila Serena" como placeholder (baseado na direção); o usuário pode substituir depois.
- Número do WhatsApp e endereço serão placeholders realistas; o usuário pode substituir depois.
- Não haverá depoimentos, seção de tutores ou formulário de contato.
