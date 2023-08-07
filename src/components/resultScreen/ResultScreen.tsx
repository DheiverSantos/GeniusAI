import React, { useEffect, useState } from 'react'

interface ResultScreenProps {
  isResetImg: boolean
  urlImgAnalise: string
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  isResetImg,
  urlImgAnalise,
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
    <div
      style={{
        width: '37.5rem',
        height: '38.75rem',
        border: '2px dashed blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
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
    </div>
  )
}

export default ResultScreen
