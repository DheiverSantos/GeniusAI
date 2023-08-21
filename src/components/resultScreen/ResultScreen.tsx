import React, { useEffect, useState } from 'react'
import './resultScreen.css'
import { Box, CircularProgress } from '@mui/material'

interface ResultScreenProps {
  isResetImg: boolean
  urlImgAnalise: string
  isSend: boolean
}

const ResultScreen: React.FC<ResultScreenProps> = ({
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
    <Box className="box-result">
      {isSend && (!urlImgAnalise || urlImgAnalise === '') ? (
        <Box className="spinner-container">
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

export default ResultScreen
