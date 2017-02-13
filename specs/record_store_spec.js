var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe('RecordStore', function(){
  var recordStore = new RecordStore("Alive", "Edinburgh", [], 0);
  var record = new Record("Jewel", "Us", 12);

  it('should have a name', function(){
    assert.equal("Alive", recordStore.name)
  });
  
  it('should have a city', function(){
    assert.equal("Edinburgh", recordStore.city);
  });

  it('should have an empty inventory', function(){
    assert.equal(0, recordStore.inventoryCount());
  });

  // it('should have an empty inventory', function(){
  //   assert.equal(0, recordStore.inventoryCount());
  // });

  it('should have a balance', function(){
    assert.equal(0, recordStore.balance);
  });

  it('should have 1 record', function(){
    recordStore.addRecord(record);
    assert.equal(1, recordStore.inventoryCount());
  });

  it('should list inventory', function(){
    recordStore.addRecord(record);
    assert.equal("Us", recordStore.listIventory());
   }); 
  
  it('should increase balance with sale', function(){
    recordStore.sell(record);
    assert.equal(12, recordStore.balance);
   }); 
  
  it('should show value of inventory', function(){
    assert.equal(12, recordStore.finance());
   }); 

  it('should print', function(){
    assert.equal(24, recordStore.reportFinance());
   });

});

