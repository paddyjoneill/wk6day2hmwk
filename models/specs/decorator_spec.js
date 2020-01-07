const assert = require('assert');
const Decorator = require('../decorator.js')
const PaintCan = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function() {

  let decorator

  beforeEach(function() {
    decorator = new Decorator()
    paintCan1 = new PaintCan(5)
    paintCan2 = new PaintCan(3)
    paintCan3 = new PaintCan(0)
    paintCan4 = new PaintCan(2)
    paintCan5 = new PaintCan(0)
    room1 = new Room(7)
    room2 = new Room(9)
  })

  it('start with an empty paint stock', function(){
    const actual = decorator.stock
    assert.deepStrictEqual(actual, [])
  })
  it('should be able to add a can of paint to paint stock', function(){
    decorator.addPaintCan(paintCan1)
    const actual = decorator.stock.length
    assert.strictEqual(actual, 1)
  })
  it('Should be able to calculate the total litres of paint it has in stock', function(){
    decorator.addPaintCan(paintCan1)
    decorator.addPaintCan(paintCan2)
    const actual = decorator.totalLitres()
    assert.strictEqual(actual, 8)
  })
  it('It should be able to calculate if it has enough paint to paint room', function(){
    decorator.addPaintCan(paintCan1)
    decorator.addPaintCan(paintCan2)
    const actual = decorator.hasEnoughPaint(room1)
    assert.strictEqual(actual, true)
  })
  it('Should be able to paint the room if it has enough paint', function() {
    decorator.addPaintCan(paintCan1)
    decorator.addPaintCan(paintCan2)
    const actual = decorator.paintRoom(room1)
    assert.strictEqual(room1.painted, true)
    assert.strictEqual(decorator.totalLitres(), 1)
  })
  it('should be able to remove empty cans', function() {
    decorator.addPaintCan(paintCan1)
    decorator.addPaintCan(paintCan2)
    decorator.addPaintCan(paintCan3)
    decorator.addPaintCan(paintCan4)
    decorator.addPaintCan(paintCan5)
    decorator.removeEmptyTins()
    const actual = decorator.stock.length
    assert.strictEqual(actual, 3)
  })
})
