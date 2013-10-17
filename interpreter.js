var ranonce = true;

if (annyang) {
    
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

  // Initialize annyang with our commands
  annyang.init(commands);

  // Start listening.
  annyang.start();
}
