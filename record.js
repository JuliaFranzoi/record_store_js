var Record = function(artist, title, price){
  this.artist = artist;
  this.title = title;
  this.price = price;

  this.getTitle = function(){
    return this.title;
  }

};



module.exports = Record;