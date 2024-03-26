const imports = {
  dependencies: {
    styledComponents: load("//unpkg.com/styled-components@4.0.1/dist/styled-components.min.js"),
    axios: load("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")
  },
  app: load("./src/app.jsx"),
  components: {
    count: load("./src/components/count.jsx")
  },
  layouts:{}
}

function load(url) {
  const script = document.createElement('script');
  script.src = url;
  script.type = 'text/babel';
  document.head.appendChild(script);
}
