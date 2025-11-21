import Header from '../layout/Header'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const ChatInterface = ({
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
}) => {
  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto p-4">
      <Header 
        onClearChat={clearChat} 
        messageCount={messages.length} 
      />

      <div className="flex-1 flex flex-col min-h-0">
        <div className="glass-card flex-1 flex flex-col min-h-0 mb-4">
          <MessageList 
            messages={messages}
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
          />
        </div>
        
        <MessageInput
          input={input}
          setInput={setInput}
          isLoading={isLoading}
          onSendMessage={sendMessage}
          onKeyPress={handleKeyPress}
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />
      </div>
    </div>
  )
}

export default ChatInterface