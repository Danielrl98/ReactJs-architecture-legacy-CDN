function load(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/babel';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
}

/*default configuration */
load("./app.jsx")
/*components */
load("./components/count.jsx")
/*layouts */

