import React from 'react'
import Chip from '@mui/material/Chip'
interface ButtonProps {
  variant?: 'filled' | 'outlined'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium'
  /**
   * Button contents
   */
  color?: 'success' | 'error' | 'default'
  label: string
  /**
   * Optional click handler
   */
  //onClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
export const AuiChip = ({
  variant = 'filled',
  size = 'small',
  color = 'default',
  label = 'chip',
  ...props
}: ButtonProps) => {
  return (
    <Chip
      variant={variant}
      size={size}
      {...props}
      color={color}
      label={label}
    > 
    </Chip>
  )
}
