import React from 'react'
import Button, { ButtonProps as MuiBtnProps } from '@mui/material/Button'

type ButtonBaseProps = Pick<MuiBtnProps, 'variant' | 'size' | 'color' | 'sx' | 'onClick'>
export interface ButtonProps extends ButtonBaseProps {
  label: string
  className?: string
}

export const AuiButton = ({ label = 'Button', className, ...props }: ButtonProps) => {
  return (
    <Button className={className} {...props}>
      {label}
    </Button>
  )
}
