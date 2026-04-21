# Avaliação de Perfil Comportamental

Aplicação web para avaliação de perfil comportamental baseada em 25 situações do cotidiano. Ao final, o participante descobre qual dos quatro perfis — **Águia, Gato, Lobo ou Tubarão** — representa o seu modo de agir no mundo.

## Estrutura

```
perfil-comportamental/
├── index.html          # Entrada da aplicação
├── vercel.json         # Configuração de deploy (Vercel)
├── .gitignore
└── src/
    ├── css/
    │   └── styles.css  # Estilos globais
    └── js/
        ├── data.js     # Perguntas e perfis
        └── app.js      # Lógica da aplicação
```

## Como rodar localmente

Basta abrir o `index.html` no navegador — não há dependências ou build necessário.

Para uma experiência melhor com live reload, use a extensão **Live Server** no VS Code ou:

```bash
npx serve .
```

## Deploy na Vercel

1. Suba o projeto no GitHub
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. A Vercel detecta automaticamente o projeto estático — só clicar em **Deploy**

Ou via CLI:

```bash
npm i -g vercel
vercel
```

## Perfis

| Animal   | Estilo         | Palavra-chave     |
|----------|----------------|-------------------|
| 🦅 Águia  | Fazer Diferente | Criativo, Visionário |
| 🐱 Gato   | Fazer Junto     | Empático, Relacional |
| 🐺 Lobo   | Fazer Certo     | Metódico, Organizado |
| 🦈 Tubarão| Fazer Rápido    | Determinado, Prático |

## Personalização

- **Perguntas e perfis:** edite `src/js/data.js`
- **Visual:** edite `src/css/styles.css`
- **Lógica:** edite `src/js/app.js`
