function inherit(proto) {

  function TemplateCtrl() {}

  TemplateCtrl.prototype = proto;

  return new TemplateCtrl

}



