var my_tabs = my_tabs || [];
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "jquery-2.2.0.min.js"});
    chrome.tabs.executeScript(tab.id, {file: "outliner.js"});
    chrome.browserAction.setIcon({path: "icon_active.png"});
    my_tabs.push(tab.id);
});

chrome.tabs.onActivated.addListener(function(activeInfo){
    if (my_tabs.indexOf(activeInfo.tabId) == -1) {
        chrome.browserAction.setIcon({path: "icon.png"});
    } else {
        chrome.browserAction.setIcon({path: "icon_active.png"});
    }
});
