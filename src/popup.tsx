import React from 'react';
import ReactDOM from 'react-dom/client';

function Popup() {
  return (
    <div style={{ width: '200px', padding: '10px' }}>
      <h1>Hello from Rsbuild + React!</h1>
      <p>This is a Chrome extension popup.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
);
