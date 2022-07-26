import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import MathReveal from 'reveal.js/plugin/math/math';

// Import theme
import 'reveal.js/dist/theme/black.css';

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
    // App Config
    app: {
        name: 'Reveal.js with Svelte and Vite',
    },
    // Reveal Config
    reveal: {
        plugins: [Highlight, Markdown, MathReveal.MathJax2, MathReveal.KaTeX],
        hash: true,
      mathjax2: {
        config: 'TeX-AMS_HTML-full',
        TeX: {
          Macros: {
            R: '\\mathbb{R}',
            set: [ '\\left\\{#1 \\; ; \\; #2\\right\\}', 2 ]
          }
        }
      },
    },
};
