(function($){

  $(document).ready(function(){
    $('#dashboard').on('click', '#addProd', function(){

      var options = {
        type: 'product',
        name: $('#prodName').val(),
        color:$('#color').val(),
        unit: $('#unit').val(),
        price: $('#price').val()
      };

      var productFactory =  new ProductsFactory();
      //created an instance of type Product
      var product = productFactory.createProduct(options);

      //availableProducts.push(product);
      addElementToLocalStorage(product, 'Products');
      console.log(availableProducts);
    })
  });
})(jQuery);