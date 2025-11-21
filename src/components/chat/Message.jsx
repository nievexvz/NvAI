import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from '../code/CodeBlock'

const Message = ({ message }) => {
  const isUser = message.role === 'user'
  const isError = message.isError
  
  const components = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')
      const language = match ? match[1] : ''
      const value = String(children).replace(/\n$/, '')
      
      if (!inline && language) {
        return <CodeBlock language={language} value={value} />
      }
      
      return (
        <code className="bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono text-green-400 break-words" {...props}>
          {children}
        </code>
      )
    },
    pre: ({ children }) => <div className="my-2">{children}</div>,
    table: ({ children }) => (
      <div className="overflow-x-auto my-2 border border-gray-600 rounded">
        <table className="min-w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-600 px-2 py-1 bg-gray-700 font-semibold text-sm">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-600 px-2 py-1 text-sm break-words">
        {children}
      </td>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-3 my-2 italic text-gray-300 text-sm">
        {children}
      </blockquote>
    ),
    // Untuk heading yang lebih kecil di mobile
    h1: ({ children }) => <h1 className="text-lg font-bold my-2">{children}</h1>,
    h2: ({ children }) => <h2 className="text-md font-bold my-2">{children}</h2>,
    h3: ({ children }) => <h3 className="text-sm font-bold my-1">{children}</h3>,
  }
  
  return (
    <div className={`flex gap-2 sm:gap-3 ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
          <span className="text-white text-xs sm:text-sm">AI</span>
        </div>
      )}
      
      <div className={`max-w-[85%] sm:max-w-3xl rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
        isUser 
          ? 'bg-blue-600 text-white' 
          : isError 
            ? 'bg-red-900/80 text-white' 
            : 'bg-gray-800 text-white'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs sm:text-sm font-medium">
            {isUser ? 'You' : message.model ? `${message.model.charAt(0).toUpperCase() + message.model.slice(1)}` : 'AI'}
          </span>
          <span className="text-xs opacity-70">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        
        <div className="prose prose-invert max-w-none text-xs sm:text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={components}
            className="leading-relaxed break-words"
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <span className="text-white text-xs sm:text-sm">You</span>
        </div>
      )}
    </div>
  )
}

export default Message