import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Icon } from '@iconify/react'

const CodeBlock = ({ language, value }) => {
  const [copied, setCopied] = useState(false)
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  
  return (
    <div className="my-3 rounded-lg overflow-hidden border border-gray-600 min-w-screen">
      <div className="flex justify-between items-center bg-gray-800 px-3 py-2">
        <span className="text-xs font-mono text-gray-300 truncate flex-1 mr-2">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs text-white transition-colors whitespace-nowrap"
        >
          <Icon icon={copied ? "mdi:check" : "mdi:content-copy"} className="text-xs" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            background: '#1f2937',
            fontSize: '0.8rem',
            lineHeight: '1.4',
            minWidth: 'min-content'
          }}
          showLineNumbers
          wrapLongLines={true}
        >
          {value}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock