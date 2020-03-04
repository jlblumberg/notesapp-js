var NoteController = function(aNoteList) {
  this.noteList = aNoteList
  this.noteList.newNote("Favourite drink: seltzer");
  this.noteListView = new NoteListView(this.noteList)
}

NoteController.prototype = (function() {

  function getHtmlAndInsertInApp() {
    var myDoc = document.getElementById("app")
    myDoc.innerHTML = this.noteListView.returnHtml()
  } 
 
  return {
    getHtmlAndInsertInApp
  }

})();

// run the new functions
noteList = new NoteList();
noteController = new NoteController(noteList);
noteController.getHtmlAndInsertInApp();