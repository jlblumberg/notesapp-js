describe('A note list', () => {
  it('should store notes in an array', () => {
    noteOne = new Note("First note");
    noteTwo = new Note("Second note")
    const noteList = new NoteList([noteOne, noteTwo])
    expect(noteList.showList()).toBe([noteOne, noteTwo])
  })
})