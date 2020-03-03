var NoteListView = function(noteList) {
  this.noteList = noteList;
}

NoteListView.prototype = (function() {

  function returnHtml() {
    result = ""
    notesArray = this.noteList.showNotes()
    numberOfNotes = notesArray.length;
    for (i = 0; i < numberOfNotes; i++) {
      result += ("<li><div>" + (notesArray[i].returnText()) + "</div></li>")
    }
    result = "<ul>" + result + "</ul>"
    return result
  }

  return {
    returnHtml
  }

})();

