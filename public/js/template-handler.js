var TemplateLoader = function(){};

TemplateLoader.prototype.loadTmpl = function(olderProj, templateUrl, callback){
  $('#dashboard').load(templateUrl, function(data){
    //in data there will be the html from the templateUrl file
    //_template transforms js templates into a function
    var myTemplate = _.template(data);
    console.log(data);
    callback(myTemplate(olderProj));
  })
};
