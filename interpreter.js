alert("1");
if (annyang) {
  alert("2");    
  // Let's define a command.    
  var commands = {
    'hello': function() { alert("hello"); },
    'chrome open new tab': function() {window.open('http://google.com');},
    'chrome go to *search': 
      function(tag) {
        if(tag.indexOf('.') >= 0)
            window.open('https://' + tag);
        else
            window.open('https://' + tag + '.com');
      }   
  };
  //alert("3");  

  // Initialize annyang with our commands
  annyang.init(commands);
  //alert("4");  

  // Start listening.
  annyang.start();
  //alert("5");    
}
