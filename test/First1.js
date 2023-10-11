

module.exports = {
'step one: navigate to google' : function (browser) { 
    
const page = browser.page.Test.First();

page
.navigate()
.setValue("@textArea",'nightwatch')
.waitForElementVisible('@button',1000)

// browser
// .url('https://www.google.com')
// .waitForElementVisible('body', 1000)
// .setValue("#APjFqb", 'nightwatch')
// .waitForElementVisible('.gNO89b', 1000)
},
'step two: click input' : function (browser) { //step two
    const page1 = browser.page.Test.First();
page1
.click('@button')
.pause(1000)
//.assert.containsText('#main', 'Night Watch')
.end(); //to close the browser session after all the steps
}
}