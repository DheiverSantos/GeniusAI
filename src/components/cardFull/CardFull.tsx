import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface CardFullProps {
  modelsInfoProps: {
    thumb: string
    alias: string
    description: string
  }
}

export default function CardFull({ modelsInfoProps }: CardFullProps) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 350, minWidth: 300, marginBottom: '2rem' }}>
      <CardActionArea onClick={() => navigate(`/${modelsInfoProps.alias}`)}>
        <CardMedia
          component="img"
          height="140"
          image={modelsInfoProps.thumb}
          alt="thumb"
        />
        <CardContent sx={{ minHeight: 200 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#1d4ed8' }}
          >
            {modelsInfoProps.alias}
          </Typography>
          <Typography variant="body2" align="justify">
            {modelsInfoProps.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
