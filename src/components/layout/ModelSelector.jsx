import { Icon } from '@iconify/react'
import { MODELS } from '../../utils/constants'

const ModelSelector = ({ selectedModel, onModelChange }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mb-4">
      <h3 className="text-sm sm:text-base font-semibold text-white mb-3">Select AI Model</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.values(MODELS).map((model) => (
          <button
            key={model.id}
            onClick={() => onModelChange(model.id)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
              selectedModel === model.id
                ? `border-green-400 bg-gradient-to-r ${model.color}/20`
                : 'border-gray-600 hover:border-gray-400 bg-gray-700/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${
                selectedModel === model.id ? 'bg-green-400/20' : 'bg-gray-600'
              }`}>
                <Icon icon={model.icon} className="text-lg" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-white text-sm">{model.name}</div>
                <div className="text-gray-400 text-xs mt-1">{model.description}</div>
              </div>
              {selectedModel === model.id && (
                <Icon 
                  icon="mdi:check-circle" 
                  className="text-green-400 text-lg" 
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ModelSelector