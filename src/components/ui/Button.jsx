import { Icon } from '@iconify/react'
import Loading from './Loading'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-offset-2 focus:ring-offset-dark-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'btn-primary text-dark-300 shadow-lg shadow-primary-200/25',
    secondary: 'btn-secondary text-text-light shadow-lg shadow-black/10',
    ghost: 'text-text-light hover:bg-white/5'
  }
  
  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3 text-sm',
    large: 'px-6 py-3 text-base'
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loading size="small" />}
      {!loading && icon && iconPosition === 'left' && (
        <Icon icon={icon} className="text-lg" />
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && (
        <Icon icon={icon} className="text-lg" />
      )}
    </button>
  )
}

export default Button