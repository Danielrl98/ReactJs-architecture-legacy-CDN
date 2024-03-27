import { components } from './import/components.js'
import { dependencies } from './import/dependencies.js';
import { defaultApp } from './import/default.js';
import { css } from './import/css.js';

dependencies.forEach(e => loadJSX(e))
defaultApp.forEach(e => loadJSX(e))
components.forEach(e => loadJSX(e))
css.forEach(e => loadCss(e))

function loadJSX(url) {
  const script = document.createElement('script');
  script.src = url;
  script.type = 'text/babel';
  document.body.appendChild(script);
}
function loadCss(url){
  const style = document.createElement('link');
  style.href = url;
  style.rel = 'stylesheet';
  document.head.appendChild(style);
}


