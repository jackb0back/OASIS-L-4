
LOAD('APPS/test/conf.js');










function LOAD(file) {
var jsCode = document.createElement('script'); 
	jsCode.setAttribute('src', file);      			
  document.body.appendChild(jsCode); 
}
//test