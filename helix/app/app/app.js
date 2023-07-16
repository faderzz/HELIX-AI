'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import axios from 'axios'

export default function App() {
  const [userId, setUserId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  async function prompt(textPrompt) {
    const data = {
      text: textPrompt,
      key: apiKey,
      user_id: userId,
      speak: false,
    };
    
    fetch('https://api.carterlabs.ai/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Input:', data);
        console.log('Output Text:', data.output.text);
        document.getElementById('text').textContent = data.output.text;
    
        data.forced_behaviours.forEach(fb => {
          console.log('Forced Behaviour:', fb.name);
        });
      })
      .catch(error => {
        console.error(error);
      });
    return data.output;
  }
  
  function handleSettingsClick() {
    setPopupVisible(!isPopupVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserId(event.target.elements.userId.value);
    setApiKey(event.target.elements.apiKey.value);
    setPopupVisible(false);
  }
  
  async function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const text = event.target.value;
      const message = await prompt(text);
      console.log(message);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fittext.js/1.2.0/jquery.fittext.min.js"></script>
      <div data-tauri-drag-region class="titlebar">
        <div class="titlebar-button" id="titlebar-minimize">
          <img src="https://api.iconify.design/mdi:window-minimize.svg?color=white" alt="minimize" />
        </div>
        <div class="titlebar-button" id="titlebar-maximize">
          <img src="https://api.iconify.design/mdi:window-maximize.svg?color=white" alt="maximize" />
        </div>
        <div class="titlebar-button" id="titlebar-close">
          <img src="https://api.iconify.design/mdi:close.svg?color=white" alt="close" />
        </div>
      </div>

      <div class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold">HELIX</h1>
        <p class="text-xl">Helpful Electronic Language Interface X</p>
      </div>

      <div class="main">
        <div>
          <div id="glow">
            <div id="text">Enter a message to start.</div>
          </div>
        </div>

        {/* Input box */}
        <div id="inputmessage">
          <input type="text" id="input" placeholder="Enter your message..." onKeyDown={handleKeyDown}/>
        </div>

        {/* Settings cog wheel icon */}
        <div class="flex flex-col items-center justify-center" id="settings">
          <img src="https://api.iconify.design/mdi:cog.svg?color=white" alt="settings" onClick={handleSettingsClick}/>
        </div>

      </div>

      <div class="widgets">
          <div class="widget1"></div>
          <div class="widget2"></div>
          <div class="widget3"></div>
          <div class="widget4"></div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            
            <div class="popupitem">
            <label htmlFor="apiKey">API Key:</label>
            <input type="text" id="apiKey" name="apiKey" required />
            <br />
            </div>
            <div class="popupitem">
            <label htmlFor="userId">User ID:</label>
            <input type="text" id="userId" name="userId" required />
            <br />
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </main>
  )
}