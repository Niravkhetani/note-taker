// content.ts - Properly isolated from the page context

// Check if we've already injected our script
const SCRIPT_ID = 'mui-note-taker-script';

if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = chrome.runtime.getURL('inject.js');
    script.async = true;
    (document.head || document.documentElement).appendChild(script);

    // Listen for messages from the injected script
    window.addEventListener('message', (event) => {
        // Only accept messages from our script
        if (event.source !== window || !event.data.type?.startsWith('mui-note-taker:')) {
            return;
        }

        // Forward to background script if needed
        if (event.data.type === 'mui-note-taker:close') {
            chrome.runtime.sendMessage({ action: 'close_popup' });
        }
    });
}

// Clean up function to be called when needed
function cleanUp() {
    const root = document.getElementById('mui-note-taker-root');
    if (root) {
        root.remove();
    }
    const script = document.getElementById(SCRIPT_ID);
    if (script) {
        script.remove();
    }
}

// Listen for cleanup message from background script
chrome.runtime.onMessage.addListener((message) => {
    if (message.action === 'cleanup') {
        cleanUp();
    }
    return true;
});
