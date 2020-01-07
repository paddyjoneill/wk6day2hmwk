const Decorator = function() {
  this.stock = []
}

Decorator.prototype.addPaintCan = function(paintCan) {
  this.stock.push(paintCan)
}

Decorator.prototype.totalLitres = function() {
  total = 0
  for (paintCan of this.stock){
    total += paintCan.amount
  }
  return total
}

Decorator.prototype.hasEnoughPaint = function(room) {
  if (this.totalLitres() > room.area) {
    return true
  }
  return false
}

Decorator.prototype.paintRoom = function (room) {
  if (this.hasEnoughPaint(room)){
    room.painted = true
  }
}




module.exports = Decorator
