describe('Circle', () => {
  it('should have a radius of 10', () => {
    const circle = new Circle();
    expect(circle.radius()).toBe(10)
  })
})