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
    this.removePaintFromStock(room)
  }
}

Decorator.prototype.removePaintFromStock = function(room) {
  let paintNeeded = room.area

  while (paintNeeded > 0) {

    let lastIndex = this.stock.length - 1

    if (paintNeeded < this.stock[lastIndex].amount){
      this.stock[lastIndex].amount -= paintNeeded
      paintNeeded = 0
    }
    else if (paintNeeded === this.stock[lastIndex].amount) {
      this.stock.pop()
      paintNeeded = 0
    }
    else if (paintNeeded > this.stock[lastIndex].amount) {
      paintNeeded -= this.stock[lastIndex].amount
      this.stock.pop()
    }
  }
}

Decorator.prototype.removeEmptyTins = function () {
  let i = this.stock.length - 1
  for (let i = this.stock.length -1 ; i >= 0; i--) {
    if (this.stock[i].amount === 0) {
      this.stock.pop()
    }
  }

}



module.exports = Decorator
