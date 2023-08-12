import React, { useEffect, useState } from 'react'
import './resultScreen.css'
import { CircularProgress } from '@mui/material'

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
    <div className="box-result">
      {isSend && (!urlImgAnalise || urlImgAnalise === '') ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
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
    </div>
  )
}

export default ResultScreen
