function GetCookie (name) {
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return null;
}
function SetCookie (name, value) {
var argv = SetCookie.arguments;
var argc = SetCookie.arguments.length;
var expires = (argc > 2) ? argv[2] : null;
var path = (argc > 3) ? argv[3] : null;
var domain = (argc > 4) ? argv[4] : null;
var secure = (argc > 5) ? argv[5] : false;
document.cookie = name + "=" + escape (value) +
((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
((path == null) ? "" : ("; path=" + path)) +
((domain == null) ? "" : ("; domain=" + domain)) +
((secure == true) ? "; secure" : "");
}
function DeleteCookie (name) {
var exp = new Date();
exp.setTime (exp.getTime() - 1);
var cval = GetCookie (name);
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
var expDays = 1;
var exp = new Date();
exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
function amt()
{
var count = GetCookie('count')
if(count == null) {
SetCookie('count','1')
return 1
}
else {
var newcount = parseInt(count) + 1;
DeleteCookie('count')
SetCookie('count',newcount,exp)
return count
}
}
function getCookieVal(offset) {
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}
var hitunganviewnya = amt();
console.log(hitunganviewnya);



var num = hitunganviewnya;
   //document.write("Number = "+num+"<br>");
   if(num % 5 == 0) {
      //document.write('Number is even!');
      //window.location='https://toddlecausebeeper.com/wd4gfq2p2f?key=a86b4c67e65aa35f34cbabf2a06c6951';
      
      var scriptxGHEA = document.createElement('script');
      scriptxGHEA.setAttribute('type', 'text/javascript');
      scriptxGHEA.setAttribute('src', 'https://toddlecausebeeper.com/7c/bf/44/7cbf4466a8b07263c55a0b678b300b43.js');
      document.head.appendChild(scriptxGHEA); 
      
      var scriptxGHEAs = document.createElement('script');
      scriptxGHEAs.setAttribute('type', 'text/javascript');
      scriptxGHEAs.setAttribute('src', 'https://toddlecausebeeper.com/9c/da/18/9cda18f433411bb5174d0db2ee1bbffd.js');
      document.head.appendChild(scriptxGHEAs);       
      
   } else {
      //document.write('Number is odd!');
      
      var scriptxGHEAs = document.createElement('script');
      scriptxGHEAs.setAttribute('type', 'text/javascript');
      scriptxGHEAs.setAttribute('src', 'https://toddlecausebeeper.com/9c/da/18/9cda18f433411bb5174d0db2ee1bbffd.js');
      document.head.appendChild(scriptxGHEAs);       
      
}
