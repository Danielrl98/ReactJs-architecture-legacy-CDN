const imports = {
  dependencies: {
    styledComponents: loadJS("//unpkg.com/styled-components@4.0.1/dist/styled-components.min.js"),
    axios: loadJS("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")
  },
  default:{
    app: loadJS("./src/app.jsx"),
    main: loadJS('./src/main.jsx')
  },
  components: {
    count: loadJS("./src/components/count.jsx")
  },
  layouts: {},
  css: {
    main: loadCss('./src/main.css')
  }
 
}

function loadJS(url) {
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
