var NoteList = function() {
  this.notes = []
}

NoteList.prototype = (function() {

  function showNotes() {
    return this.notes;
  }

  function newNote(content) {
    this.notes.push(new Note(content));
  }

  return { 
    showNotes, newNote
  }

})();