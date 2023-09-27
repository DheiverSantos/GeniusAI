import { Box, Typography } from '@mui/material'
import { boxExplicationStyles, placeholderTextStyles } from './style.ts'
import Skeleton from '@mui/material/Skeleton'

interface ExplicationProps {
  explicationAnalise: string
  isLoading?: boolean
}

export default function Explication({
  explicationAnalise,
  isLoading,
}: ExplicationProps) {
  const isPlaceholder = !explicationAnalise

  if (isLoading) {
    return (
      <Box sx={boxExplicationStyles}>
        <Skeleton variant="text" width="80%" height="40px" />
      </Box>
    )
  }

  return (
    <Box sx={boxExplicationStyles}>
      <Typography
        variant="body1"
        sx={isPlaceholder ? placeholderTextStyles : {}}
      >
        {explicationAnalise || 'Análise'}
      </Typography>
    </Box>
  )
}
