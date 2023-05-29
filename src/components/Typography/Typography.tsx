import React from 'react'
import Typography from '@mui/material/Typography'
interface TypographyProps {
  variant?: string
  /**
   * How large should the button be?
   */
  component: string
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
export const AuiTypography = ({
  variant='body',
  component = 'p',
  label='typography',
  ...props
}: TypographyProps) => {
  return (
    <Typography variant={variant} component={component}>
      { label }  
    </Typography>
  )
}

