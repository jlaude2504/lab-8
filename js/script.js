function init(){
    var button = document.getElementById('entrybutton');
  
    function showMeText(){
      var textbox = document.getElementById('entryinput');
      document.getElementById('textoutput').innerHTML = textbox.value;
      alert("Jefferey Jay Laude: " + textbox.value);
    }
