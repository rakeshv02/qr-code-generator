import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';

export default function App() {
  const [input, setInput] = useState('https://tabutility.com');
  const qrRef = useRef();

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 p-4">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">QR Code Generator</h1>
        <p className="text-gray-400 mb-8">Generate QR codes from text or URLs instantly. Download as PNG.</p>
        
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter text or URL..." className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-gray-500 rounded mb-8 focus:outline-none focus:border-blue-500" />

        <div className="flex justify-center mb-8 p-6 bg-white rounded">
          <div ref={qrRef}><QRCode value={input} size={256} level="H" /></div>
        </div>

        <button onClick={downloadQR} className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
          Download QR Code
        </button>
      </div>
    </div>
  );
}
