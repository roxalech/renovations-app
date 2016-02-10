//var TemplateLoader = function(){};
//
//TemplateLoader.prototype.load = function( templateUrl, callback){
//  $('#dashboard').load(templateUrl, function(data){
//    //in data there will be the html from the templateUrl file
//    //_template transforms js templates into a function
//
//    var myTemplate = _.template(data);
//    //console.log(data);
//    callback(myTemplate());
//  })
//};


var TemplateLoader = {
  load: function (dataArr, templateUrl, callback){
    $('#dashboard').load(templateUrl, function(data){
      //in data there will be the html from the templateUrl file
      //_template transforms js templates into a function

      var myTemplate = _.template(data);
      console.log(dataArr);
      callback(myTemplate(dataArr));
    });
  }
};