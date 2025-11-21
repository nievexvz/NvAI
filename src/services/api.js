import { API_ENDPOINTS, GROQ_MODELS } from '../utils/constants'

class ChatAPI {
  static async sendMessage(message, model, conversationHistory = []) {
    try {
      console.log(`Sending message to ${model}...`)
      
      if (model === 'gemini') {
        return await this.sendToGemini(message, conversationHistory)
      } else {
        // Semua model selain Gemini menggunakan Groq endpoint
        return await this.sendToGroq(message, conversationHistory, model)
      }
    } catch (error) {
      console.error('API Error:', error)
      throw new Error(`Failed to get response from ${model}: ${error.message}`)
    }
  }
  
  static async sendToGroq(message, conversationHistory, modelId) {
    // Get the correct API key based on model
    const API_KEYS = {
      'groq-llama': import.meta.env.VITE_GROQ_API_KEY,
      'qwen': import.meta.env.VITE_QWEN_KEY,
      'kimi': import.meta.env.VITE_KIMI_KEY,
      'gpt-4-turbo': import.meta.env.VITE_GPTOSS_KEY,
      'llama-guard': import.meta.env.VITE_DEEPSEEK_KEY
    }
    
    const apiKey = API_KEYS[modelId]
    
    if (!apiKey) {
      throw new Error(`API key not found for ${modelId}. Please check your environment variables.`)
    }
    
    // Get the actual model name for Groq API
    const groqModel = GROQ_MODELS[modelId]
    if (!groqModel) {
      throw new Error(`Model configuration not found for ${modelId}`)
    }
    
    const messages = [
      {
        role: "system",
        content: "You are a helpful AI assistant. Use markdown formatting for code blocks, lists, tables, and other structured content to improve readability."
      },
      ...conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: "user", content: message }
    ]
    
    const response = await fetch(API_ENDPOINTS.GROQ, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        messages: messages,
        model: groqModel,
        temperature: 0.7,
        max_tokens: 2048,
        stream: false
      })
    })
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
      throw new Error(`Groq API error (${modelId}): ${response.status} - ${errorData.error?.message || errorData.error || 'Unknown error'}`)
    }
    
    const data = await response.json()
    return data.choices[0].message.content
  }
  
  static async sendToGemini(message, conversationHistory) {
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
    
    if (!GEMINI_API_KEY) {
      throw new Error('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your environment variables.')
    }
    
    // Convert conversation history (max 6 messages)
    const contents = conversationHistory.slice(-6).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }))
    
    // Add current message
    contents.push({
      role: "user",
      parts: [{ text: message }]
    })
    
    const response = await fetch(API_ENDPOINTS.GEMINI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': GEMINI_API_KEY
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      })
    })
    
    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`Gemini API error ${response.status}: ${errText}`)
    }
    
    const data = await response.json()
    
    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Gemini API: No response generated")
    }
    
    return data.candidates[0].content.parts[0].text
  }
}

export default ChatAPI