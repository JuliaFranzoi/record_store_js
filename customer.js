var Customer = function(cash){
  this.cash = cash;
}

Customer.prototype={
  sell:function(record){
    return this.cash+=record.price;
    },

  buy:function(record){
    if (this.cash>=record.price){
      this.cash-=record.price
    }
    else{
      this.cash = this.cash;
    }
    return this.cash;
  }  


}

module.exports = Customer;