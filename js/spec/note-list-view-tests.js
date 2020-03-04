describe('A note list view', function() {

  it('can take and store a note list upon instantiation', function() {
    testNoteList = new NoteList(); // make a new note list (has no notes in it)
    noteListView = new NoteListView(testNoteList); // instantiate and pass in a noteList
    expect(noteListView.noteList === testNoteList).toBe(true) // check that it stores the list
  });

  it('has a function which can return an HTML string representing the notes list model (no notes)', function() {
    testNoteList = new NoteList(); // make a new note list (has no notes in it)
    noteListView = new NoteListView(testNoteList); // instantiate and pass in a noteList
    expect(noteListView.returnHtml()).toBe("<ul></ul>")
  });

  it('has a function which can return an HTML string representing the notes list model (one note)', function() {
    testNoteList = new NoteList(); // make a new note list
    testNoteList.newNote("This is my first note"); // add a note to it
    noteListView = new NoteListView(testNoteList); // instantiate and pass in the noteList
    expect(noteListView.returnHtml()).toBe("<ul><li><div>This is my first not...</div></li></ul>")
  });

  it('has a function which can return an HTML string representing the notes list model (three notes)', function() {
    testNoteList = new NoteList(); // make a new note list
    testNoteList.newNote("This is my first note"); // add three notes to it
    testNoteList.newNote("This is my second note");
    testNoteList.newNote("This is my third note");
    noteListView = new NoteListView(testNoteList);
    expect(noteListView.returnHtml()).toBe("<ul><li><div>This is my first not...</div></li><li><div>This is my second no...</div></li><li><div>This is my third not...</div></li></ul>");
  });

});