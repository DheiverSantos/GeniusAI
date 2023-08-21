import { TextField, Box, Typography } from '@mui/material'

import './explication.css'

interface ExplicationProps {
  explicationAnalise: string
}

export default function Explication({ explicationAnalise }: ExplicationProps) {
  const isPlaceholder = !explicationAnalise

  return (
    <Box className="box-explication">
      <Typography
        variant="body1"
        className={isPlaceholder ? 'placeholder-text' : ''}
      >
        {explicationAnalise || 'explicação'}
      </Typography>
    </Box>
  )
}
