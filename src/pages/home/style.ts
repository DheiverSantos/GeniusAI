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
  height: '30%',
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
    position: 'relative',
    zIndex: 0,
  },
  '& video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 0,
  },
}

export const vidroStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  fontWeight: 700,
  fontSize: {
    xs: '1.5rem',
    sm: '1.9rem',
    md: '2.5rem',
  },
}

export const subTitleStyle = {
  color: 'white',
  fontWeight: 500,
  width: '50%',
  textAlign: 'center',
  display: {
    xs: 'none',
    sm: 'none',
    md: 'block',
  },
}

export const cardsSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '90%',
  gap: 5,
  margin: '4rem 0',
}
