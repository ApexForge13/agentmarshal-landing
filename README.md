# AgentMarshal — Landing page

Marketing site for **AgentMarshal**: compliance and governance for autonomous AI agent fleets. Built on Veea's Lobster Trap.

🌐 **Live:** [agentmarshal.dev](https://agentmarshal.dev)
🎥 **Demo video:** [90-second walkthrough](https://youtu.be/r06KiTgo7-Q)
▶️ **Live app demo:** [demo.agentmarshal.dev](https://demo.agentmarshal.dev)
📦 **Main repo:** [github.com/ApexForge13/agentmarshal](https://github.com/ApexForge13/agentmarshal)

## Stack

- Vite + React 18 + TypeScript
- Hand-rolled CSS (no Tailwind, no UI library) — every component is custom
- Custom SVG illustrations for the hero diagram and architecture section
- Deployed on Vercel (auto-deploy from `main`)

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Project structure
src/
├── components/        # All page sections (Nav, Hero, Architecture, etc.)
│   ├── HeroDiagram.tsx
│   ├── Architecture.tsx
│   ├── DemoVideo.tsx
│   └── ...
├── styles/
│   └── global.css     # CSS variables, base styles
├── App.tsx            # Section composition
└── main.tsx           # Entry

## License

MIT. See the main [AgentMarshal repo](https://github.com/ApexForge13/agentmarshal) for the full license text.
