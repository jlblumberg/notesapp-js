describe('A note list', () => {
  it('should be able to accept a note', () => {
    noteOne = new Note("First note");
    const noteList = new NoteList();
    
    expect(noteList.showList()).toBe([noteOne, noteTwo])
  })
})