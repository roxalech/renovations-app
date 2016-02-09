
  var templateLoader = new TemplateLoader();

  var TemplateCtrl = function(){};


  TemplateCtrl.prototype.loadDashboard = function(olderProj){

      templateLoader.loadTmpl(olderProj, "templates/dashboard.html", function(template){
        console.log(template);
        $('#dashboard').html(template);
      });
  };



