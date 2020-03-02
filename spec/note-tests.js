describe('A note', () => {
  it('should have text', () => {
    const note = new Note("This is my text for my note");
    expect(note.noteText()).toBe("This is my text for my note")
  })
})