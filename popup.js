document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = sentenceCase(inputText);
    document.getElementById('outputText').value = outputText;
  });
  
  function sentenceCase(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, function(c) { return c.toUpperCase() });
  }
  