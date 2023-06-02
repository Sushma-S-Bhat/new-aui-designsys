import React from 'react'
import { Card, Typography, Stack } from '@mui/material'
import { AuiButton } from '../Button/Button'
interface ActionCardProps {
  btnText?: string
  cardContent: string
  hasBtn: boolean
  cardHeader: string
  cardImage: string
}

export const ActionCard = ({
  cardHeader = 'Hello',
  cardContent = 'Welcome to Aglint and make your career transitions smooth and painless with our AI tools that eases all your works and efforts and helps you build your career',
  hasBtn = true,
  cardImage = 'https://app.aglinthq.com/_next/image?url=%2Fimages%2Ftoolbox%2Finterview.svg&w=3840&q=75',
  btnText = "Let's Begin",
}: ActionCardProps) => {
  return (
    <Card
      variant='outlined'
      sx={{
        p: 2,
        transition: '0.5s all ease',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundColor: 'card.main.hover.background',
          borderColor: 'card.main.hover.border',
        },
        '&:hover .cardBtn': {
          bgcolor: 'card.main.hover.buttonbackground',
          color: 'card.main.hover.buttontext',
        },
      }}
    >
      <Stack gap={1.5}>
        <img src={cardImage} height='200' width='200' alt={cardHeader}></img>
        <Typography variant='h6'>{cardHeader}</Typography>

        <Typography variant='body2'>{cardContent}</Typography>
        {hasBtn && <AuiButton size='medium' variant={'contained'} sx={{ alignSelf: 'flex-end' }} label={btnText} />}
      </Stack>
    </Card>
  )
}
