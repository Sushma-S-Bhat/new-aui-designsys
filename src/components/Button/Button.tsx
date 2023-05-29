import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export const AuiButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>
}
