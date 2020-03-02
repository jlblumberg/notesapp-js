var Note = function(text) {
  this.text = text;
}

Note.prototype = (function() {
  
  function returnText() {
    return this.text;
  }

  return {
    noteText: returnText
  };

})();