# AI Chat Assistant

A modern chat interface with Markdown support and code syntax highlighting, powered by Gemini and Groq AI.

## Features

- 🤖 Multiple AI models (Gemini & Groq)
- 📝 Markdown support with syntax highlighting
- 📱 Responsive design for mobile & desktop
- 🎨 Glassmorphism UI design
- 💾 Local storage for chat history
- ⚡ Fast and lightweight

## Deployment

### Deploy to Vercel

1. Fork this repository
2. Go to [Vercel](https://vercel.com)
3. Import your forked repository
4. Add environment variables:
   - `VITE_GEMINI_API_KEY` - Your Gemini API key
   - `VITE_GROQ_API_KEY` - Your Groq API key
   - `VITE_QWEN_KEY` - Your 2nd Groq API key
   - `VITE_KIMI_KEY` - Your 3rd Groq API Key
   - `VITE_GPTOSS_KEY` - Your 4th Groq API key
   - `VITE_DEEPSEEK_KEY` - Your 5th (Last) Groq API key
5. Deploy!

### Environment Variables

Create `.env` file for local development:

```.env
VITE_GEMINI_API_KEY=AIzaSy***
VITE_GROQ_API_KEY=gsk_***
VITE_QWEN_KEY=gsk_***
VITE_KIMI_KEY=gsk_***
VITE_GPTOSS_KEY=gsk_***
VITE_DEEPSEEK_KEY=gsk_***
```

---

### Project Structure

```
NvAI/
├── public/
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInterface.jsx
│   │   │   ├── Message.jsx
│   │   │   ├── MessageInput.jsx
│   │   │   └── MessageList.jsx
│   │   ├── code/
│   │   │   └── CodeBlock.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── ModelSelector.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── GlassCard.jsx
│   │       ├── Loading.jsx
│   │       └── ModelDropdown.jsx
│   ├── hooks/
│   │   ├── useChat.js
│   │   └── useLocalStorage.js
│   ├── services/
│   │   ├── api.js
│   │   └── api.test.js
│   ├── styles/
│   │   └── globals.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

### Run locally

```bash
# Clone Repository
git clone https://github.com/nievexvz/NvAI.git
cd NvAI

# Install Dependencies
npm i

# Run local server
npm run dev
```

---

## 🔥 Made for dev by NiineTwelve
