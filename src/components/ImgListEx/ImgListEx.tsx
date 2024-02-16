import React from 'react'
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material'

interface ImageItem {
  img: string
  title: string
}

interface ImageSelectorProps {
  imageList: ImageItem[]
  setSelectedImage: (imageUrl: Blob | null) => void
}

export const ImgListEx: React.FC<ImageSelectorProps> = ({
  imageList,
  setSelectedImage,
}) => {
  const handleSelectImage = async (imagePath: string) => {
    try {
      const response = await fetch(imagePath)
      const blob = await response.blob()
      setSelectedImage(blob)
    } catch (error) {
      console.error('Error converting image to blob:', error)
      setSelectedImage(null)
    }
  }

  return (
    <Box
      sx={{
        overflowY: 'auto',
        maxHeight: 300,
        width: '70%',
        my: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{ mb: 2, color: '#1d4ed8', fontWeight: 'bold' }}
      >
        {' '}
        Exemplos de Teste
      </Typography>
      <ImageList
        gap={8}
        cols={imageList.length}
        sx={{ width: 'auto', height: 'auto' }}
      >
        {imageList.map((item, index) => (
          <ImageListItem
            key={index}
            onClick={() => handleSelectImage(item.img)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
