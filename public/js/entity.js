//constructor
var AdditionalProduct = function(options){
  this.price = options.price || 10;
  this.name = options.name || 'unealta';
  this.quantity = 0;
};

//constructor
var Product = function(options){
  this.price = options.price;
  this.unit = options.unit;
  this.name = options.name;
  this.color = options.color;
  this.quantity = 0;
};

//defines factory
function ProductsFactory(){}

//defines default prototype for factory
ProductsFactory.prototype.prodClass =  Product;

ProductsFactory.prototype.createProduct = function(options){
  switch (options.type) {
    case "product":
      this.prodClass = Product;
      break;
    case "additionalProd":
      this.prodClass = AdditionalProduct;
      break;
  }

  return new this.prodClass(options);
};

//
//var abstractFactory = (function(){
//  var types = {};
//
//  return {
//    registerItem: function(type, options){
//
//
//    }
//  }
//})();