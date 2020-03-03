describe('A note list', () => {
  it('has a method show list which returns the notes', () => {
    const noteList = new NoteList();
    expect(Array.isArray(noteList.showNotes())).toBe(true)
  })
})