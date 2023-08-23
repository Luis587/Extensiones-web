document.body.innerHTML = document.body.innerHTML.replace(/\b(\w+)\b/g, function(match) {
    return checkSpelling(match);
  });
  
  function checkSpelling(word) {
    // Aquí puedes utilizar un servicio de corrección ortográfica, como Grammarly o LanguageTool, para verificar la ortografía del texto. 
    // También puedes implementar tu propio algoritmo para verificar la ortografía.
    // En este ejemplo, simplemente devolveremos la palabra original.
    return word;
  }
  