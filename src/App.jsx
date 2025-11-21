import ChatInterface from './components/chat/ChatInterface'
import { useChat } from './hooks/useChat'

function App() {
  const chat = useChat()
  
  return (
    <div className="h-full bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300">
      <ChatInterface {...chat} />
    </div>
  )
}

export default App