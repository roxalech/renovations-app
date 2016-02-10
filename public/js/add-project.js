(function($){

  $(document).ready(function(){
    $('#dashboard').on('click', '#addProject', function(){

      //templateCtrl is an instance of TemplateCtrl that has TemplateLoader as a prototype;
      var templateCtrl = inherit(TemplateLoader);

      templateCtrl.load(availableProds, "templates/product-list.html", function(template){
        $('#dashboard').html(template);
      });
    })
  });
})(jQuery);