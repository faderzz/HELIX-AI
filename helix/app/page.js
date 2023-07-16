import Image from 'next/image'

export default function Home() {
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

      <div class="flex flex-col items-center justify-center">
        <div id="glow"></div>
      </div>

      {/* Input box */}
      <div class="flex flex-col items-center justify-center">
        <input type="text" id="input" placeholder="Enter your message..." />
      </div>

      {/* Settings cog wheel icon */}
      <div class="flex flex-col items-center justify-center" id="settings">
        <img src="https://api.iconify.design/mdi:cog.svg?color=white" alt="settings"/>
      </div>
    </main>
  )
}
