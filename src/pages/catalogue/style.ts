export const mainStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background: '#FBF8FF',
}

export const bannerStyle = {
  position: 'relative',
  width: '100%',
  height: '40%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2rem',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(357deg, #FBF8FF 25.42%, rgba(255, 255, 255, 0.08) 38.41%)',
    zIndex: 1,
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative', // Isso garante que a imagem fique atrás do ::before pseudo-element
    zIndex: 0,
  },
}

export const vidroStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Isto move o box de volta para cima e para a esquerda pela metade de sua altura e largura, respectivamente.
  zIndex: 1,
  borderRadius: '20px',
  background:
    'linear-gradient(112deg, rgba(187, 160, 201, 0.29) 0.5%, rgba(187, 160, 201, 0.19) 99.19%)',
  backdropFilter: 'blur(15px)',
  width: '50%',
  height: '80%',
}

export const bodyBanner = {
  zIndex: 2,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
}

export const titleStyle = {
  color: '#071047',
  textAlign: 'center',
  fontFamily: 'Poppins',
  // fontStyle: 'normal',
  fontWeight: 700,
}

export const subTitleStyle = {
  color: 'white',
  fontWeight: 500,
  width: '50%',
  textAlign: 'center',
}

export const cardsSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  gap: 5,
}
