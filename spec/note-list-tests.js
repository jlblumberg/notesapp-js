describe('A note list', () => {

  it('has a method showList which returns the notes as an array', () => {
    const noteList = new NoteList();
    result = noteList.showNotes();
    expect(Array.isArray(result)).toBe(true)
  })

  it('has a method which creates and stores a single new note', function() {
    const noteList = new NoteList();
    noteList.newNote("Favourite drink: seltzer");
    expect(noteList.showNotes()[0].text).toBe("Favourite drink: seltzer")
  })

})