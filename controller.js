chrome.browserAction.onClicked.addListener(function(tab) { 
    try { alert(annyang); } 
    catch (err) {
        chrome.tabs.executeScript({
            //code: "alert('fdsa');"
            file: 'annyang.js'
        });   
    }
    try{ alert(ranonce); } 
    catch (err) {
        chrome.tabs.executeScript({
            file: 'interpreter.js'
        });
    }
 
});

//chrome.webNavigation.onCompleted.addListener(function (details) {          
//    chrome.tabs.executeScript({
//        file: 'annyang.js'
//    });        
//    chrome.tabs.executeScript({
//        file: 'interpreter.js'
//    });
//});
