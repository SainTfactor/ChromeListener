//alert("1");
if (annyang) {
  //alert("2");    
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
      },
    'chrome search *search for *thing': 
      function(tag, tag2) {      
          
        //for posterity
        //$("input[class*=search]").text("" + tag2);
          
        theUrl = '';  
        if(tag.indexOf('.') >= 0)
        {
            theUrl = 'https://' + tag;            
        }
        else
        {
            theUrl = 'https://' + tag + '.com';            
        }
          
        if(tag.toLowerCase().indexOf('youtube') != -1)
        {
            theUrl += '/results?search_query=' + tag2
            window.open(theUrl);
        }
          
        if(tag.toLowerCase().indexOf('google') != -1)
        {
            theUrl += '/#q=' + tag2
            window.open(theUrl);
        }
          
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
