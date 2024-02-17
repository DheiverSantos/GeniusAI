import React, { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { boxResultStyles, spinnerContainerStyles } from './style'

interface ResultScreenProps {
  isResetImg: boolean
  urlImgAnalise: string
  isSend: boolean
}

export const ResultScreenWithImage: React.FC<ResultScreenProps> = ({
  isResetImg,
  urlImgAnalise,
  isSend,
}) => {
  const [urlImg, setUrlImg] = useState(urlImgAnalise)

  useEffect(() => {
    setUrlImg(urlImgAnalise)
  }, [urlImgAnalise])

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    ;(e.target as HTMLImageElement).style.display = 'none'
  }

  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    ;(e.target as HTMLImageElement).style.display = 'block'
  }

  return (
    <Box sx={boxResultStyles}>
      {isSend && (!urlImgAnalise || urlImgAnalise === '') ? (
        <Box sx={spinnerContainerStyles}>
          <CircularProgress />
        </Box>
      ) : (
        <img
          src={isResetImg ? '' : urlImg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      )}
    </Box>
  )
}
