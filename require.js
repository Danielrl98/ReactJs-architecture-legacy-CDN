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
load("./src/app.jsx")
/*components */
load("./src/components/count.jsx")
/*layouts */

