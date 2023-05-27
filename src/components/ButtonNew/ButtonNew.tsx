import React from 'react'
// import './button.css'
import { Button } from '@mui/material'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'contained' | 'outlined' | 'text'
  // color?: string
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label?: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export default function AuiButtonNew({ label, variant='contained', size }: ButtonProps) {
  // const mode = variant ? 'storybook-button--variant' : 'storybook-button--secondary'
  return <Button variant={variant} size={size} > {label} </Button>
}
