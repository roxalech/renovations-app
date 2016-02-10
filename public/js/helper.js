var olderProjects = [
  'Renovat bucatarie',
  'Renovat dormitor'
];
var availableProds =  JSON.parse(localStorage['Products']);
//var availableProducts = [];

function verifyCredentials(loginCred, arrCred){
  for (var i = 0; i < arrCred.length; i++){

    if(arrCred[i].Name == loginCred.nume && arrCred[i].pass == loginCred.pass){
      return true;
    }
  }
  return false;
}

function addElementToLocalStorage(value, objectName) {
  var id, newObject;
  try {
    try {
      var obj = JSON.parse(localStorage[objectName]);
      id = _.size(obj);
      console.log(id);
    } catch (e) {
      var obj = {};
      id = 0;
    }
    //console.log(newObject,objectName);
    newObject = {
      id: id,
      value: value
    };
    obj[id] = newObject;
    localStorage[objectName] = JSON.stringify(obj);
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
  }
};
