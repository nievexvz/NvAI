import { useState, useRef, useEffect, useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'
import ChatAPI from '../services/api'

export const useChat = () => {
  const [messages, setMessages] = useLocalStorage('ai-chat-messages', [])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useLocalStorage('ai-chat-model', 'deepseek')
  const messagesEndRef = useRef(null)
  
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  
  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])
  
  const sendMessage = async () => {
    const trimmedInput = input.trim()
    if (!trimmedInput || isLoading) return
    
    const userMessage = {
      role: 'user',
      content: trimmedInput,
      timestamp: new Date(),
      id: Date.now()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    
    try {
      const response = await ChatAPI.sendMessage(trimmedInput, selectedModel, messages)
      const aiMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        model: selectedModel,
        id: Date.now() + 1
      }
      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      const errorMessage = {
        role: 'assistant',
        content: `**Error:** ${error.message}\n\nPlease check your API keys and try again.`,
        timestamp: new Date(),
        isError: true,
        id: Date.now() + 1
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }
  
  const clearChat = () => {
    setMessages([])
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }
  
  return {
    messages,
    input,
    setInput,
    isLoading,
    selectedModel,
    setSelectedModel,
    sendMessage,
    clearChat,
    handleKeyPress,
    messagesEndRef
  }
}