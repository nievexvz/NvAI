import { Icon } from '@iconify/react'
import Button from '../ui/Button'
import GlassCard from '../ui/GlassCard'
import ModelDropdown from '../ui/ModelDropdown'

const MessageInput = ({
  input,
  setInput,
  isLoading,
  onSendMessage,
  onKeyPress,
  selectedModel,
  onModelChange
}) => {
  return (
    <GlassCard className="p-4">
      <div className="flex gap-2">
        {/* Model Dropdown - Compact */}
        <div className="flex-shrink-0">
          <ModelDropdown
            selectedModel={selectedModel}
            onModelChange={onModelChange}
          />
        </div>
        
        {/* Message Input */}
        <div className="flex-1">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyPress}
            placeholder={`Message ${selectedModel}... (Enter to send)`}
            className="w-full bg-transparent border-none outline-none resize-none py-2 px-3 text-white placeholder-gray-400 max-h-32 scrollbar-thin text-sm"
            rows="1"
            disabled={isLoading}
          />
        </div>
        
        {/* Send Button */}
        <Button
          onClick={onSendMessage}
          disabled={!input.trim() || isLoading}
          loading={isLoading}
          size="small"
          className="self-end flex-shrink-0"
        >
          <Icon icon="lucide:send" className="text-white text-2xl" />
        </Button>
      </div>
      
      <div className="mt-2 flex justify-between items-center">
        <p className="text-xs text-gray-400">
          Press Enter to send, Shift+Enter for new line
        </p>
        <p className="text-xs text-gray-400 hidden sm:block">
          Model: {selectedModel}
        </p>
      </div>
    </GlassCard>
  )
}

export default MessageInput
