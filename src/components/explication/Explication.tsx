import { Box, Typography } from '@mui/material'
import { boxExplicationStyles, placeholderTextStyles } from './style.ts'

interface ExplicationProps {
  explicationAnalise: string
}

export default function Explication({ explicationAnalise }: ExplicationProps) {
  const isPlaceholder = !explicationAnalise

  return (
    <Box sx={boxExplicationStyles}>
      <Typography
        variant="body1"
        sx={isPlaceholder ? placeholderTextStyles : {}}
      >
        {explicationAnalise || 'explicação'}
      </Typography>
    </Box>
  )
}
