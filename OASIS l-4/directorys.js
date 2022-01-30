Dirs.push('APPS/test/conf.js');
LOAD('APPS/test/conf.js');
LOAD('APPS/store/conf.js');
LOAD('APPS/paper_minecraft/conf.js')
LOAD('APPS/smm3/conf.js')









function LOAD(file) {
var jsCode = document.createElement('script'); 
	jsCode.setAttribute('src', file);      			
  document.body.appendChild(jsCode); 
}
//test