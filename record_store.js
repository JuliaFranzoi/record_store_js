var RecordStore = function(name, city){
  this.name =name;
  this.city =city;
  this.inventory = [];
  this.balance=0;  
};
  
RecordStore.prototype = {
  inventoryCount:function(){
    return this.inventory.length;
}

  addRecords:function(record){
    this.inventory.push(record);
}



//   listIventory:function(array){
//   var listAlbums='';
//     for (item of array){
//       listAlbums += item.title;
//     }
//   return listAlbums;
// }



};

module.exports = RecordStore;