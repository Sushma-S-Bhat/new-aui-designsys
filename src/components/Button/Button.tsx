import React from 'react'
import Button from '@mui/material/Button'
interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  //onClick?: () => void
}
/**
 * Primary UI component for user interaction
 */
export const AuiButton = ({
  variant = "contained",
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      {...props}
    >
      {label}
    </Button>
  );
};

