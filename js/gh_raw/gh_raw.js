javascript:(async () => {
  aTags1 = [...document.querySelectorAll('div.col-md-2 a:last-of-type')].slice(1);

  for (aTag1 of aTags1) {
    //await 
	fetch(aTag1.href)
      .then(x => x.text())
      .then(html => aTag1.outerHTML += 
	  " <a " + `${html.match(/href=".*raw.*">/).pop() + "Raw1</a>"}`)
      .catch(console.error);
  }
})();
