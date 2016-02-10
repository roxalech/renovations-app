
(function($){

  $(document).ready(function(){
    $('#loginForm').on('click', '.submit-btn', function(){

      $.ajax({
        url: '../public/assets/json/users.json',
        method: 'GET'
      }).done(function(response){
        var $loginCred = {
          nume: $('#nume').val(),
          pass: $('#pwd').val()
        };

        var exists = verifyCredentials($loginCred, response);
        if(exists){
          $('.login-view').remove();

          //templateCtrl is an instance of TemplateCtrl that has TemplateLoader as a prototype;
          var templateCtrl = inherit(TemplateLoader);
          templateCtrl.load(olderProjects, "templates/dashboard.html", function(template){
            $('#dashboard').html(template);
          });
        }

      }).fail(function(){
        console.log('error');
      })
    })
  });
})(jQuery);