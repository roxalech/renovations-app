
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
          var loadDash = new TemplateCtrl();
          loadDash.loadDashboard(olderProjects);
        }

      }).fail(function(){
        console.log('error');
      })
    })
  });
})(jQuery);