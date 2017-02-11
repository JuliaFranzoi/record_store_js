var assert = require('assert');
var RecordStore = require('../record_store');
var Record = require('../record');

describe('RecordStore', function(){
  var recordStore = new RecordStore("Alive", "Edinburgh");
  var record = new Record("Jewel", "Us", 12) 

  it('should have a name', function(){
    assert.equal("Alive", recordStore.name)
  });
  
  it('should have a city', function(){
    assert.equal("Edinburgh", recordStore.city);
  });

  it('should have an  inventory', function(){
    assert.equal(0, recordStore.inventory);
  });

  it('should have an empty inventory', function(){
    assert.equal(0, recordStore.inventoryCount());
  });

  it('should have a balance', function(){
    assert.equal(0, recordStore.balance);
  });

  it('should have 1 record', function(){
    recordStore.addRecords(record);
    assert.equal(1, recordStore.inventoryCount());
  });

  it('should list inventory', function(){
    recordStore.addRecords(record);
    assert.equal("US", recordStore.listIventory(recordStore.iventory));
   }); 

});

