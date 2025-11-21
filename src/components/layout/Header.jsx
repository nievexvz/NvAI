import { Icon } from '@iconify/react'
import Button from '../ui/Button'

const Header = ({ onClearChat, messageCount }) => {
  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
            <Icon icon="mdi:robot" className="text-2xl text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">NvAI Assistant</h1>
            <p className="text-gray-300 text-sm">Multiple AI models powered by Gemini & Groq</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {messageCount > 0 && (
            <span className="text-gray-400 text-sm hidden md:block">
              {messageCount} messages
            </span>
          )}
          <Button
            variant="secondary"
            icon="mdi:trash-can"
            onClick={onClearChat}
            disabled={messageCount === 0}
          >
            Clear Chat
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header