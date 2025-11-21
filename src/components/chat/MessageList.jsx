import Message from './Message'
import Loading from '../ui/Loading'

const MessageList = ({ messages, isLoading, messagesEndRef }) => {
  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-text-light mb-3">
            Start a Conversation
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Ask me anything! I can help with coding, writing, analysis, and much more. 
            I support markdown formatting and code syntax highlighting.
          </p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex gap-4 animate-fade-in">
            <div className="flex-shrink-0 w-10 h-10 rounded-full glass flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
            <div className="message-ai rounded-2xl p-4 flex-1">
              <Loading text="AI is thinking..." />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}

export default MessageList