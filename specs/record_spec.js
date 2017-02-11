var assert = require('assert');
var Record = require('../record');

describe('Record', function(){
  
  var record = new Record("Regina Spektor", "Us", 12);

  it('should have an artist', function(){
    assert.equal('Regina Spektor', record.artist);
  });

  it('should have a title', function(){
    assert.equal('Us', record.title);
  });
  

  it('should have a price', function(){
    assert.equal(12, record.price);
  });



});