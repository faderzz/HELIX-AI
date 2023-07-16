import Image from 'next/image'
import axios from 'axios'

export default function App() {
  var userId
  var apiKey

  async function prompt(text, user_id) {

    const response = await axios.post('https://api.carterlabs.ai/chat', {
      text,
      key: '457771a6-17e8-4ae7-873e-6d46b42c31fe',
      user_id,
      speak: false,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return response.data.response;
  }
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <input type="text" id="input" placeholder="Enter your message..." />
        </div>

        {/* Settings cog wheel icon */}
        <div class="flex flex-col items-center justify-center" id="settings">
          <img src="https://api.iconify.design/mdi:cog.svg?color=white" alt="settings"/>
        </div>
      </div>
    </main>
  )
}