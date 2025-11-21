import { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { MODELS } from '../../utils/constants'

const ModelDropdown = ({ selectedModel, onModelChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  const selectedModelData = MODELS[selectedModel] || MODELS.GROQ_LLAMA
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const handleModelSelect = (modelId) => {
    onModelChange(modelId)
    setIsOpen(false)
  }
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Compact Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-500 rounded-lg text-white transition-all duration-200 text-sm"
        title={`Selected: ${selectedModelData.name}`}
      >
        <Icon icon={selectedModelData.icon} className="text-sm" />
        <span className="hidden sm:inline max-w-24 truncate">
          {selectedModelData.name}
        </span>
        <Icon 
          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
          className="text-gray-400 text-sm"
        />
      </button>

      {/* Dropdown Menu - Compact */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl z-50 max-h-64 overflow-y-auto min-w-48">
          <div className="p-1">
            {/* Gemini */}
            <button
              onClick={() => handleModelSelect('gemini')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'gemini' 
                  ? 'bg-purple-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.GEMINI.icon} className="text-sm" />
              <span className="flex-1">{MODELS.GEMINI.name}</span>
              {selectedModel === 'gemini' && (
                <Icon icon="mdi:check" className="text-purple-400 text-sm" />
              )}
            </button>

            {/* Divider */}
            <div className="border-t border-gray-600 my-1"></div>

            {/* Groq Models */}
            <button
              onClick={() => handleModelSelect('groq-llama')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'groq-llama' 
                  ? 'bg-green-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.GROQ_LLAMA.icon} className="text-sm" />
              <span className="flex-1">{MODELS.GROQ_LLAMA.name}</span>
              {selectedModel === 'groq-llama' && (
                <Icon icon="mdi:check" className="text-green-400 text-sm" />
              )}
            </button>

            <button
              onClick={() => handleModelSelect('qwen')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'qwen' 
                  ? 'bg-blue-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.QWEN.icon} className="text-sm" />
              <span className="flex-1">{MODELS.QWEN.name}</span>
              {selectedModel === 'qwen' && (
                <Icon icon="mdi:check" className="text-blue-400 text-sm" />
              )}
            </button>

            <button
              onClick={() => handleModelSelect('kimi')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'kimi' 
                  ? 'bg-orange-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.KIMI.icon} className="text-sm" />
              <span className="flex-1">{MODELS.KIMI.name}</span>
              {selectedModel === 'kimi' && (
                <Icon icon="mdi:check" className="text-orange-400 text-sm" />
              )}
            </button>

            <button
              onClick={() => handleModelSelect('gpt-oss')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'gpt-oss' 
                  ? 'bg-yellow-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.GPT_OSS.icon} className="text-sm" />
              <span className="flex-1">{MODELS.GPT_OSS.name}</span>
              {selectedModel === 'gpt-oss' && (
                <Icon icon="mdi:check" className="text-yellow-400 text-sm" />
              )}
            </button>

            <button
              onClick={() => handleModelSelect('deepseek-r1')}
              className={`flex items-center gap-2 w-full p-2 rounded text-left transition-all text-sm ${
                selectedModel === 'deepseek-r1' 
                  ? 'bg-indigo-500/20 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon icon={MODELS.DEEPSEEK_R1.icon} className="text-sm" />
              <span className="flex-1">{MODELS.DEEPSEEK_R1.name}</span>
              {selectedModel === 'deepseek-r1' && (
                <Icon icon="mdi:check" className="text-indigo-400 text-sm" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModelDropdown