import ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    __MUI_NOTE_TAKER_INITIALIZED__: boolean;
  }
}
if (!window.__MUI_NOTE_TAKER_INITIALIZED__) {
  window.__MUI_NOTE_TAKER_INITIALIZED__ = true;
}
chrome.runtime.onMessage.addListener((message) => {
  const rootDiv = document.getElementById('mui-note-taker-root');
  console.log('message', message.action);
  if (message.action === 'toggle_popup') {
    if (rootDiv) {
      rootDiv.style.display =
        rootDiv.style.display === 'none' ? 'block' : 'none';
    } else {
      const rootDiv = document.createElement('div');
      rootDiv.id = 'mui-note-taker-root';
      document.body.appendChild(rootDiv);

      const root = document.getElementById('mui-note-taker-root');
      if (root) {
        ReactDOM.createRoot(root).render(<App />);
      }
    }
  } else if (message.action === 'close_popup') {
    if (rootDiv) {
      rootDiv.style.display = 'none';
    }
  }
});
