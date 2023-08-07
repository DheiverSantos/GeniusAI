import { useState, ChangeEvent } from 'react'
import './InputImg.css'

function InputImg() {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImageSrc(null)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageSrc(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const preventDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return (
    <div onDrop={handleDrop} onDragOver={preventDragHandler}>
      <label className="picture" htmlFor="picture__input" tabIndex={0}>
        {imageSrc ? (
          <img src={imageSrc} alt="preview" className="picture__image" />
        ) : (
          <span className="picture__image">Choose an image</span>
        )}
      </label>
      <input
        type="file"
        id="picture__input"
        name="picture__input"
        onChange={handleInputChange}
        accept="image/*"
      />
    </div>
  )
}

export default InputImg
