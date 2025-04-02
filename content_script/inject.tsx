import ReactDOM from 'react-dom/client';
import App from './App';

const FontFamily = [
  'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Quicksand:wght@300..700&display=swap',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap',
];
const injectFont = () => {
  FontFamily.map((fontFamily, idx) => {
    if (!document.getElementById(`custom-font-${idx}`)) {
      const link = document.createElement('link');
      link.id = 'custom-font';
      link.rel = 'stylesheet';
      link.href = fontFamily;
      document.head.appendChild(link);
    }
  });
};

const injectStyles = () => {
  const link = document.createElement('link');
  link.id = 'custom-styles';
  link.rel = 'stylesheet';
  link.href = chrome.runtime.getURL('styles.css');
  document.head.appendChild(link);
};
chrome.runtime.onMessage.addListener((message) => {
  let rootDiv = document.getElementById('note-taker-root');

  console.log('message', message.action);

  if (message.action === 'toggle_popup') {
    if (rootDiv) {
      rootDiv.style.display =
        rootDiv.style.display === 'none' ? 'block' : 'none';
    } else {
      rootDiv = document.createElement('div');
      rootDiv.id = 'note-taker-root';
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

  injectFont();
  injectStyles();
});
