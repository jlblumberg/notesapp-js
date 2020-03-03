var NoteList = function() {
  this.notes = []
}

NoteList.prototype = (function() {

  function showNotes() {
    return this.notes;
  }

  return { 
    showNotes
  }

})();