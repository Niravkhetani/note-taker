chrome.action.onClicked.addListener(async (tab) => {
  if (tab.id) {
    try {
      // Check if the content script is already injected
      const [result] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => Boolean(document.getElementById("mui-note-taker-root")),
      });

      // If the script is not injected, inject it
      if (!result.result) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["inject.js"],
        });
      }

      // Send a message to toggle the popup after injection
      chrome.tabs.sendMessage(tab.id, { action: "toggle_popup" });
    } catch (error) {
      console.error("Error injecting script:", error);
    }
  }
});

// Listen for close message from inject.tsx
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "close_popup" && sender.tab?.id) {
    chrome.tabs.sendMessage(sender.tab.id, { action: "close_popup" });
  }
});
