const updateIcon = (on) => {
  chrome.browserAction.setIcon({ path: on ? "icon.png" : "icon-off.png" });
};

chrome.storage.sync.get(["on"], (result) => {
  updateIcon(result.on);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.on) {
    updateIcon(changes.on.newValue);
  }
});

chrome.browserAction.onClicked.addListener(() => {
  chrome.storage.sync.get(["on"], (result) => {
    chrome.storage.sync.set({ on: !result.on });
  });
});
