const PaintCan = function(amount) {
  this.amount = amount
}

PaintCan.prototype.isEmpty = function(){
  if (this.amount === 0) {
    return true
  }
  return false
}

PaintCan.prototype.empty = function() {
  this.amount = 0
}





module.exports = PaintCan
