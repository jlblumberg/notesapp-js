describe('A single note view', function() {
  it('Can take a note and return the text within as HTML', function() {
    note = new Note("This is a test note");
    singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.showHtml()).toBe("<div>This is a test note</div>")
  });
});