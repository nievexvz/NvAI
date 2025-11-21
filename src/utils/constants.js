export const MODELS = {
  GEMINI: {
    id: 'gemini',
    name: 'Gemini 2.0-flash',
    provider: 'Google',
    description: 'Google\'s advanced AI model',
    color: 'from-purple-500 to-pink-500',
    icon: 'simple-icons:google'
  },
  GROQ_LLAMA: {
    id: 'groq-llama',
    name: 'Llama 3.1 8B',
    provider: 'Groq',
    description: 'Ultra-fast Llama 3.1 model',
    color: 'from-green-500 to-emerald-500',
    icon: 'ph:ribbon-bold'
  },
  QWEN: {
    id: 'qwen',
    name: 'Qwen 3-32b',
    provider: 'Groq',
    description: 'Powerful Qwen model with 32B parameters',
    color: 'from-blue-500 to-cyan-500',
    icon: 'ph:circuitry-bold'
  },
  KIMI: {
    id: 'kimi',
    name: 'Kimi K2 Instruct',
    provider: 'Groq',
    description: 'Moonshot AI\'s Kimi model',
    color: 'from-orange-500 to-red-500',
    icon: 'fluent:bot-24-regular'
  },
  GPT_OSS: {
    id: 'gpt-oss',
    name: 'GPT-4 Turbo',
    provider: 'Groq',
    description: 'Open source GPT model',
    color: 'from-yellow-500 to-orange-500',
    icon: 'simple-icons:openai'
  },
  DEEPSEEK_R1: {
    id: 'deepseek-r1',
    name: 'DeepSeek R1',
    provider: 'Groq',
    description: 'Distilled DeepSeek model',
    color: 'from-indigo-500 to-purple-500',
    icon: 'solar:radar-broken'
  }
}

export const API_ENDPOINTS = {
  GEMINI: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
  GROQ: 'https://api.groq.com/openai/v1/chat/completions'
}

export const GROQ_MODELS = {
  'groq-llama': 'llama-3.1-8b-instant',
  'qwen': 'qwen/qwen3-32b',
  'kimi': 'moonshotai/kimi-k2-instruct-0905',
  'gpt-oss': 'openai/gpt-oss-120b',
  'deepseek-r1': 'whisper-large-v3-turbo'
}
