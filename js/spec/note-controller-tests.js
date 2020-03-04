describe('A Note Controller', function() {

  it('can be instantiated with a note and update the HTML', function() {
    noteList = new NoteList(); // make an empty list (constructor will populate it)
    noteController = new NoteController(noteList); // pass it to controller
    noteController.getHtmlAndInsertInApp(); // insert note content into div
    resultantText = document.getElementById("app").innerHTML;
    expect(resultantText).toBe("<ul><li><div>Favourite drink: seltzer</div></li></ul>")
  });

});