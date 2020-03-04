var NoteListView = function(noteList) {
  this.noteList = noteList;
}

NoteListView.prototype = (function() {

  function truncateString(string, number) {
    if (string.length <= number) {
      return string
    }
    return string.slice(0, number) + '...'
  }

  function returnHtml() {
    result = ""
    notesArray = this.noteList.showNotes()
    numberOfNotes = notesArray.length;
    for (i = 0; i < numberOfNotes; i++) {
      result += ("<li><div>" + truncateString(notesArray[i].returnText(), 20) + "</div></li>")
    }
    result = "<ul>" + result + "</ul>"
    return result
  }

  return {
    returnHtml
  }

})();