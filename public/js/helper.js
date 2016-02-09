var olderProjects = [
  'Renovat bucatarie',
  'Renovat dormitor'
];


function verifyCredentials(loginCred, arrCred){
  for (var i = 0; i < arrCred.length; i++){

    if(arrCred[i].Name == loginCred.nume && arrCred[i].pass == loginCred.pass){
      return true;
    }
  }
  return false;
}