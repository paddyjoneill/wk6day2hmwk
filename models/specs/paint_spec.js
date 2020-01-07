const assert = require('assert');
const PaintCan = require('../paint.js')

describe('Paint', function() {

  let paintCan

  beforeEach(function() {
    paintCan1 = new PaintCan(4)
    paintCan2 = new PaintCan(0)
  })

  it('has a number of litres of paint', function() {
    const actual = paintCan1.amount
    assert.strictEqual(actual, 4)
  })

  it('is empty', function() {
    const actual = paintCan2.isEmpty()
    assert.strictEqual(actual, true)
  })

  it('should be able to empty itself', function() {
    paintCan1.empty()
    const actual = paintCan1.isEmpty()
    assert.strictEqual(actual, true)
  })

})
