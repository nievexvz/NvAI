import { Icon } from '@iconify/react'

const Loading = ({ size = 'medium', text = 'Thinking...' }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }
  
  return (
    <div className="flex items-center gap-3 text-primary-200">
      <Icon 
        icon="svg-spinners:3-dots-scale" 
        className={`${sizes[size]} animate-spin`} 
      />
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default Loading