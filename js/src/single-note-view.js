var SingleNoteView = function(aNoteObject) {
  this.note = aNoteObject;
}

SingleNoteView.prototype = (function() {

  function showHtml() {
    return "<div>" + this.note.returnText() + "</div>"
  }

  return {
    showHtml
  }

})();