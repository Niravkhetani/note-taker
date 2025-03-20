import ReactDOM from 'react-dom/client';
import App from './App';

chrome.runtime.onMessage.addListener((message) => {
  let rootDiv = document.getElementById('mui-note-taker-root');

  console.log('message', message.action);

  if (message.action === 'toggle_popup') {
    if (rootDiv) {
      rootDiv.style.display =
        rootDiv.style.display === 'none' ? 'block' : 'none';
    } else {
      rootDiv = document.createElement('div');
      rootDiv.id = 'mui-note-taker-root';
      document.body.appendChild(rootDiv);
      setTimeout(() => {
        if (rootDiv && !rootDiv.hasAttribute('data-mounted')) {
          rootDiv.setAttribute('data-mounted', 'true');
          ReactDOM.createRoot(rootDiv).render(<App />);
        }
      }, 400); // Small delay to ensure the div is added to DOM
    }
  } else if (message.action === 'close_popup') {
    if (rootDiv) {
      rootDiv.style.display = 'none';
    }
  }
});
