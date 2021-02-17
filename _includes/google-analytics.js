function loadScriptAsync(scriptSrc, callback) {
  if (typeof callback !== 'function') {
      throw new Error('Not a valid callback for async script load');
  }
  var script = document.createElement('script');
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

loadScriptAsync('https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}', function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ site.google_analytics }}', { 'anonymize_ip': true });
})