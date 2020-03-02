// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue(circle.radius === 10);
// };

// testCircleRadiusDefaultsTo10();

describe('Circle', () => {
  it('should have a radius of 10', () => {
    const circle = new Circle();
    expect(circle.radius()).toBe(10)
  })
})