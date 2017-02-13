var assert = require('assert');
var Customer = require('../customer');
var RecordStore = require('../record_store');
var Record = require('../record');


describe('Customer', function(){
  var recordStore = new RecordStore("Alive", "Edinburgh", [], 0);
  var record = new Record("Jewel", "Us", 12);
  var customer = new Customer(15);
   
  it('should have cash', function(){
    assert.equal(10, customer.cash);
  });

  it('should increase cash when selling', function(){
    customer.sell(record);
    assert.equal(22, customer.cash);
  });

  it("should be able to buy", function(){
    customer.buy(record);
      assert.equal(22, customer.cash);
    });

  
  });



