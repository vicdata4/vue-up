import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-liquid';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-scss';
import 'prismjs/themes/prism.css';

export const pageInit = () => {
    const menu = document.querySelector('.menu-bar');
    
    if(menu) {
        menu.classList.remove('show');
    }

    document.querySelector('.section-container').scrollTo({ top: 0, behavior: 'smooth' });
    Prism.highlightAll();
};