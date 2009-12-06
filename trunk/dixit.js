function btnDo_onClick()
{
   var skypeLink = document.getElementById("skypeLink");
   var tbSkypeLogin = document.getElementById("tbSkypeLogin");

   skypeLink.href="callto://"+tbSkypeLogin.value;
}