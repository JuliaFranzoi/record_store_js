var RecordStore = function(name, city, inventory, balance){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = balance;  
}
  
RecordStore.prototype = {
  inventoryCount:function(){
    return this.inventory.length;
  },


  addRecord:function(record){
    this.inventory.push(record);
    return this.inventory;
},

  listIventory:function(){
  var listAlbums='';
    for (item of this.inventory){
      listAlbums += item.title + ", ";
    }
  return listAlbums;
},

 sell:function(record){
  var sale = record.price;
  this.balance += sale;
  
  return this.balance;   
},

 finance: function(){
  var inventoryWorth=0;
  for (item of this.inventory){
    inventoryWorth +=item.price; 
  }
  return inventoryWorth;
 },

 reportFinance:function(){
  return "balance: " + this.balance + " finance: " + this.finance(); 
 }





};


module.exports = RecordStore;