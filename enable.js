chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "jquery-2.2.0.min.js"});
    chrome.tabs.executeScript(tab.id, {file: "outliner.js"});
    chrome.browserAction.setIcon({path: "icon_active.png"});
});
