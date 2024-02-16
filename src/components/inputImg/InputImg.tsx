import React, { useState, ChangeEvent, useEffect, useRef } from 'react' // Adicionando useRef
import { Box } from '@mui/material'
import { DialogAlert } from '../DialogAlert/DialogAlert'
import { pictureStyles, inputStyles } from './style'

interface InputImgProps {
  isResetImg: boolean
  setSelectedImage: (blob: Blob) => void
  selectedImageBlob?: Blob | null
}

const InputImg: React.FC<InputImgProps> = ({
  isResetImg,
  setSelectedImage,
  selectedImageBlob,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [tempFile, setTempFile] = useState<File | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (selectedImageBlob) {
      const imageUrl = URL.createObjectURL(selectedImageBlob)
      setImageSrc(imageUrl)

      return () => {
        URL.revokeObjectURL(imageUrl)
      }
    }
  }, [selectedImageBlob])

  useEffect(() => {
    if (isResetImg) {
      setImageSrc(null)
      setTempFile(null)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }, [isResetImg])

  const loadImage = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = async () => {
      setImageSrc(reader.result as string)

      const response = await fetch(reader.result as string)
      const blob = await response.blob()
      setSelectedImage(blob)
    }
    reader.readAsDataURL(file)
  }

  const handleConfirm = () => {
    if (tempFile) {
      loadImage(tempFile)
    }
    setOpenDialog(false)
  }

  const handleCancel = () => {
    setImageSrc(null)
    setTempFile(null)
    setOpenDialog(false)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setTempFile(file)
      setOpenDialog(true)
    } else {
      setImageSrc(null)
      setTempFile(null)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      setTempFile(file)
      setOpenDialog(true)
    }
  }

  const preventDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <Box onDrop={handleDrop} onDragOver={preventDragHandler}>
        <Box
          component="label"
          htmlFor="picture__input"
          tabIndex={0}
          sx={pictureStyles}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="preview"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
              }}
            />
          ) : (
            <span>Arraste aqui ou insira imagem</span>
          )}
        </Box>
        <input
          ref={inputRef}
          type="file"
          id="picture__input"
          name="picture__input"
          onChange={handleInputChange}
          accept="image/*"
          style={inputStyles}
        />
      </Box>
      <DialogAlert
        open={openDialog}
        handleClose={handleCancel}
        handleConfirm={handleConfirm}
      />
    </>
  )
}

export default InputImg
