import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'
// interface TypographyProps {
//   variant?: 'body1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body'
//   /**
//    * How large should the button be?
//    */
//   component: string
//   /**
//    * Button contents
//    */
//   label: string
//   /**
//    * Optional click handler
//    */
//   //onClick?: () => void
// }
// /**
//  * Primary UI component for user interaction
//  */
export const AuiTypography = ({ children, ...rest }: TypographyProps) => {
  return <Typography {...rest}>{children}</Typography>
}
