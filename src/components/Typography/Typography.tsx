import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

type TypoBaseProps = Pick<TypographyProps, 'variant' | 'color'>
export interface TypoProps extends TypoBaseProps {
  label: string
}

export const AuiTypography = ({ label = 'Typography', ...rest }: TypoProps) => {
  return <Typography {...rest}>{label}</Typography>
}
