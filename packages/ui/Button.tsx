'use client'

interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label?: string,
  backgroundColor?: string
}

export const Button = ({
  primary = false,
  size = 'small',
  label = 'Boop',
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: primary ? 'blue' : 'red',
        fontSize:
          size === 'small' ? '1rem' : size === 'medium' ? '2rem' : '3rem'
      }}
      onClick={() => alert('boop')}
    >
      {label}
    </button>
  )
}
